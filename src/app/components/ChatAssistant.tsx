"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { 
    SendHorizonal, Bot, X, FileText, Phone, BrainCircuit, Building2, Hospital 
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatAssistantProps {
    onClose: () => void;
}

const defaultSuggestions = [
    { icon: <FileText size={20} />, text: "Solicitar ficha técnica" },
    { icon: <Phone size={20} />, text: "Hablar con un agente" },
    { icon: <BrainCircuit size={20} />, text: "Más sobre IA y conectividad" },
    { icon: <Building2 size={20} />, text: "Soluciones para hoteles" },
    { icon: <Hospital size={20} />, text: "Soluciones para hospitales" },
];

export function ChatAssistant({ onClose }: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/api/chat');
        if (response.ok) {
          const data = await response.json();
          if (data.suggestions) setAllSuggestions(data.suggestions);
        }
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      }
    };
    fetchSuggestions();
  }, []);

  useEffect(() => {
    if (input.length > 2 && allSuggestions.length > 0) {
      const lowerInput = input.toLowerCase();
      setFilteredSuggestions(allSuggestions.filter(s => s.toLowerCase().includes(lowerInput)).slice(0, 4));
    } else {
      setFilteredSuggestions([]);
    }
  }, [input, allSuggestions]);

  const handleSend = async (queryOverride?: string) => {
    const query = queryOverride || input;
    if (query.trim() === "") return;

    const userMessage: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setFilteredSuggestions([]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, history: messages }),
      });
      const data = await response.json();
      const assistantMessage: Message = { role: "assistant", content: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, an error occurred." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const showDefaultSuggestions = messages.length === 0;
  const showFilteredSuggestions = input.length > 2 && filteredSuggestions.length > 0;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col h-[70vh] font-sans">
      <div className="bg-[#0F4761] text-white p-4 flex justify-between items-center rounded-t-lg">
        <div className="flex items-center gap-2">
            <Image src="/logo/grupoib360white.png" alt="Grupo IB360" width={100} height={24} className="h-6 w-auto" />
            <span className="font-semibold text-lg">Assistant</span>
        </div>
        <button onClick={onClose} className="hover:opacity-80" aria-label="Close chat"><X size={24} /></button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
            {showDefaultSuggestions && (
                <div className="p-2 space-y-2">
                    <p className="text-center text-sm text-gray-500">O selecciona un tema para empezar:</p>
                    {defaultSuggestions.map((s) => (
                        <button key={s.text} onClick={() => handleSuggestionClick(s.text)} className="w-full flex items-center gap-3 text-left bg-white hover:bg-gray-100 border border-gray-200 p-3 rounded-lg transition-all">
                            <span className="text-[#0F4761]">{s.icon}</span>
                            <span className="text-gray-700 font-medium">{s.text}</span>
                        </button>
                    ))}
                </div>
            )}
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 bg-[#0F4761] text-white rounded-full flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>
              )}
              <div className={`max-w-xs md:max-w-md p-3 rounded-lg border ${ msg.role === "user" ? "bg-[#0F4761] text-white border-transparent" : "bg-white border-gray-200 text-gray-700" }`}>
                <div className="text-sm whitespace-pre-wrap prose prose-sm max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-500">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                    </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#0F4761] text-white rounded-full flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>
              <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-white border border-gray-200"><div className="flex items-center gap-2 text-sm text-gray-600"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0F4761]"></div><span>Pensando...</span></div></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showFilteredSuggestions && (
        <div className="border-t border-gray-200 bg-white p-2">
          {filteredSuggestions.map((s, i) => (
            <button key={i} onClick={() => handleSuggestionClick(s)} className="w-full text-left text-sm text-[#0F4761] hover:bg-gray-100 p-2 rounded">{s}</button>
          ))}
        </div>
      )}

      <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
        <div className="flex items-center">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()} placeholder="Escribe tu pregunta..." className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F4761]" disabled={isLoading} />
          <button onClick={() => handleSend()} disabled={isLoading || !input.trim()} className="ml-3 bg-[#0F4761] text-white p-3 rounded-full hover:opacity-90 disabled:bg-[#0F4761]/50 disabled:cursor-not-allowed transition"><SendHorizonal size={20} /></button>
        </div>
      </div>
    </div>
  );
} 