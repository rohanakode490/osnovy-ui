import { motion } from "framer-motion";

export const AnimatedLoader = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-muted border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};
