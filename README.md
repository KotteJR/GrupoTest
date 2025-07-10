# IB360 Website with RAG Assistant

This is a [Next.js](https://nextjs.org) project for IB360 that includes a privacy-first RAG (Retrieval-Augmented Generation) assistant powered by OpenAI.

## 🚀 Features

- **Modern Next.js Website** - Beautiful responsive design with Tailwind CSS
- **Privacy-First RAG Assistant** - AI assistant with no conversation storage
- **Smart Document Search** - Vector similarity search through knowledge base
- **Admin Interface** - Easy document upload and management
- **Stateless Design** - Conversations are ephemeral, only knowledge base persists

## 🤖 RAG Assistant Setup

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required: OpenAI API Key for RAG Assistant
OPENAI_API_KEY=your_openai_api_key_here

# Optional: For production vector storage
# PINECONE_API_KEY=your_pinecone_api_key
# PINECONE_ENVIRONMENT=your_pinecone_environment
```

### 2. Get OpenAI API Key

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new secret key
3. Copy the key to your `.env.local` file

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📚 Using the RAG Assistant

### For Users:
1. **Chat Button**: Click the floating chat button in the bottom-right corner
2. **Ask Questions**: Type questions about IB360 services, products, or general information
3. **View Sources**: Click "fuentes consultadas" to see which documents were used for answers
4. **Privacy**: Conversations are not stored - they only exist during your session

### For Administrators:
1. **Admin Panel**: Navigate to `/admin` to manage the knowledge base
2. **Upload Documents**: 
   - Paste text content directly
   - Upload .txt or .md files
   - Documents are automatically chunked for optimal search
3. **Manage Knowledge Base**: View, search, and delete documents
4. **Monitor Usage**: See how many document fragments are in the system

## 🔧 Technical Architecture

### Privacy-First Design:
- ✅ **No conversation storage** - Chat history only exists in browser memory
- ✅ **Stateless API** - Each request is independent
- ✅ **Knowledge base only** - Only document embeddings are stored
- ✅ **GDPR compliant** - No user data persistence

### RAG Pipeline:
1. **Document Processing**: Text → Chunks → Embeddings → Vector Store
2. **Query Processing**: User Question → Embedding → Similarity Search
3. **Response Generation**: Retrieved Context + Question → OpenAI → Answer

### Tech Stack:
- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: OpenAI GPT-4 + text-embedding-3-small
- **Vector Store**: In-memory (development) / Pinecone (production)
- **Hosting**: Vercel

## 🚢 Deployment

### Vercel (Recommended):

1. **Connect Repository**: Import your repo to Vercel
2. **Set Environment Variables**: Add `OPENAI_API_KEY` in Vercel dashboard
3. **Deploy**: Automatic deployment on every push

### Environment Variables for Production:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Optional Production Upgrades:
- **Vector Database**: Integrate Pinecone for persistent, scalable vector storage
- **Authentication**: Add admin auth for document management
- **Monitoring**: Add analytics for assistant usage
- **Rate Limiting**: Implement rate limiting for API endpoints

## 📁 Project Structure

```
src/app/
├── api/
│   ├── chat/route.ts          # Main RAG chat endpoint
│   └── documents/route.ts     # Document management API
├── components/
│   ├── ChatAssistant.tsx      # Chat UI component
│   └── AssistantButton.tsx    # Floating chat button
├── admin/
│   └── page.tsx              # Admin dashboard
└── ...                       # Other pages and components
```

## 🛠 Development

### Adding New Features:
- **Streaming Responses**: Enable real-time streaming in the chat API
- **File Uploads**: Support PDF, DOCX, and other document formats
- **Multi-language**: Add language detection and multilingual responses
- **Custom Models**: Integrate other LLM providers (Anthropic, local models)

### Customization:
- **Styling**: Modify components in `src/app/components/`
- **System Prompt**: Update assistant behavior in `src/app/api/chat/route.ts`
- **Chunking Strategy**: Adjust document processing in `src/app/api/documents/route.ts`

## 📝 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🚨 Important Notes

- **API Costs**: Monitor OpenAI usage as API calls cost money
- **Rate Limits**: OpenAI has rate limits - implement caching for production
- **Security**: Never expose API keys in client-side code
- **Scalability**: For high traffic, consider upgrading to external vector database
