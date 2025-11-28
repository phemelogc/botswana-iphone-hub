import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/26774320023"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in-scale"
      style={{ animationDelay: "1s" }}
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground gold-glow transition-smooth hover:scale-110 p-0"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
