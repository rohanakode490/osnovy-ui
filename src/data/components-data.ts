import { AnimatedLoader } from "@/components/showcase/animated-loader";
import AnimatedLoaderCode from "@/components/showcase/animated-loader?raw";
import { TiltCard } from "@/components/showcase/tilt-card";
import TiltCardCode from "@/components/showcase/tilt-card?raw";
import { StatusBadge } from "@/components/showcase/status-badge";
import StatusBadgeCode from "@/components/showcase/status-badge?raw";
import { GridBackground } from "@/components/showcase/grid-background";
import GridBackgroundCode from "@/components/showcase/grid-background?raw";
import { DotBackground } from "@/components/showcase/dot-background";
import DotBackgroundCode from "@/components/showcase/dot-background?raw";
import { ResponsiveNavbar } from "@/components/showcase/responsive-navbar";
import ResponsiveNavbarCode from "@/components/showcase/responsive-navbar?raw";

export interface Component {
    id: string;
    name: string;
    description: string;
    category: string;
    preview: React.ComponentType;
    code: string;
    usage: string;
    installation: string[];
    layout?: "centered" | "fullscreen";
    isolate?: boolean;
}

export const components: Component[] = [
    {
        id: "tilt-card",
        name: "3D Tilt Card",
        description: "Interactive 3D Hover Effect",
        category: "cards",
        preview: TiltCard,
        code: TiltCardCode,
        usage: "A card that tilts in 3D space on hover. Great for feature highlights.",
        installation: ["npm install framer-motion"],
    },
    {
        id: "responsive-navbar",
        name: "Responsive Navbar",
        description: "Adaptive Navigation Bar",
        category: "navigation",
        preview: ResponsiveNavbar,
        code: ResponsiveNavbarCode,
        usage: "A fully responsive navbar with a mobile toggle and smooth animations.",
        installation: ["npm install framer-motion lucide-react"],
        layout: "fullscreen",
        isolate: true,
    },
    {
        id: "status-badge",
        name: "Status Badge",
        description: "Minimal Pulsing Status",
        category: "badges",
        preview: StatusBadge,
        code: StatusBadgeCode,
        usage: "Indicate status (online, offline, busy) with a subtle pulse animation.",
        installation: [],
    },
    {
        id: "grid-background",
        name: "Grid Background",
        description: "Subtle Grid Pattern",
        category: "backgrounds",
        preview: GridBackground,
        code: GridBackgroundCode,
        usage: "Adds a technical, structured feel to any section.",
        installation: [],
        layout: "fullscreen",
    },
    {
        id: "dot-background",
        name: "Dot Background",
        description: "Minimal Dot Pattern",
        category: "backgrounds",
        preview: DotBackground,
        code: DotBackgroundCode,
        usage: "A softer alternative to the grid, adding texture without noise.",
        installation: [],
        layout: "fullscreen",
    },
    {
    id: "animated-loader",
    name: "Animated Loader",
    description: "Smooth Spinning Loader",
    category: "loaders",
    preview: AnimatedLoader,
    code: AnimatedLoaderCode,
    usage:
        "Perfect for loading states. Add this while fetching data or processing requests.",
    installation: ["npm install framer-motion"],
    },
];
