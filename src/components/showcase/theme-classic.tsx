'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleClassic() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        [data-transition='circle']::view-transition-new(root) {
          animation: reveal 700ms cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes reveal {
          from { clip-path: circle(0.1px at var(--x) var(--y)); }
          to { clip-path: circle(150vmax at var(--x) var(--y)); }
        }
      ` }} />
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark', e)}
        className="h-12 w-12 rounded-full cursor-pointer border-2"
      >
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
