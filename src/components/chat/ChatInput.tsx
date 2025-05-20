import React, { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import AirplaneFilled from '../icons/AirplaneFilled';
import AirplaneOutlined from '../icons/AirplaneOutlined';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 200); // max height of 200px
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '40px';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200/50 shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            className="block w-full px-4 py-2 pr-12 border-2 border-blue-500/10 rounded-lg focus:outline-none focus:border-blue-500/50 disabled:cursor-not-allowed bg-gray-100/50 text-gray-900 placeholder-gray-500/70 resize-none min-h-[46px] overflow-y-auto transition-[height,border] duration-200"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={1}
          />
          <button
            type="submit"
            disabled={disabled || !message.trim()}
            className={`absolute right-2 bottom-1.5 p-1 rounded-full transition-all duration-200 ${disabled || !message.trim()
                ? 'text-blue-500/30 cursor-not-allowed'
                : 'text-blue-500 hover:bg-blue-50'
              }`}
          >
            {disabled || !message.trim() ? (
              <AirplaneOutlined className="w-6 h-6" />
            ) : (
              <AirplaneFilled className="w-6 h-6" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput; 