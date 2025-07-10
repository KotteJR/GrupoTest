'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, FileText, Minimize2, X } from 'lucide-react';

// Simplified message interface
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isMock?: boolean;
  sources?: Array<{
    id: string;
    filename: string;
    content: string;
    // 'relevance' is clearer than 'similarity'
    relevance: number; 
  }>;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeMessage: Message = {
  id: 'welcome-msg',
  role: 'assistant',
  content: '¡Hola! Soy el Asistente Inteligente de IB360. ¿Cómo puedo ayudarte hoy con nuestras soluciones de tecnología?',
};

export default function ChatAssistant({ isOpen, onClose }: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([WelcomeMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // State to track which message's sources are being viewed
  const [showSourcesFor, setShowSourcesFor] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    const conversationHistory = messages.slice(-4);
    const query = input;
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, history: conversationHistory }),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.response,
        isMock: data.isMock,
        sources: data.sources?.map((s: { id: string, filename: string, content: string, similarity: number }) => ({
          id: s.id,
          filename: s.filename || 'Unknown Source',
          content: s.content,
          relevance: s.similarity // Renaming for clarity
        })),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat API Error:", error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Lo siento, estoy teniendo problemas para conectarme. Por favor, inténtalo de nuevo más tarde.',
        isMock: true,
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-24 right-5 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ease-in-out font-sans ${
        isMinimized ? 'w-80 h-16' : 'w-[400px] h-[640px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-full">
            <Bot className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Asistente IB360</h2>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title={isMinimized ? "Expand" : "Minimize"}>
            <Minimize2 className="w-4 h-4" />
          </button>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50/80">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-600" />}
                </div>
                <div className={`w-full ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-2xl max-w-sm ${msg.role === 'user' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                    <p className="text-sm text-left whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  
                  {/* Debug Info: Mock status and sources */}
                  {msg.role === 'assistant' && (
                    <div className="mt-2 text-left flex items-center flex-wrap gap-x-3 gap-y-1">
                      {msg.isMock && <div className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">Demo Mode</div>}
                      
                      {msg.sources && msg.sources.length > 0 && (
                        <button onClick={() => setShowSourcesFor(showSourcesFor === msg.id ? null : msg.id)} className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900">
                          <FileText className="w-3 h-3" />
                          <span>{msg.sources.length} Sources</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 flex-row">
                <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-gray-200"><Bot className="w-4 h-4 text-gray-600" /></div>
                <div className="w-full text-left">
                  <div className="inline-block p-3 rounded-2xl bg-white text-gray-800 border border-gray-200">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sources Panel */}
          {messages.find(m => m.id === showSourcesFor)?.sources && (
            <div className="p-3 border-t bg-white">
              <h4 className="text-sm font-semibold mb-2">Sources for last response:</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {messages.find(m => m.id === showSourcesFor)!.sources!.map(source => (
                  <div key={source.id} className="p-2 bg-gray-50 rounded-lg border text-xs">
                    <div className="flex justify-between items-center font-semibold text-gray-700">
                      <span>{source.filename}</span>
                      <span className="text-blue-600">{(source.relevance * 100).toFixed(0)}% relevant</span>
                    </div>
                    <p className="text-gray-600 mt-1 line-clamp-2">{source.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t bg-white rounded-b-xl">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta..."
                className="w-full p-3 pr-12 text-sm border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 