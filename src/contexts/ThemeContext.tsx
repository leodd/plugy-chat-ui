import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  customColor: string;
  setCustomColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Default colors from our theme configuration
const DEFAULT_COLORS = {
  primary: '#0ea5e9', // primary-500 from tailwind config
} as const;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light';
  });

  const [customColor, setCustomColor] = useState<string>(() => {
    return localStorage.getItem('customColor') || DEFAULT_COLORS.primary;
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme);
    
    // Update document class for dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Set CSS variables for custom colors
    document.documentElement.style.setProperty('--custom-primary', customColor);
    document.documentElement.style.setProperty('--custom-primary-neutral', `${customColor}50`);
    document.documentElement.style.setProperty('--custom-primary-light', `${customColor}20`);
    document.documentElement.style.setProperty('--custom-primary-lighter', `${customColor}10`);
    document.documentElement.style.setProperty('--custom-primary-dark', `${customColor}90`);
  }, [theme, customColor]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customColor, setCustomColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 