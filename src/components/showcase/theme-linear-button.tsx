'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleBouncyLinearButton() {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = isDark ? 'light' : 'dark';

    setTheme(nextTheme, e, {
      keyframes: [
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0)' },
      ],
      options: {
        duration: 1000,
        easing:
          'linear(0, 0.223 11.7%, 0.392 18.4%, 0.619 24.8%, 0.999 33.3%, 0.748 40%, 0.691 42.7%, 0.672 45.3%, 0.69 47.8%, 0.743 50.4%, 0.999 57.7%, 0.883 61.8%, 0.856 63.6%, 0.848 65.3%, 0.855 67%, 0.879 68.8%, 0.999 74.5%, 0.953 77.5%, 0.94 80.2%, 0.95 82.7%, 1 88.2%, 0.987 91.9%, 1)',
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
