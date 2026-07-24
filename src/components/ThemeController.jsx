import React, { useState, useEffect } from 'react';
import { Monitor, Sun, Moon, Volume2, VolumeX } from 'lucide-react';

export default function ThemeController({ compact = false }) {
  const [themeMode, setThemeMode] = useState('system'); // 'system' | 'light' | 'dark'
  const [isMuted, setIsMuted] = useState(true);

  // Apply theme to document element synchronously
  const applyTheme = (mode) => {
    let targetTheme = mode;
    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      targetTheme = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') || 'system';
    setThemeMode(savedMode);
    applyTheme(savedMode);

    // Listen to system OS color scheme changes if mode === 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if ((localStorage.getItem('themeMode') || 'system') === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const changeTheme = (newMode) => {
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
    applyTheme(newMode);
  };

  return (
    <div className="inline-flex items-center gap-1.5 font-mono">
      {/* Mini Capsule Pill for System (Monitor), Light (Sun), Dark (Moon) */}
      <div className="inline-flex items-center p-0.5 rounded-full bg-base-200/80 border border-base-300/60 backdrop-blur-md shadow-2xs">
        {/* System Theme Icon */}
        <button
          type="button"
          onClick={() => changeTheme('system')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
            themeMode === 'system'
              ? 'bg-neutral text-neutral-content shadow-2xs scale-105'
              : 'text-base-content/50 hover:text-base-content'
          }`}
          title="System Preference"
          aria-label="System Preference"
        >
          <Monitor size={12} />
        </button>

        {/* Light Theme Icon */}
        <button
          type="button"
          onClick={() => changeTheme('light')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
            themeMode === 'light'
              ? 'bg-neutral text-neutral-content shadow-2xs scale-105'
              : 'text-base-content/50 hover:text-base-content'
          }`}
          title="Light Mode"
          aria-label="Light Mode"
        >
          <Sun size={12} />
        </button>

        {/* Dark Theme Icon */}
        <button
          type="button"
          onClick={() => changeTheme('dark')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
            themeMode === 'dark'
              ? 'bg-neutral text-neutral-content shadow-2xs scale-105'
              : 'text-base-content/50 hover:text-base-content'
          }`}
          title="Dark Mode"
          aria-label="Dark Mode"
        >
          <Moon size={12} />
        </button>
      </div>

      {/* Mini Circular Sound Mute Button */}
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        className="w-7 h-7 rounded-full bg-base-200/80 border border-base-300/60 backdrop-blur-md flex items-center justify-center text-base-content/50 hover:text-base-content transition-all duration-200 shadow-2xs active:scale-95"
        title={isMuted ? "Unmute Audio" : "Mute Audio"}
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
      </button>
    </div>
  );
}
