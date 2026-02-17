'use client';

import { useTheme } from '@/hooks/use-theme';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleBouncyLinearSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        [data-transition='bouncy-linear']::view-transition-new(root) {
          animation: bouncy-linear 1000ms both;
          animation-timing-function: linear(
            0, 0.223 11.7%, 0.392 18.4%, 0.619 24.8%, 0.999 33.3%, 0.748 40%, 
            0.691 42.7%, 0.672 45.3%, 0.69 47.8%, 0.743 50.4%, 0.999 57.7%, 
            0.883 61.8%, 0.856 63.6%, 0.848 65.3%, 0.855 67%, 0.879 68.8%, 
            0.999 74.5%, 0.953 77.5%, 0.94 80.2%, 0.95 82.7%, 1 88.2%, 
            0.987 91.9%, 1
          );
        }
        @keyframes bouncy-linear {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      ` }} />
      <button
        onClick={(e) => setTheme(isDark ? 'light' : 'dark', e, 'bouncy-linear')}
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
