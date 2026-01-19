import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/hooks/use-theme";

interface FrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children: React.ReactNode;
}

export function Frame({ children, ...props }: FrameProps) {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const { theme } = useTheme();

  useEffect(() => {
    if (!contentRef?.contentWindow?.document) return;

    const doc = contentRef.contentWindow.document;
    
    // Copy stylesheets and style tags
    const updateStyles = () => {
      const sourceStyles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
      const targetHead = doc.head;
      
      // Clear existing to avoid duplicates on re-renders if simplistic
      // But for better performance, we should diff. For now, simple append of missing.
      sourceStyles.forEach((style) => {
        if (style.tagName === 'LINK') {
            const link = style as HTMLLinkElement;
            if (!doc.querySelector(`link[href="${link.href}"]`)) {
                const newLink = doc.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = link.href;
                targetHead.appendChild(newLink);
            }
        } else if (style.tagName === 'STYLE') {
            const s = style as HTMLStyleElement;
            // Identifying inline styles is harder, but we can clone them
             const newStyle = doc.createElement('style');
             newStyle.textContent = s.textContent;
             targetHead.appendChild(newStyle);
        }
      });
    };

    updateStyles();

    // Sync Theme class
    const root = doc.documentElement;
    root.classList.remove("light", "dark");
    if (theme === 'system') {
         const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
         root.classList.add(systemTheme);
    } else {
        root.classList.add(theme);
    }
    
    // Optional: Observer for new styles? For now, run once on mount.

  }, [contentRef, theme]);

  return (
    <iframe
      {...props}
      ref={setContentRef}
      className={props.className}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
