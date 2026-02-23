'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleLRButton() {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = isDark ? 'light' : 'dark';

    setTheme(nextTheme, e, {
      keyframes: [
        {
          clipPath:
            nextTheme === 'dark' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
        },
        { clipPath: 'inset(0 0 0 0)' },
      ],
      options: {
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    });
  };

  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className='cursor-pointer'
      >
        <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </div>
  );
}
