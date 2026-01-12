import { AnimatedLoader } from "@/components/showcase/animated-loader";
import AnimatedLoaderCode from "@/components/showcase/animated-loader?raw";

export interface Component {
    id: string;
    name: string;
    description: string;
    category: string;
    preview: React.ComponentType;
    code: string;
    usage: string;
    installation: string[];
}

export const components: Component[] = [
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
