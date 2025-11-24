import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-foreground hover:text-accent transition-smooth font-medium">
            About
          </a>
          <a href="#pricing" className="text-foreground hover:text-accent transition-smooth font-medium">
            Pricing
          </a>
          <a href="#why-us" className="text-foreground hover:text-accent transition-smooth font-medium">
            Why Us
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-smooth font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-smooth"
          >
            <a
              href="https://wa.me/26775715238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
