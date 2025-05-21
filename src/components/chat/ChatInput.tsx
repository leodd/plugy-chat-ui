import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import type { KeyboardEvent } from 'react';
import AirplaneFilled from '../icons/AirplaneFilled';
import AirplaneOutlined from '../icons/AirplaneOutlined';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export interface ChatInputRef {
  focus: () => void;
}

const ChatInput = forwardRef<ChatInputRef, ChatInputProps>(({ onSendMessage, disabled = false }, ref) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('focusing');
      textareaRef.current?.focus();
    }
  }));

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 200);
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

  const getInputStyles = () => {
    return `
      block w-full
      px-4 py-2 pr-12
      min-h-[46px]
      border-2
      rounded-[23px]
      bg-gray-50/60 dark:bg-neutral-800/60
      text-neutral-600 dark:text-neutral-200
      placeholder:font-medium
      placeholder-neutral-300 dark:placeholder-neutral-700
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
      border-[var(--custom-primary-neutral)]
      focus:border-[var(--custom-primary-dark)]
      shadow-[0_0_20px_var(--custom-primary-neutral)]
      focus:shadow-[0_0_20px_var(--custom-primary-neutral)]
      dark:border-[var(--custom-primary-neutral)]
      dark:focus:border-[var(--custom-primary-dark)]
      dark:shadow-[0_0_20px_var(--custom-primary-neutral)]
      dark:focus:shadow-[0_0_20px_var(--custom-primary-neutral)]
      caret-[var(--custom-primary)]
      dark:caret-[var(--custom-primary)]
    `;
  };

  const getButtonStyles = () => {
    const isDisabled = disabled || !message.trim();

    return isDisabled
      ? `
          bg-[var(--custom-primary-light)]
          dark:bg-[var(--custom-primary-dark)]
          text-[var(--custom-primary-dark)]
          dark:text-[var(--custom-primary)]
          cursor-not-allowed
        `
      : `
          bg-[var(--custom-primary)]
          text-white/80
          hover:bg-[var(--custom-primary-dark)]
          dark:hover:bg-[var(--custom-primary)]
        `;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex-1">
        <textarea
          ref={textareaRef}
          className={getInputStyles()}
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
          className={`
            absolute 
            right-[7px] 
            bottom-[7px] 
            p-2 
            rounded-full 
            transition-all 
            duration-200 
            ${getButtonStyles()}
          `}
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
});

export default ChatInput; 