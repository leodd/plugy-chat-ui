import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import ChatPage from './components/chat/ChatPage';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
        <ThemeSwitcher />
        <ChatPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
