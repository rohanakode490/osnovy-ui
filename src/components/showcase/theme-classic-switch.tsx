'use client';

import { useTheme } from '@/hooks/use-theme';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleSwitch() {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = isDark ? 'light' : 'dark';

    setTheme(nextTheme, e, {
      keyframes: [
        { clipPath: `circle(0px at ${e.clientX}px ${e.clientY}px)` },
        { clipPath: `circle(150vmax at ${e.clientX}px ${e.clientY}px)` },
      ],
      options: {
        duration: 1000,
        easing:
          'linear(0, 0.223 11.7%, 0.392 18.4%, 0.619 24.8%, 0.999 33.3%, 0.748 40%, 0.691 42.7%, 0.672 45.3%, 0.69 47.8%, 0.743 50.4%, 0.999 57.7%, 0.883 61.8%, 0.856 63.6%, 0.848 65.3%, 0.855 67%, 0.879 68.8%, 0.999 74.5%, 0.953 77.5%, 0.94 80.2%, 0.95 82.7%, 1 88.2%, 0.987 91.9%, 1)',
      },
    });
  };

  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <button
        onClick={toggleTheme}
        className='relative flex h-10 w-20 cursor-pointer items-center rounded-full bg-muted p-1 border shadow-inner overflow-hidden'
      >
        <motion.div
          animate={{ x: isDark ? 40 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
            mass: 0.5,
          }}
          className='flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md border'
        >
          {isDark ? (
            <motion.div
              initial={{ rotate: -90, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Moon className='h-5 w-5 text-blue-400 fill-blue-400/10' />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Sun className='h-5 w-5 text-orange-500 fill-orange-500/10' />
            </motion.div>
          )}
        </motion.div>
        <div className='absolute inset-0 flex items-center justify-between px-3 pointer-events-none'>
          <Sun
            className={
              isDark ? 'h-3 w-3 text-muted-foreground opacity-30' : 'invisible'
            }
          />
          <Moon
            className={
              isDark ? 'invisible' : 'h-3 w-3 text-muted-foreground opacity-30'
            }
          />
        </div>
      </button>
    </div>
  );
}
