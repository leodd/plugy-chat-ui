import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ArrowDown from '../icons/ArrowDown';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const checkScrollPosition = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 500;
      const lastMessageIsAI = messages.length > 0 && !messages[messages.length - 1].isUser;
      setShowScrollButton(!isAtBottom && lastMessageIsAI);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'This is a simulated response. Replace this with actual API integration.',
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col relative bg-white dark:bg-neutral-900">
      <div 
        ref={messagesContainerRef} 
        className="flex-1 overflow-auto p-4 pb-24
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-neutral-200
          [&::-webkit-scrollbar-thumb]:dark:bg-neutral-700
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:hover:bg-neutral-300
          [&::-webkit-scrollbar-thumb]:dark:hover:bg-neutral-600
          [-ms-overflow-style:none]
          [scrollbar-width:thin]
          [scrollbar-color:rgb(229,231,235)_transparent]
          dark:[scrollbar-color:rgb(64,64,64)_transparent]
        "
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900">
        <div 
          className={`absolute left-1/2 -translate-x-1/2 -top-7 transition-all duration-300 ${showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
        >
          <button
            onClick={scrollToBottom}
            className={`
              p-1.5
              rounded-full
              bg-gray-50
              dark:bg-neutral-800
              shadow-lg
              dark:shadow-lg
              border
              border-neutral-200
              dark:border-neutral-700
              text-neutral-500
              dark:text-neutral-300
              hover:bg-neutral-50
              dark:hover:bg-neutral-700
              transition-all
              duration-200
              hover:scale-110
              active:scale-95
            `}
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default ChatPage; 