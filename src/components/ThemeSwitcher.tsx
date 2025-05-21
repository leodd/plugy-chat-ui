import React, { useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, customColor, setCustomColor } = useTheme();
  const colorInputRef = useRef<HTMLInputElement>(null);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleColorClick = () => {
    colorInputRef.current?.click();
  };

  return (
    <div className="fixed top-4 right-4 flex items-center gap-1.5 bg-white dark:bg-neutral-800 rounded-full p-1 shadow-lg border border-neutral-200 dark:border-neutral-700 z-50">
      <div className="relative flex items-center justify-center w-6 h-6">
        <input
          ref={colorInputRef}
          type="color"
          value={customColor}
          onChange={(e) => {
            setCustomColor(e.target.value);
          }}
          className="absolute inset-0 w-6 h-6 opacity-0 cursor-pointer"
          title="Pick a custom color"
        />
        <button
          onClick={handleColorClick}
          className="w-6 h-6 rounded-full bg-[var(--custom-primary)] hover:bg-[var(--custom-primary-dark)] dark:hover:bg-[var(--custom-primary)] hover:scale-110 transition-all shadow-inner flex items-center justify-center"
          title="Pick a custom color"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent" />
        </button>
      </div>
      <div className="w-6 h-6 flex items-center justify-center">
        <button
          onClick={toggleDarkMode}
          className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors hover:scale-110"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}; 