import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-md",
        "dark:border-white/10 dark:bg-black/10",
        "hover:bg-white/20 hover:border-white/30 transition-colors duration-300",
        className
      )}
    >
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl" />
      
      <div className="relative z-10">
        <h3 className="mb-2 text-xl font-bold text-foreground">Glass Effect</h3>
        <p className="text-muted-foreground">
          This card features a modern frosted glass effect with subtle background gradients.
        </p>
        {children}
      </div>
    </motion.div>
  );
}
