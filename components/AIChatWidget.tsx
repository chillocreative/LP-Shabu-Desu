import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChefHat } from 'lucide-react';
import { generateChefResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Irasshaimase. I am the AI Concierge for SHABU DESU. How may I assist you with our menu or traditions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    
    // Optimistic update
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userText }]);
    setIsLoading(true);

    const reply = await generateChefResponse(userText);
    
    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: reply }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-stone-900 border border-gold-500/30 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-stone-950 p-4 border-b border-gold-500/20 flex justify-between items-center">
            <div className="flex items-center gap-2 text-gold-400">
              <ChefHat size={20} />
              <span className="font-serif font-semibold">Chef's Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-900/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === ChatRole.USER 
                    ? 'bg-gold-600 text-white rounded-br-none' 
                    : 'bg-stone-800 text-stone-200 border border-stone-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-3 rounded-lg rounded-bl-none border border-stone-700">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-stone-950 border-t border-stone-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our Wagyu..."
              className="flex-1 bg-stone-900 text-white text-sm px-3 py-2 rounded border border-stone-800 focus:border-gold-500 focus:outline-none transition"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-stone-950 p-2 rounded transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-stone-950 px-4 py-3 rounded-full shadow-lg shadow-gold-900/20 transition-all duration-300 hover:scale-105"
      >
        <span className={`font-serif font-semibold ${isOpen ? 'hidden' : 'hidden sm:block'}`}>
          Ask the Chef
        </span>
        <div className="relative">
            <MessageCircle size={24} className={isOpen ? 'scale-0 absolute' : 'scale-100 transition-transform'} />
            <X size={24} className={isOpen ? 'scale-100' : 'scale-0 absolute transition-transform'} />
        </div>
      </button>
    </div>
  );
};

export default AIChatWidget;
