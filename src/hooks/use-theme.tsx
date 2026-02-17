/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme, event?: React.MouseEvent, transitionType?: 'circle' | 'star' | 'left-to-right' | 'bouncy-linear') => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'app-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (newTheme: Theme, event?: React.MouseEvent, transitionType: 'circle' | 'star' | 'left-to-right' | 'bouncy-linear' = 'circle') => {
        if (!document.startViewTransition || !event) {
          localStorage.setItem(storageKey, newTheme);
          setTheme(newTheme);
          return;
        }

        const x = event.clientX;
        const y = event.clientY;

        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
        document.documentElement.setAttribute('data-transition', transitionType);
        document.documentElement.setAttribute('data-direction', newTheme === 'dark' ? 'left' : 'right');

        document.startViewTransition(() => {
          flushSync(() => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
          });
        });
      },
    }),
    [theme, storageKey]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
