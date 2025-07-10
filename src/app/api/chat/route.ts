import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { initializeKnowledgeBase, getKnowledgeBase } from '@/app/lib/loadDocuments';

// Helper to format the chat history for the prompt
const formatHistory = (history: { role: 'user' | 'assistant', content: string }[]) => {
  if (!history || history.length === 0) return "No conversation history.";
  return history.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
};

// Note: OpenAI client is initialized on-demand now in lib/loadDocuments.ts
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple cosine similarity function
function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, a_i, i) => sum + a_i * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, a_i) => sum + a_i * a_i, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, b_i) => sum + b_i * b_i, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

async function getEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

// Mock retrieval when OpenAI is not available
/*
function mockRetrieveRelevantDocs(query: string) {
  const lowerQuery = query.toLowerCase();
  const mockResponses = [
    {
      id: 'mock-1',
      content: 'IB360 es una empresa especializada en soluciones tecnológicas para hoteles, hospitales y empresas en Mallorca.',
      similarity: 0.9,
      filename: 'company-info'
    },
    {
      id: 'mock-2', 
      content: 'Servicios: WiFi profesional, IPTV, telefonía IP, videovigilancia, señalética digital, domótica.',
      similarity: 0.8,
      filename: 'services'
    }
  ];

  // Simple keyword matching for mock responses
  if (lowerQuery.includes('wifi') || lowerQuery.includes('red')) {
    return [{
      id: 'wifi-mock',
      content: 'IB360 ofrece soluciones WiFi profesionales con cobertura completa, puntos de acceso gestionables y redes de alta densidad para hoteles.',
      similarity: 0.95,
      filename: 'wifi-services'
    }];
  }
  
  if (lowerQuery.includes('iptv') || lowerQuery.includes('tv')) {
    return [{
      id: 'iptv-mock',
      content: 'Sistemas IPTV con cabeceras digitales, canales internacionales, integración con PMS y TV interactiva para hoteles.',
      similarity: 0.95,
      filename: 'iptv-services'
    }];
  }

  if (lowerQuery.includes('precio') || lowerQuery.includes('coste') || lowerQuery.includes('presupuesto')) {
    return [{
      id: 'pricing-mock',
      content: 'Para solicitar presupuestos personalizados, contacta con nuestro equipo comercial. Cada proyecto se evalúa según las necesidades específicas.',
      similarity: 0.9,
      filename: 'pricing-info'
    }];
  }

  return mockResponses;
}
*/

// This is the new, smarter fallback system.
// It will be used when the OpenAI API for embeddings is unavailable.
function getSmarterMockResponse(query: string) {
  const lowerQuery = query.toLowerCase();

  const serviceKeywords = ['servicios', 'ofrecen', 'hacen', 'soluciones', 'productos'];
  const wifiKeywords = ['wifi', 'red', 'internet', 'cobertura'];
  const iptvKeywords = ['iptv', 'television', 'tv', 'canales'];
  const contactKeywords = ['contacto', 'llamar', 'email', 'teléfono', 'dirección'];
  const priceKeywords = ['precio', 'coste', 'presupuesto', 'cotización'];

  // 1. General Services Question
  if (serviceKeywords.some(k => lowerQuery.includes(k))) {
    return {
      response: `IB360 es una empresa tecnológica líder en Baleares especializada en soluciones integrales para hoteles, hospitales y empresas. Nuestros servicios principales incluyen:
      
• **Redes WiFi Profesionales:** Cobertura total, alta densidad y gestión centralizada.
• **Sistemas IPTV y Hotel TV:** Televisión interactiva, canales internacionales y contenido a la carta.
• **Telefonía IP:** Centralitas virtuales y terminales de última generación.
• **Videovigilancia (CCTV):** Sistemas de seguridad avanzados con acceso remoto.
• **Domótica y Control de Accesos:** Automatización de edificios para eficiencia y seguridad.
• **Señalética Digital:** Pantallas informativas y de marketing dinámico.

¿Sobre qué servicio te gustaría obtener más detalles?`,
      sources: [{ filename: 'General Services Overview', relevance: 0.99 }]
    };
  }
  
  // 2. WiFi Question
  if (wifiKeywords.some(k => lowerQuery.includes(k))) {
    return {
      response: 'Ofrecemos soluciones WiFi profesionales para garantizar una conectividad perfecta. Esto incluye análisis de cobertura, instalación de puntos de acceso de alta densidad, portales cautivos personalizables para el login de usuarios y gestión remota de toda la red.',
      sources: [{ filename: 'WiFi Services', relevance: 0.98 }]
    }
  }

  // 3. IPTV Question
  if (iptvKeywords.some(k => lowerQuery.includes(k))) {
    return {
      response: 'Nuestros sistemas de IPTV para hoteles permiten ofrecer una experiencia televisiva moderna, con canales en HD, contenido internacional, integración con el sistema de gestión del hotel (PMS) y la posibilidad de mostrar información y promociones directamente en la TV de la habitación.',
      sources: [{ filename: 'IPTV & Hotel TV', relevance: 0.98 }]
    }
  }

  // 4. Contact Question
  if (contactKeywords.some(k => lowerQuery.includes(k))) {
    return {
      response: 'Puedes contactarnos a través de nuestro teléfono 971 00 00 00, por email en info@ib360.es, o visitando nuestras oficinas en Palma. Estaremos encantados de atenderte.',
      sources: [{ filename: 'Contact Information', relevance: 0.99 }]
    }
  }

  // 5. Pricing Question
  if (priceKeywords.some(k => lowerQuery.includes(k))) {
    return {
      response: 'Cada proyecto es diferente y requiere un estudio personalizado para ofrecerte el mejor precio. Por favor, contacta con nuestro equipo comercial para que podamos prepararte un presupuesto sin compromiso adaptado a tus necesidades exactas.',
      sources: [{ filename: 'Pricing Policy', relevance: 0.95 }]
    }
  }

  // Default fallback if no keywords match
  return {
    response: '¡Hola! Soy el asistente de IB360. Puedo darte información sobre nuestras soluciones de WiFi, IPTV, Telefonía y Seguridad para hoteles y empresas. ¿En qué estás interesado?',
    sources: []
  };
}

async function retrieveRelevantDocs(query: string, topK: number = 5) {
  // One-time initialization of the knowledge base
  await initializeKnowledgeBase(); 
  const documentStore = getKnowledgeBase();
  
  // If the store is empty, immediately use the mock response.
  if (!documentStore || documentStore.length === 0) {
    console.log('[RAG] No documents loaded, using smart fallback.');
    return []; // Return empty to signal fallback
  }

  try {
    const queryEmbedding = await getEmbedding(query);
    const similarities = documentStore.map(doc => ({
      ...doc,
      similarity: cosineSimilarity(queryEmbedding, doc.embedding)
    }));
    return similarities.sort((a, b) => b.similarity - a.similarity).slice(0, topK);
  } catch (error) {
    console.error('[RAG] OpenAI embedding failed. The API key may have quota issues. Using smart fallback logic.', error);
    return []; // Return empty to signal fallback
  }
}

export async function POST(req: NextRequest) {
  try {
    const { query, history = [] } = await req.json();
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const relevantDocs = await retrieveRelevantDocs(query);

    // If embedding retrieval failed, relevantDocs will be empty.
    // In this case, we use the smart mock response system.
    if (relevantDocs.length === 0) {
      console.log('[API] Using smart fallback response for query:', query);
      const mock = getSmarterMockResponse(query);
      return NextResponse.json({
        response: mock.response,
        sources: mock.sources,
        isMock: true
      });
    }

    // This part will only run if embeddings are working correctly.
    const context = relevantDocs.map(doc => `- ${doc.content}`).join('\n');
    const systemPrompt = `You are "Asistente IB360", a helpful AI assistant for a technology company named IB360. Your goal is to provide helpful, accurate, and concise answers based on the user's question and the provided context.
- Base your answers strictly on the "CONTEXT" provided below. Do not make up information.
- If the CONTEXT does not contain the answer, say "Lo siento, no tengo información sobre ese tema. ¿Puedo ayudarte con algo más relacionado con nuestros servicios de WiFi, IPTV, telefonía, domótica o seguridad?"
- If the user asks a general greeting or question not related to the context (e.g., "hello", "who are you?"), introduce yourself briefly and ask how you can help with IB360's services.
- Keep your answers in Spanish.

PREVIOUS CONVERSATION HISTORY:
${formatHistory(history)}

CONTEXT:
${context}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }, { role: "user", content: query }],
      temperature: 0.1,
      stream: false, 
    });

    return NextResponse.json({ 
      response: response.choices[0].message?.content?.trim() ?? 'No response from AI.',
      sources: relevantDocs.map(d => ({ ...d, relevance: d.similarity })),
      isMock: false,
    });

  } catch (error) {
    console.error('Fatal Chat API error:', error);
    const mock = getSmarterMockResponse('help');
    return NextResponse.json({
      response: mock.response,
      sources: mock.sources,
      isMock: true,
    }, { status: 500 });
  }
} 