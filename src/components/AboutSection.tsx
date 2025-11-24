import { Card } from "@/components/ui/card";
import { Shield, Zap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Your Trusted iPhone Partner in Botswana
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We sell quality-tested pre-owned and brand-new iPhones at the best prices. 
            Fast, reliable, and customer-friendly. Every device is thoroughly tested to ensure 
            you get the premium experience you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center space-y-4 elegant-shadow hover:scale-105 transition-smooth border-border bg-card animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Quality Tested</h3>
            <p className="text-muted-foreground">
              Every device undergoes rigorous testing to ensure peak performance and reliability.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 elegant-shadow hover:scale-105 transition-smooth border-border bg-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Fast Response</h3>
            <p className="text-muted-foreground">
              Quick replies on WhatsApp and same-day service for your convenience.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 elegant-shadow hover:scale-105 transition-smooth border-border bg-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Customer First</h3>
            <p className="text-muted-foreground">
              Friendly service and honest advice to help you make the right choice.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
