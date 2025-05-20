interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 gap-2`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm shrink-0">
          AI
        </div>
      )}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`p-3 rounded-2xl max-w-[80%] break-words whitespace-pre-wrap ${
            isUser
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          {message}
        </div>
        {timestamp && (
          <span className="text-xs text-gray-500 mt-1 px-1">
            {timestamp}
          </span>
        )}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm shrink-0">
          U
        </div>
      )}
    </div>
  );
};

export default ChatMessage; 