import { Card } from "@/components/ui/card";
import { Shield, DollarSign, Zap, Heart, CheckCircle2, Phone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "Every device is thoroughly tested and verified for performance, battery health, and overall condition.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Best prices in Botswana with transparent pricing. No hidden fees, just honest deals.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick replies on WhatsApp and same-day service. We respect your time.",
  },
  {
    icon: Heart,
    title: "Friendly Service",
    description: "Personal attention and honest advice to help you choose the perfect iPhone.",
  },
  {
    icon: CheckCircle2,
    title: "Device Testing Included",
    description: "Comprehensive testing report with every purchase. Know exactly what you're getting.",
  },
  {
    icon: Phone,
    title: "After-Sales Support",
    description: "We're here even after the sale. Questions or issues? Just reach out.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose B Phones?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just selling phones — we're building trust and long-term relationships with every customer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 space-y-4 elegant-shadow hover:scale-105 transition-smooth border-border bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
