import React from 'react';
import { AnimatedAvatar } from '@/components/showcase/animated-avatar';
import AnimatedAvatarCode from '@/components/showcase/animated-avatar?raw';
import { AnimatedLoader } from '@/components/showcase/animated-loader';
import AnimatedLoaderCode from '@/components/showcase/animated-loader?raw';
import { DotBackground } from '@/components/showcase/dot-background';
import DotBackgroundCode from '@/components/showcase/dot-background?raw';
import { GridBackground } from '@/components/showcase/grid-background';
import GridBackgroundCode from '@/components/showcase/grid-background?raw';
import { NavigationBar } from '@/components/showcase/navigation-bar';
import NavigationBarCode from '@/components/showcase/navigation-bar?raw';
import { ResponsiveNavbar } from '@/components/showcase/responsive-navbar';
import ResponsiveNavbarCode from '@/components/showcase/responsive-navbar?raw';
import { StatusBadge } from '@/components/showcase/status-badge';
import StatusBadgeCode from '@/components/showcase/status-badge?raw';
import { ThemeToggleBouncyLinearButton } from '@/components/showcase/theme-linear-button';
import ThemeToggleBouncyLinearButtonCode from '@/components/showcase/theme-linear-button?raw';
import { ThemeToggleBouncyLinearSwitch } from '@/components/showcase/theme-linear-switch';
import ThemeToggleBouncyLinearSwitchCode from '@/components/showcase/theme-linear-switch?raw';
import { ThemeToggleBouncySwitch } from '@/components/showcase/theme-bouncy-switch';
import ThemeToggleBouncySwitchCode from '@/components/showcase/theme-bouncy-switch?raw';
import { ThemeToggleClassic } from '@/components/showcase/theme-classic';
import ThemeToggleClassicCode from '@/components/showcase/theme-classic?raw';
import { ThemeToggleLRButton } from '@/components/showcase/theme-lr-button';
import ThemeToggleLRButtonCode from '@/components/showcase/theme-lr-button?raw';
import { ThemeToggleLRSwitch } from '@/components/showcase/theme-lr-switch';
import ThemeToggleLRSwitchCode from '@/components/showcase/theme-lr-switch?raw';
import { TiltCard } from '@/components/showcase/tilt-card';
import TiltCardCode from '@/components/showcase/tilt-card?raw';
import useThemeCode from '@/hooks/use-theme?raw';

export interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: React.ComponentType;
  code: string;
  css?: string;
  hook?: string;
  usage: string;
  installation: string[];
  layout?: 'centered' | 'fullscreen';
  isolate?: boolean;
}

const ThemePreviewWrapper = ({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) => (
  <div className='flex flex-col items-center gap-6'>
    <div className='flex items-center justify-center min-h-10'>
      {children}
    </div>
    <span className='text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold border-t border-border/50 pt-3 px-4 text-center'>
      {caption}
    </span>
  </div>
);

const themeToggleCSS = `::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
  position: absolute;
  inset: 0;
}

::view-transition-new(root) {
  z-index: 100;
}

::view-transition-old(root) {
  z-index: 1;
}`;

export const components: Component[] = [
  {
    id: 'theme-classic',
    name: 'Circular Reveal Toggle',
    description: 'The official app toggle',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='Standard Reveal'>
        <ThemeToggleClassic />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleClassicCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'The standard icon-based theme switcher used in the app navbar. Features a self-contained <style> tag for the circular reveal animation.',
    installation: ['npm install motion'],
  },
  {
    id: 'theme-bouncy-switch',
    name: 'Bouncy Pill Switch',
    description: 'Sliding switch with bouncy reveal',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='Elastic Expansion'>
      <ThemeToggleBouncySwitch />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleBouncySwitchCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'A pill-shaped switch that triggers a bouncy-linear circular reveal transition.',
    installation: ['npm install motion' ],
  },
  {
    id: 'theme-linear-button',
    name: 'Linear Elastic Button',
    description: 'Custom complex easing transition',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='Vertical Slide'>
        <ThemeToggleBouncyLinearButton />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleBouncyLinearButtonCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'A button toggle that uses a complex linear() easing function for a top-to-bottom page slide with bounce.',
    installation: ['npm install motion'],
  },
  {
    id: 'theme-linear-switch',
    name: 'Elastic Slide Switch',
    description: 'Switch with custom linear easing',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='Industrial Reveal'>
        <ThemeToggleBouncyLinearSwitch />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleBouncyLinearSwitchCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'An industrial-style switch that utilizes the bouncy linear() easing for its top-to-bottom entry effect.',
    installation: ['npm install motion'],
  },
  {
    id: 'theme-lr-button',
    name: 'Horizontal Slide Button',
    description: 'Left-to-right sliding transition',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='Directional Slide'>
        <ThemeToggleLRButton />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleLRButtonCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'A large button toggle that triggers a sliding clip-path animation. Light to Dark slides left-to-right, Dark to Light slides right-to-left.',
    installation: ['npm install motion'],
  },
  {
    id: 'theme-lr-switch',
    name: 'Horizontal Slide Switch',
    description: 'Sliding switch with directional reveal',
    category: 'animations',
    preview: () => (
      <ThemePreviewWrapper caption='View Transition'>
        <ThemeToggleLRSwitch />
      </ThemePreviewWrapper>
    ),
    code: ThemeToggleLRSwitchCode,
    hook: useThemeCode,
    css: themeToggleCSS,
    usage:
      'A classic switch component combined with a directional sliding View Transition.',
    installation: ['npm install motion'],
  },
  {
    id: 'avatar-change',
    name: 'Animated Avatar',
    description: 'Smooth Avatar Image Change with Progress',
    category: 'avatar',
    preview: AnimatedAvatar,
    code: AnimatedAvatarCode,
    usage:
      'A smooth avatar transition with a circular progress indicator. Requires custom "@keyframes progress" in your global CSS.',
    installation: ['npm install motion', 'npx shadcn@latest add avatar'],
  },
  {
    id: 'dot-background',
    name: 'Dot Background',
    description: 'Minimal Dot Pattern',
    category: 'backgrounds',
    preview: DotBackground,
    code: DotBackgroundCode,
    usage: 'A softer alternative to the grid, adding texture without noise.',
    installation: [],
    layout: 'fullscreen',
  },
  {
    id: 'grid-background',
    name: 'Grid Background',
    description: 'Subtle Grid Pattern',
    category: 'backgrounds',
    preview: GridBackground,
    code: GridBackgroundCode,
    usage: 'Adds a technical, structured feel to any section.',
    installation: [],
    layout: 'fullscreen',
  },
  {
    id: 'status-badge',
    name: 'Status Badge',
    description: 'Minimal Pulsing Status',
    category: 'badges',
    preview: StatusBadge,
    code: StatusBadgeCode,
    usage:
      'Indicate status (online, offline, busy) with a subtle pulse animation.',
    installation: [],
  },
  {
    id: 'tilt-card',
    name: '3D Tilt Card',
    description: 'Interactive 3D Hover Effect',
    category: 'cards',
    preview: TiltCard,
    code: TiltCardCode,
    usage:
      'A card that tilts in 3D space on hover. Great for feature highlights.',
    installation: ['npm install framer-motion'],
  },
  {
    id: 'animated-loader',
    name: 'Animated Loader',
    description: 'Smooth Spinning Loader',
    category: 'loaders',
    preview: AnimatedLoader,
    code: AnimatedLoaderCode,
    usage:
      'Perfect for loading states. Add this while fetching data or processing requests.',
    installation: ['npm install framer-motion'],
  },
  {
    id: 'navigation-bar',
    name: 'Navigation Bar',
    description: 'Smooth Navigation Bar with Animated Hover Effect',
    category: 'navigation',
    preview: NavigationBar,
    code: NavigationBarCode,
    usage:
      'A sleek navigation bar with a sliding underline effect that follows the active and hovered items.',
    installation: ['npm install motion', 'npx shadcn@latest add button'],
  },
  {
    id: 'responsive-navbar',
    name: 'Responsive Navbar',
    description: 'Adaptive Navigation Bar',
    category: 'navigation',
    preview: ResponsiveNavbar,
    code: ResponsiveNavbarCode,
    usage:
      'A fully responsive navbar with a mobile toggle and smooth animations.',
    installation: ['npm install framer-motion'],
    layout: 'fullscreen',
    isolate: true,
  },
];
