'use client';

import { useTheme } from '@/hooks/use-theme';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleBouncyClassic() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        [data-transition='bouncy-linear']::view-transition-new(root) {
          animation: bouncy-circle 1000ms both;
          animation-timing-function: linear(
            0, 0.223 11.7%, 0.392 18.4%, 0.619 24.8%, 0.999 33.3%, 0.748 40%, 
            0.691 42.7%, 0.672 45.3%, 0.69 47.8%, 0.743 50.4%, 0.999 57.7%, 
            0.883 61.8%, 0.856 63.6%, 0.848 65.3%, 0.855 67%, 0.879 68.8%, 
            0.999 74.5%, 0.953 77.5%, 0.94 80.2%, 0.95 82.7%, 1 88.2%, 
            0.987 91.9%, 1
          );
        }
        @keyframes bouncy-circle {
          from { clip-path: circle(0.1px at var(--x) var(--y)); }
          to { clip-path: circle(150vmax at var(--x) var(--y)); }
        }
      ` }} />
      <button
        onClick={(e) => setTheme(isDark ? 'light' : 'dark', e, 'bouncy-linear')}
        className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-muted/50 border-2 hover:border-primary/50 transition-colors overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 15,
              mass: 0.8
            }}
          >
            {isDark ? (
              <Moon className="h-7 w-7 text-blue-400" />
            ) : (
              <Sun className="h-7 w-7 text-orange-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
}
