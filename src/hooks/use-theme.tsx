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
  isDark: boolean;
  setTheme: (
    theme: Theme,
    event?: React.MouseEvent,
    animation?: {
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
      options?: KeyframeAnimationOptions;
    }
  ) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'app-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = () => {
      root.classList.remove('light', 'dark');
      let effectiveTheme = theme;

      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
      }

      root.classList.add(effectiveTheme);
      setIsDark(effectiveTheme === 'dark');
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark,
      setTheme: (
        newTheme: Theme,
        event?: React.MouseEvent,
        animation?: {
          keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
          options?: KeyframeAnimationOptions;
        }
      ) => {
        const updateTheme = () => {
          localStorage.setItem(storageKey, newTheme);
          setTheme(newTheme);
        };

        if (!document.startViewTransition || !event) {
          updateTheme();
          return;
        }

        const transition = document.startViewTransition(() => {
          flushSync(() => {
            updateTheme();
          });
        });

        if (animation) {
          transition.ready.then(() => {
            document.documentElement.animate(animation.keyframes, {
              duration: 500,
              easing: 'ease-in-out',
              ...animation.options,
              pseudoElement: '::view-transition-new(root)',
            });
          });
        }
      },
    }),
    [theme, isDark, storageKey]
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
