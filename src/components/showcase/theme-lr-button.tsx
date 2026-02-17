'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleLRButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        [data-transition='left-to-right'][data-direction='left']::view-transition-new(root) {
          animation: slide-left 800ms cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        [data-transition='left-to-right'][data-direction='right']::view-transition-new(root) {
          animation: slide-right 800ms cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes slide-left {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes slide-right {
          from { clip-path: inset(0 0 0 100%); }
          to { clip-path: inset(0 0 0 0); }
        }
      ` }} />
          <Button
      variant='ghost'
      size='icon'
      onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark', e)}
      className='cursor-pointer'
    >
      <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
    </div>
  );
}
