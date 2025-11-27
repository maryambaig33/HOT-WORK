import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { generateFitnessAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Burnie, your virtual fitness assistant. Ask me about our infrared workouts or benefits!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateFitnessAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I lost my connection. Try again!", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-hotOrange animate-pulse hover:animate-none'
        }`}
      >
        {isOpen ? <X size={24} color="white" /> : <MessageSquare size={24} color="white" />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-hotGray border border-white/10 rounded-lg shadow-2xl z-50 transform transition-all duration-300 origin-bottom-right flex flex-col ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`} style={{ height: '500px' }}>
        
        {/* Header */}
        <div className="p-4 bg-hotDark border-b border-white/10 rounded-t-lg flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-hotOrange to-yellow-500 flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wide">Burnie AI</h3>
            <p className="text-xs text-green-500 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-hotOrange text-white rounded-br-none' 
                  : 'bg-white/10 text-gray-200 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-lg rounded-bl-none flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-hotDark rounded-b-lg">
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about workouts..."
              className="flex-1 bg-hotGray text-white text-sm p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-hotOrange border border-white/5"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-hotOrange rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default AiAssistant;
