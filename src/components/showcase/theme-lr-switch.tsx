'use client';

import { useTheme } from '@/hooks/use-theme';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleLRSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

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
      <button
        onClick={(e) => setTheme(isDark ? 'light' : 'dark', e, 'left-to-right')}
        className="relative flex h-10 w-20 cursor-pointer items-center rounded-full bg-muted p-1 border shadow-inner overflow-hidden"
      >
        <motion.div
          animate={{ x: isDark ? 40 : 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 20,
            mass: 0.5 
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md border"
        >
          {isDark ? (
            <motion.div
              initial={{ rotate: -90, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Moon className="h-5 w-5 text-blue-400 fill-blue-400/10" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Sun className="h-5 w-5 text-orange-500 fill-orange-500/10" />
            </motion.div>
          )}
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <Sun className={isDark ? "h-3 w-3 text-muted-foreground opacity-30" : "invisible"} />
          <Moon className={isDark ? "invisible" : "h-3 w-3 text-muted-foreground opacity-30"} />
        </div>
      </button>
    </div>
  );
}
