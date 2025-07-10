/**
 * @file This file contains the RUNTIME logic for loading the pre-processed
 * knowledge base. It's designed to be extremely fast and efficient for a
 * serverless environment like Vercel.
 */
import fs from 'fs';
import path from 'path';

// --- 1. DEFINE DATA STRUCTURES ---
interface DocumentChunk {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    filename: string;
  };
}

// --- 2. SETUP IN-MEMORY KNOWLEDGE BASE (SINGLETON) ---
class KnowledgeBase {
  private static instance: KnowledgeBase;
  private store: DocumentChunk[] = [];
  private isInitialized: boolean = false;

  private constructor() {}

  public static getInstance(): KnowledgeBase {
    if (!(globalThis as any).__knowledgeBaseInstance) {
      (globalThis as any).__knowledgeBaseInstance = new KnowledgeBase();
    }
    return (globalThis as any).__knowledgeBaseInstance;
  }
  
  // --- Main Initialization Logic ---
  public async initialize() {
    if (this.isInitialized) {
      return;
    }
    this.isInitialized = true; // Prevent re-initialization

    const filePath = path.join(process.cwd(), 'public', 'knowledge-base.json');
    
    try {
      console.log("[KB Loader] Loading pre-built knowledge base...");
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      this.store = JSON.parse(fileContent);
      console.log(`✅ [KB Loader] Successfully loaded ${this.store.length} chunks.`);
    } catch (error) {
      console.error("🔴 [KB Loader] Fatal Error: Could not load 'public/knowledge-base.json'.");
      console.error("   Did the build process fail? The chatbot will not have knowledge.");
      // Keep the store empty, the API will handle this gracefully.
      this.store = [];
    }
  }

  getStore = () => this.store;
  getStats = () => ({
    totalChunks: this.store.length,
    isInitialized: this.isInitialized,
    files: [...new Set(this.store.map(doc => doc.metadata.filename))],
    sourceFile: 'public/knowledge-base.json'
  });
}

// --- 3. EXPORTED FUNCTIONS FOR API ROUTES ---

const kbInstance = KnowledgeBase.getInstance();

export const initializeKnowledgeBase = async () => {
  await kbInstance.initialize();
};

export const getKnowledgeBase = () => kbInstance.getStore();
export const getKnowledgeBaseStats = () => kbInstance.getStats(); 