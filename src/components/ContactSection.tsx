import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Get Your iPhone?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us now and get a response within minutes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6 elegant-shadow border-border bg-card animate-fade-in">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">+267 7571 5238</p>
                      <p className="text-sm text-muted-foreground mt-1">Fast response guaranteed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Operating Hours</h4>
                      <p className="text-muted-foreground">Monday - Saturday</p>
                      <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground mt-1">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Serving all of Botswana</p>
                      <p className="text-sm text-muted-foreground mt-1">Delivery available</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 elegant-shadow border-border bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <MessageCircle className="w-16 h-16 text-primary-foreground" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Chat with us on WhatsApp
                </h3>
                <p className="text-primary-foreground/80">
                  The fastest way to get your questions answered and find your perfect iPhone.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 w-full max-w-xs shadow-xl transition-smooth"
              >
                <a
                  href="https://wa.me/26775715238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
