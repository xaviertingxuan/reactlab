import React, {useEffect, useState} from 'react'

export const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
        <button 
                onClick={toggleTheme}
                className="theme-toggle"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>
    </div>
  )
}
