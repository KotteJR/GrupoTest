'use client';

import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import ChatAssistant from './ChatAssistant';

export default function AssistantButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="font-sans">
        <ChatAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className={`font-sans fixed bottom-5 right-5 z-40 flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-900 text-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 ${
          isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
        aria-label="Open Assistant"
        style={{ transition: 'opacity 0.2s, transform 0.2s' }}
      >
        <Bot className="w-8 h-8" />
        {/* Simple pulse */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-ping"></div>
      </button>
    </>
  );
} 