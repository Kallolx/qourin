import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FloatingDarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5">
        <Moon 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            darkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          } text-gray-700 group-hover:text-gray-900`} 
          strokeWidth={1.5} 
        />
        <Sun 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ${
            darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          } text-gray-200 group-hover:text-white`} 
          strokeWidth={1.5} 
        />
      </div>
    </button>
  );
};

export default FloatingDarkMode; 