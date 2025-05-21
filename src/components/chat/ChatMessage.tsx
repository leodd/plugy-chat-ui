import React from 'react';
import AvatarAI from '../icons/AvatarAI';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  name?: string;
}

const ChatMessage = ({ message, isUser, name = 'AI' }: ChatMessageProps) => {
  const getMessageColor = () => {
    if (isUser) {
      return 'bg-[var(--custom-primary)] text-white hover:bg-[var(--custom-primary-dark)] dark:hover:bg-[var(--custom-primary)]';
    }
    return 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700';
  };

  const getAvatarColor = () => {
    return 'bg-[var(--custom-primary)] hover:bg-[var(--custom-primary-dark)] dark:hover:bg-[var(--custom-primary)]';
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-[fadeInUp_0.3s_ease-out]`}>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} ${isUser ? 'max-w-[80%]' : 'w-full'}`}>
        {!isUser && (
          <div className="flex items-center gap-2 mb-2.5 animate-[fadeInUp_0.3s_ease-out]">
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 pl-1.5 pr-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
              <div className={`w-6 h-6 rounded-full ${getAvatarColor()} flex items-center justify-center text-white shadow-sm`}>
                <AvatarAI className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{name}</span>
            </div>
          </div>
        )}
        <div
          className={`p-3 rounded-2xl break-words whitespace-pre-wrap shadow-sm transition-colors duration-200 ${getMessageColor()}`}
        >
          {message.trim()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 