import { motion } from "motion/react";
import { CodeIcon } from "./code-icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<false | true>(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 p-4 z-50 border-b border-border/40 bg-background/95 backdrop-blur"
    >
      <div className="container flex item-center justify-between">
        <Link to="/" className="items-center">
          <CodeIcon />
        </Link>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-4 text-foreground">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/documentation"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Docs
          </Link>
          {/*  TODO: ADD THEME CHANGE COMPONENT */}
          <span>THEME</span>
        </div>

        {/* Mobile Nav View*/}
        <div className="flex md:hidden items-center gap-2">
          <span>THEME</span>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[40%]">
              <div className="flex flex-col gap-6 mt-8 px-3">
                {/* TODO: CURRENT PAGE SHOULD CONTAIN text-lg and bold */}
                <Link
                  to="/"
                  className="px-2 text-lg font-semibold transition-colors rounded-lg hover:text-primary hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/docs"
                  className="px-2 text-sm font-medium transition-colors rounded-lg hover:text-primary hover:bg-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Docs
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
