import React from 'react';

interface ThemePreviewWrapperProps {
  children: React.ReactNode;
  caption: string;
}

export const ThemePreviewWrapper = ({
  children,
  caption,
}: ThemePreviewWrapperProps) => (
  <div className='flex flex-col items-center gap-6'>
    <div className='flex items-center justify-center min-h-10'>{children}</div>
    <span className='text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold border-t border-border/50 pt-3 px-4 text-center'>
      {caption}
    </span>
  </div>
);
