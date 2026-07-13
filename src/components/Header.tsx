import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, Sparkles, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-smooth">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-accent hover:scale-105 transition-smooth font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="text-accent hover:text-accent/80 hover:scale-105 transition-smooth font-bold flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full border border-accent/20"
          >
            <Sparkles className="w-3.5 h-3.5 fill-accent/20" />
            Special Deals
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* WhatsApp Contact button - Desktop */}
          <Button
            asChild
            className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-smooth gap-2"
          >
            <a
              href="https://wa.me/26774320023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 fill-accent-foreground/20" />
              <span>WhatsApp</span>
            </a>
          </Button>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/20">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border p-6 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <Logo />
                  </div>
                  
                  <nav className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-accent transition-smooth py-2"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                    
                    <SheetClose asChild>
                      <a
                        href="#pricing"
                        className="text-lg font-bold text-accent flex items-center gap-2 py-2"
                      >
                        <Sparkles className="w-5 h-5 fill-accent/20" />
                        Website Deals & Sales
                      </a>
                    </SheetClose>
                  </nav>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg py-6 rounded-xl flex items-center justify-center gap-2"
                  >
                    <a
                      href="https://wa.me/26774320023"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 fill-accent-foreground/20" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Get a reply in minutes!
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
