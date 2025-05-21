import React from 'react';
import AvatarAI from '../icons/AvatarAI';

const LoadingMessage = () => {
  return (
    <div className="flex justify-start mb-4 animate-[fadeInUp_0.3s_ease-out]">
      <div className="flex flex-col items-start w-full">
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
            <div className="
              w-6 
              h-6 
              rounded-full 
              flex 
              items-center 
              justify-center 
              text-white 
              shadow-sm 
              bg-[var(--custom-primary)]
            ">
              <AvatarAI className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_0ms]"/>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_200ms]"/>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_400ms]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage; 