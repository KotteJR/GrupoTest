import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import fs from 'fs/promises';
import path from 'path';

// Define the structure of a knowledge chunk
interface KnowledgeChunk {
  content: string;
  embedding: number[];
  source: string;
}

// Define the structure of our simplified knowledge base file
interface KnowledgeBase {
  suggestions: string[];
  knowledge: KnowledgeChunk[];
}

// Define the structure of a history item
interface HistoryItem {
  role: 'user' | 'assistant';
  content: string;
}


// --- Singleton Pattern for Knowledge Base ---
// This ensures we load the file only once per server instance.
let knowledgeBase: KnowledgeBase | null = null;

async function getKnowledgeBase(): Promise<KnowledgeBase> {
  if (knowledgeBase) {
    return knowledgeBase;
  }
  const filePath = path.join(process.cwd(), 'public', 'knowledge-base.json');
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    knowledgeBase = JSON.parse(fileContent) as KnowledgeBase;
    console.log(`🧠 Knowledge base loaded: ${knowledgeBase.knowledge.length} chunks, ${knowledgeBase.suggestions.length} suggestions.`);
    return knowledgeBase;
  } catch (error) {
    console.error("🔴 FATAL: Could not load or parse knowledge-base.json.", error);
    // Return a default empty structure if file is missing or corrupt
    return { suggestions: [], knowledge: [] };
  }
}
// --- End Singleton ---


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// --- Core RAG Logic ---

function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}

async function getEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text.substring(0, 8191), // API safety truncate
  });
  return response.data[0].embedding;
}

async function searchKnowledge(query: string, topK: number = 4) {
  const kb = await getKnowledgeBase();
  if (!kb.knowledge || kb.knowledge.length === 0) {
    console.log("⚠️ Knowledge base is empty. Cannot perform search.");
    return [];
  }

  const queryEmbedding = await getEmbedding(query);

  const similarities = kb.knowledge.map(chunk => ({
    content: chunk.content,
    source: chunk.source,
    similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  return similarities
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK)
    .filter(chunk => chunk.similarity > 0.5); // Filter out irrelevant results
}


// --- Main API Endpoint ---

export async function POST(req: NextRequest) {
  try {
    // 1. Get User Query and History
    const { query, history = [] }: { query: string; history: HistoryItem[] } = await req.json();
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // 2. Search for relevant context, with robust error handling
    let relevantDocs: { content: string; source: string; }[] = [];
    try {
        relevantDocs = await searchKnowledge(query);
    } catch (searchError) {
        console.error("⚠️ Error during knowledge search, proceeding without context:", searchError);
        // an error occurred, but we proceed with an empty context
    }

    // 3. Construct the prompt for the AI
    const context = relevantDocs.map(doc => `- ${doc.content}`).join('\n');

    const systemPrompt = `You are "Asistente IB360", a helpful, expert AI assistant for a technology company in the hotel and hospital sector called IB360.
Your primary goal is to answer user questions accurately and concisely.

RULES:
- First, check if the user is just saying hello or asking a simple greeting (e.g., "hola", "buenos días", "quién eres?"). If so, respond with a friendly greeting, introduce yourself as the IB360 assistant, and ask how you can help.
- For all other questions, use the "CONTEXT" section.
- If the CONTEXT section is empty or does not contain the information needed to answer, you MUST rely on your general knowledge to provide a helpful answer about technology solutions for hotels, businesses, and hospitals. When you do this, mention that you couldn't find specific details in your documentation but you are providing a general response.
- If the CONTEXT contains the answer, provide it directly and confidently.
- If the user asks for your opinion, state that you are a factual AI and cannot provide opinions.
- Keep all responses in Spanish.
- IMPORTANT: After generating your response based on the rules above, ALWAYS add the following sentence on a new line at the very end: "Para más información, [contacta con nuestro equipo](/Contact)."

CONTEXT:
${context || "No context provided."}
`;

    // 4. Construct the full message history for the AI
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: query },
    ];


    // 5. Call OpenAI to get the final response
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.1, // A bit more creative for general questions
      stream: false,
    });

    const aiResponse = response.choices[0].message?.content?.trim() ?? 'No response from AI.';

    // 6. Return the response (no sources)
    return NextResponse.json({
      response: aiResponse,
    });

  } catch (error) {
    console.error('🔴 Chat API Error:', error);
    return NextResponse.json(
        { response: 'Lo siento, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.' },
        { status: 500 }
    );
  }
}

// Endpoint to provide suggestions to the frontend
export async function GET() {
    try {
        const kb = await getKnowledgeBase();
        return NextResponse.json({ suggestions: kb.suggestions });
    } catch (error) {
        console.error('🔴 Suggestions API Error:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve suggestions.' },
            { status: 500 }
        );
    }
} 