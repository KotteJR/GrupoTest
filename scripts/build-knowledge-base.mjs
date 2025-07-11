import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { OpenAI } from 'openai';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const KNOWLEDGE_BASE_DIR = path.join(process.cwd(), 'KNOWLEDGE_BASE');
const UNIFIED_JSON_FILE = path.join(KNOWLEDGE_BASE_DIR, 'IB360_Unificado_Final.json');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'knowledge-base.json');

// --- STEP 1: Text Extraction and Chunking ---

function extractTextFromObject(obj) {
  let text = "";
  if (!obj) return text;
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      text += obj[key] + " ";
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach(item => {
        text += extractTextFromObject(item) + " ";
      });
    } else if (typeof obj[key] === "object") {
      text += extractTextFromObject(obj[key]) + " ";
    }
  }
  return text.replace(/\s+/g, ' ').trim();
}

function chunkText(text, chunkSize = 800, overlap = 100) {
    if (!text) return [];
    const chunks = [];
    let i = 0;
    while (i < text.length) {
        chunks.push(text.substring(i, i + chunkSize));
        i += chunkSize - overlap;
    }
    return chunks;
}

// --- STEP 2: Suggestions Extraction ---

function extractSuggestions(data) {
  const suggestions = new Set();
  if (!data) return [];

  const add = (item) => item && suggestions.add(item.trim());

  // From "activadores"
  data.IB360_Modulo_11_FAQ_completo?.activadores?.forEach(add);
  
  // From FAQ questions
  data.IB360_Modulo_11_FAQ_completo?.contenido?.forEach(item => add(item.pregunta));

  // From Chatbot user inputs
  Object.keys(data).forEach(key => {
    if (key.startsWith("IB360_Modulo") && key.includes("Chatbot") && Array.isArray(data[key])) {
      data[key].forEach(item => add(item.user_input));
    }
  });

  // From DOCX-like structures
  Object.keys(data).forEach(key => {
      if (key.startsWith("MODULO") && Array.isArray(data[key])) {
          data[key].forEach(item => {
              if (item.question) {
                  const cleaned = item.question.split('\n')[0].replace(/^\d+\.\s*/, '').trim();
                  add(cleaned);
              }
          });
      }
  });

  return Array.from(suggestions).filter(Boolean); // Remove any empty/null entries
}


// --- STEP 3: Embedding Generation ---

async function getEmbedding(text) {
    if (!text) return null;
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: text.substring(0, 8191), // OpenAI API limit
        });
        return response.data[0].embedding;
    } catch (error) {
        console.error(`Error getting embedding for text chunk: ${text.substring(0, 50)}...`, error.message);
        return null;
    }
}


// --- MAIN EXECUTION ---

async function main() {
  console.log("🔵 Starting simplified knowledge base build...");

  if (!process.env.OPENAI_API_KEY) {
    console.error("🔴 FATAL: OPENAI_API_KEY is not set. Please check your .env.local file.");
    process.exit(1);
  }

  try {
    const jsonContent = await fs.readFile(UNIFIED_JSON_FILE, 'utf-8');
    const data = JSON.parse(jsonContent);

    const allDocuments = [];
    const allSuggestions = extractSuggestions(data);

    console.log(`   Found ${allSuggestions.length} potential suggestions.`);

    for (const key in data) {
        const moduleContent = data[key];
        let textToProcess = '';

        if (Array.isArray(moduleContent)) {
            moduleContent.forEach(item => {
                const q = item.pregunta || item.user_input || item.question || '';
                const a = item.respuesta || item.bot_response || item.answer || '';
                textToProcess += `${q} ${a} `;
            });
        } else if (typeof moduleContent === 'object' && moduleContent !== null) {
            textToProcess = extractTextFromObject(moduleContent);
        }
        
        const cleanedText = textToProcess.replace(/\s+/g, ' ').trim();
        if (cleanedText) {
            allDocuments.push({
                source: key,
                content: cleanedText
            });
        }
    }
    
    console.log(`   Extracted content from ${allDocuments.length} modules.`);
    
    const chunksWithEmbeddings = [];
    for (const doc of allDocuments) {
        const textChunks = chunkText(doc.content);
        for (const chunk of textChunks) {
            const embedding = await getEmbedding(chunk);
            if (embedding) {
                chunksWithEmbeddings.push({
                    content: chunk,
                    embedding: embedding,
                    source: doc.source,
                });
            }
            process.stdout.write(`\r   Processed chunks: ${chunksWithEmbeddings.length}`);
        }
    }
    console.log('\n   All chunks processed.');

    const finalData = {
      suggestions: allSuggestions,
      knowledge: chunksWithEmbeddings,
    };

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(finalData, null, 2));
    console.log(`✅ Success! Knowledge base created at ${OUTPUT_FILE}`);
    console.log(`   Total knowledge chunks: ${chunksWithEmbeddings.length}`);
    console.log(`   Total suggestions: ${allSuggestions.length}`);

  } catch (error) {
    console.error("\n🔴 Build script failed:", error);
    process.exit(1);
  }
}

main(); 