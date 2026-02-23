'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleClassic() {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = isDark ? 'light' : 'dark';

    setTheme(nextTheme, e, {
      keyframes: [
        { clipPath: `circle(0px at ${e.clientX}px ${e.clientY}px)` },
        { clipPath: `circle(150vmax at ${e.clientX}px ${e.clientY}px)` },
      ],
      options: {
        duration: 700,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    });
  };

  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <Button
        variant='outline'
        size='icon'
        onClick={toggleTheme}
        className='h-12 w-12 rounded-full cursor-pointer border-2'
      >
        <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500' />
        <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </div>
  );
}
