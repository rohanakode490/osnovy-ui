'use client';

import { useTheme } from '@/hooks/use-theme';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggleLRSwitch() {
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
