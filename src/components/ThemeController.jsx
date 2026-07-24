import React, { useState, useEffect } from 'react';
import { Monitor, Sun, Moon, Volume2, VolumeX } from 'lucide-react';

export default function ThemeController({ compact = false }) {
  const [themeMode, setThemeMode] = useState('system'); // 'system' | 'light' | 'dark'
  const [isMuted, setIsMuted] = useState(true);

  // Apply theme to document element
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
    <div className="inline-flex items-center gap-2 font-mono">
      {/* Capsule Pill for System (Monitor), Light (Sun), Dark (Moon) */}
      <div className="inline-flex items-center p-1 rounded-full bg-base-200/80 border border-base-300/60 backdrop-blur-md shadow-xs">
        {/* System Theme Icon */}
        <button
          onClick={() => changeTheme('system')}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            themeMode === 'system'
              ? 'bg-neutral text-neutral-content shadow-xs scale-105'
              : 'text-base-content/60 hover:text-base-content'
          }`}
          title="System Preference"
          aria-label="System Preference"
        >
          <Monitor size={14} />
        </button>

        {/* Light Theme Icon */}
        <button
          onClick={() => changeTheme('light')}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            themeMode === 'light'
              ? 'bg-neutral text-neutral-content shadow-xs scale-105'
              : 'text-base-content/60 hover:text-base-content'
          }`}
          title="Light Mode"
          aria-label="Light Mode"
        >
          <Sun size={14} />
        </button>

        {/* Dark Theme Icon */}
        <button
          onClick={() => changeTheme('dark')}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            themeMode === 'dark'
              ? 'bg-neutral text-neutral-content shadow-xs scale-105'
              : 'text-base-content/60 hover:text-base-content'
          }`}
          title="Dark Mode"
          aria-label="Dark Mode"
        >
          <Moon size={14} />
        </button>
      </div>

      {/* Circular Sound Mute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="w-9 h-9 rounded-full bg-base-200/80 border border-base-300/60 backdrop-blur-md flex items-center justify-center text-base-content/60 hover:text-base-content transition-all shadow-xs active:scale-95"
        title={isMuted ? "Unmute Audio" : "Mute Audio"}
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
    </div>
  );
}
