import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from './button';

type CopyButtonProps = {
  text: string;
  className?: string;
};

export const CopyButton = ({ text, className = '' }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      onClick={handleCopy}
      size='sm'
      variant='outline'
      className={`bg-background/80 backdrop-blur-sm ${className}`}
    >
      {copied ? (
        <>
          <Check className='h-3 w-3' />
          Copied
        </>
      ) : (
        <Copy className='h-3 w-3' />
      )}
    </Button>
  );
};
