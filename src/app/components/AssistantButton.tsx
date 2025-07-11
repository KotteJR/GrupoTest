'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatAssistant } from './ChatAssistant';

export default function AssistantButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ChatAssistant onClose={() => setIsOpen(false)} />}

      {!isOpen && (
        <button
            onClick={() => setIsOpen(true)}
            className="font-sans fixed bottom-5 right-5 z-40 flex items-center justify-center w-16 h-16 bg-[#0F4761] text-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 border-1 border-white/20"
            aria-label="Open Assistant"
        >
            <MessageSquare className="w-8 h-8" strokeWidth={1} />
        </button>
      )}
    </>
  );
} 