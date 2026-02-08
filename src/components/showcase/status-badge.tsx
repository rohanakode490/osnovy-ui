import { cn } from '@/lib/utils';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'online' | 'offline' | 'busy';
}

export function StatusBadge({
  className,
  status = 'online',
  ...props
}: StatusBadgeProps) {
  const colors = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-500',
    busy: 'bg-amber-500',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm',
        className
      )}
      {...props}
    >
      <span className='relative flex h-2.5 w-2.5'>
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            colors[status]
          )}
        />
        <span
          className={cn(
            'relative inline-flex h-2.5 w-2.5 rounded-full',
            colors[status]
          )}
        />
      </span>
      <span className='capitalize text-muted-foreground'>{status}</span>
    </div>
  );
}
