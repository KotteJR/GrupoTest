import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { OpenAI } from 'openai';
import mammoth from 'mammoth';

// Explicitly load .env.local before any other code runs
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

/**
 * @file This script is the heart of the "build-time" RAG processing.
 * It runs *once* when you build your project.
 *
 * 1. Reads all documents from the KNOWLEDGE_BASE folder.
 * 2. Parses, cleans, and chunks the text content.
 * 3. Calls the OpenAI API to generate vector embeddings for each chunk.
 * 4. Saves the entire processed knowledge base into a single, optimized
 *    JSON file (`public/knowledge-base.json`) that the live application can
 *    load instantly.
 *
 * This approach ensures that your live chatbot is incredibly fast and scalable,
 * as all the slow, heavy work is done upfront during the build.
 */

// --- Configuration ---
const KNOWLEDGE_BASE_DIR = path.join(process.cwd(), 'KNOWLEDGE_BASE');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'knowledge-base.json');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("🔴 Fatal Error: OPENAI_API_KEY is not set in the environment.");
  console.error("   Please create a .env.local file and add your OpenAI API key.");
  console.error("   The build process cannot continue without it.");
  process.exit(1); // Exit with an error code
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// --- Helper Functions (from the original loadDocuments.ts) ---

async function getEmbedding(text, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text.substring(0, 8191), // Truncate for safety
      });
      return response.data[0].embedding;
    } catch (error) {
      if (error.status === 429 && i < retries - 1) {
        console.warn(`   - Rate limit hit. Retrying in ${delay / 1000}s...`);
        await new Promise(res => setTimeout(res, delay));
        delay *= 2; // Exponential backoff
      } else {
        throw error;
      }
    }
  }
  throw new Error("Failed to get embedding after multiple retries.");
}

function chunkText(text) {
  const MAX_LENGTH = 1000, OVERLAP = 150;
  if (!text || text.length < 50) return [];
  const chunks = [];
  let startIndex = 0;
  while (startIndex < text.length) {
    const endIndex = Math.min(startIndex + MAX_LENGTH, text.length);
    const chunk = text.slice(startIndex, endIndex).trim();
    if (chunk.length > 20) chunks.push(chunk);
    startIndex += MAX_LENGTH - OVERLAP;
  }
  return chunks;
}

function parseJsonContent(jsonData) {
  const textParts = [];
  function extractText(obj) {
    if (typeof obj === 'string' && obj.trim().length > 10) textParts.push(obj.trim());
    else if (Array.isArray(obj)) obj.forEach(extractText);
    else if (typeof obj === 'object' && obj !== null) Object.values(obj).forEach(extractText);
  }
  extractText(jsonData);
  return textParts.join(' ');
}

// --- Main Build Logic ---

async function main() {
  console.log("🔵 [RAG Build] Starting knowledge base build process...");

  if (!fs.existsSync(KNOWLEDGE_BASE_DIR)) {
    console.error(`🔴 Fatal Error: KNOWLEDGE_BASE directory not found at ${KNOWLEDGE_BASE_DIR}.`);
    process.exit(1);
  }

  const files = fs.readdirSync(KNOWLEDGE_BASE_DIR)
    .filter(file => ['.json', '.docx', '.txt', '.md'].includes(path.extname(file).toLowerCase()));

  if (files.length === 0) {
    console.warn("🟡 [RAG Build] No documents found. The chatbot will have no knowledge.");
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
    return;
  }

  console.log(`   Found ${files.length} documents to process.`);
  const allChunks = [];
  let totalChunks = 0;

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_BASE_DIR, file);
    console.log(`   - Processing ${file}...`);
    let content = '';

    try {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.json') {
        content = parseJsonContent(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
      } else if (ext === '.docx') {
        const { value } = await mammoth.extractRawText({ path: filePath });
        content = value;
      } else {
        content = fs.readFileSync(filePath, 'utf-8');
      }

      if (!content || content.length < 20) {
        console.warn(`     ...skipped (no content).`);
        continue;
      }
      
      const textChunks = chunkText(content);
      totalChunks += textChunks.length;

      for (const [i, chunk] of textChunks.entries()) {
        const embedding = await getEmbedding(chunk);
        allChunks.push({
          id: `${file}_${i}`,
          content: chunk,
          embedding,
          metadata: { filename: file }
        });
        process.stdout.write(`\r     ...generated embedding for chunk ${i + 1}/${textChunks.length}`);
      }
      process.stdout.write("\n");

    } catch (error) {
      console.error(`\n🔴 Error processing ${file}:`, error.message);
      console.error("   Build failed. Please check the file content or your OpenAI API Key quota.");
      process.exit(1);
    }
  }

  console.log(`   Saving ${allChunks.length} processed chunks to ${OUTPUT_FILE}...`);
  // Ensure the 'public' directory exists
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allChunks, null, 2));

  console.log("✅ [RAG Build] Knowledge base build complete!");
}

main(); 