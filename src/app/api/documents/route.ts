import { NextResponse } from 'next/server';
import { initializeKnowledgeBase, getKnowledgeBaseStats } from '@/app/lib/loadDocuments';

/**
 * This endpoint provides statistics about the knowledge base.
 * It triggers the initialization if it hasn't run yet.
 */
export async function GET() {
  try {
    await initializeKnowledgeBase();
    const stats = getKnowledgeBaseStats();
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error in GET /api/documents:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve knowledge base statistics' },
      { status: 500 }
    );
  }
} 