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
    <form onSubmit={handleSubmit}>
      <div className="relative flex-1">
        <textarea
          ref={textareaRef}
          className={`
            block w-full
            px-4 py-2 pr-12
            min-h-[46px]
            border-2 border-blue-200
            shadow-[0_0_20px_rgba(59,130,246,0.2)]
            focus:border-2 focus:border-blue-300
            focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]
            rounded-[23px]
            bg-gray-100/60
            text-gray-900
            placeholder-gray-400
            resize-none
            overflow-y-auto
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            transition-[height,border]
            duration-200
            focus:outline-none
            disabled:cursor-not-allowed
            backdrop-blur-sm
          `}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
        />
        <button
          type="submit"
          disabled={disabled || !message.trim()}
          className={`absolute right-[7px] bottom-[7px] p-2 rounded-full transition-all duration-200 ${disabled || !message.trim()
              ? 'bg-blue-100 text-blue-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
        >
          {disabled || !message.trim() ? (
            <AirplaneOutlined className="w-4 h-4" />
          ) : (
            <AirplaneFilled className="w-4 h-4" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput; 