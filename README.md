# OsnovyUI - Modern React Component Gallery

OsnovyUI is a sleek, interactive showcase for high-quality React components. Built with the latest web technologies, it provides a "copy-paste" friendly environment for developers to explore, interact with, and integrate beautiful UI elements into their own projects.

## ✨ Features

- **Interactive Showcase**: Live previews of components with real-time interaction (Tilt cards, Glassmorphism, etc.).
- **Modern Tech Stack**: Leveraging React 19, Tailwind CSS v4, and Framer Motion.
- **Responsive Design**: Fully optimized for mobile and desktop, featuring a floating "pill" navigation system.
- **Code Highlighting**: Instant access to installation steps and component source code via Shiki.
- **Theme Support**: Seamless Dark/Light mode switching.
- **Isolated Previews**: Components are rendered in isolated frames to ensure styling consistency.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Syntax Highlighting**: [Shiki](https://shiki.style/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rohanakode490/osnovy-ui.git
   cd osnovy-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.

## 📁 Project Structure

- `src/components/ui/`: Core reusable UI primitives (shadcn/ui style).
- `src/components/showcase/`: Featured components for the gallery.
- `src/data/components-data.ts`: Central metadata source for the showcase.
- `src/pages/`: Main application routing pages.
- `src/hooks/`: Custom React hooks (e.g., `useTheme`).

## 📄 License

This project is open-source and available under the MIT License.
