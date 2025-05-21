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
      return `
        bg-[var(--custom-primary)]
        text-white
        shadow-[0_1px_4px_var(--custom-primary-dark)]
        dark:shadow-sm
      `;
    }
    return `
      bg-gray-50
      dark:bg-neutral-800
      text-neutral-900
      dark:text-neutral-50
      border
      border-neutral-200
      dark:border-neutral-700
    `;
  };

  return (
    <div className={`
      flex 
      mb-4 
      animate-[fadeInUp_0.3s_ease-out]
      ${isUser ? 'justify-end' : 'justify-start'}
    `}>
      <div className={`
        flex 
        flex-col 
        ${isUser ? 'items-end max-w-[80%]' : 'items-start w-full'}
      `}>
        {!isUser && (
          <div className="
            flex 
            items-center 
            gap-2 
            mb-2.5 
            animate-[fadeInUp_0.3s_ease-out]
          ">
            <div className="
              flex 
              items-center 
              gap-2 
              pl-1.5 
              pr-3 
              py-1.5 
              rounded-full 
              border 
              border-neutral-200 
              dark:border-neutral-700 
              bg-gradient-to-r from-white to-gray-50
              dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-800
              shadow-sm
            ">
              <div className={`
                w-6 
                h-6 
                rounded-full 
                flex 
                items-center 
                justify-center 
                text-white 
                shadow-sm 
                bg-[var(--custom-primary)]
              `}>
                <AvatarAI className="w-4 h-4" />
              </div>
              <span className="
                text-sm 
                font-medium 
                text-neutral-700 
                dark:text-neutral-300
              ">
                {name}
              </span>
            </div>
          </div>
        )}
        <div className={`
          p-3 
          rounded-2xl 
          break-words 
          whitespace-pre-wrap 
          transition-colors 
          duration-200 
          ${getMessageColor()}
        `}>
          {message.trim()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;