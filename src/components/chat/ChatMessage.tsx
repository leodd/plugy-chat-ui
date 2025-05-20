import React from 'react';
import AvatarAI from '../icons/AvatarAI';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  name?: string;
}

const ChatMessage = ({ message, isUser, name = 'AI' }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-[fadeInUp_0.3s_ease-out]`}>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} ${isUser ? 'max-w-[80%]' : 'w-full'}`}>
        {!isUser && (
          <div className="flex items-center gap-2 mb-2.5 animate-[fadeInUp_0.3s_ease-out]">
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100/80 pl-1.5 pr-3 py-1.5 rounded-full border border-gray-200/50 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
                <AvatarAI className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </div>
          </div>
        )}
        <div
          className={`p-3 rounded-2xl break-words whitespace-pre-wrap ${
            isUser
              ? 'bg-blue-500 text-white shadow-[0_2px_4px_rgba(59,130,246,0.2)]'
              : 'bg-gray-100 text-gray-900 border border-gray-200'
          }`}
        >
          {message.trim()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 