import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const preOwnedPhones = [
  { model: "iPhone X", priceRange: "P1600-P2200", condition: "Varies" },
  { model: "iPhone XS", priceRange: "P2000-P2400", condition: "Varies" },
  { model: "iPhone XR", priceRange: "P2200-P2500", condition: "Varies" },
  { model: "iPhone XS Max", priceRange: "P2400-P2800", condition: "Varies" },

  { model: "iPhone 11", priceRange: "P3000-P3500", condition: "Varies" },
  { model: "iPhone 11 Pro", priceRange: "P3300-P3800", condition: "Varies" },
  { model: "iPhone 11 Pro Max", priceRange: "P3500-P4000", condition: "Varies" },

  { model: "iPhone 12", priceRange: "P3500-P4300", condition: "Varies" },
  { model: "iPhone 12 Pro", priceRange: "P4300-P5000", condition: "Varies" },
  { model: "iPhone 12 Pro Max", priceRange: "P4500-P5300", condition: "Varies" },

  { model: "iPhone 13", priceRange: "P4800-P5300", condition: "Varies" },
  { model: "iPhone 13 Pro", priceRange: "P5300-P6000", condition: "Varies" },
  { model: "iPhone 13 Pro Max", priceRange: "P6000-P6800", condition: "Varies" },

  { model: "iPhone 14", priceRange: "P6000-P6500", condition: "Varies" },
  { model: "iPhone 14 Plus", priceRange: "P6500-P7000", condition: "Varies" },
  { model: "iPhone 14 Pro Max", priceRange: "P7500-P8700", condition: "Varies" },

  { model: "iPhone 15", priceRange: "P7000-P8000", condition: "Varies" },
  { model: "iPhone 15 Plus", priceRange: "P7500-P8500", condition: "Varies" },
  { model: "iPhone 15 Pro", priceRange: "P8000-P9500", condition: "Varies" },
  { model: "iPhone 15 Pro Max", priceRange: "P9500-P11000", condition: "Varies" },

  { model: "iPhone 16", priceRange: "P8000-P9000", condition: "Varies" },
  { model: "iPhone 16 Plus", priceRange: "P8500-P9500", condition: "Varies" },
  { model: "iPhone 16 Pro", priceRange: "P10000-P11500", condition: "Varies" },
  { model: "iPhone 16 Pro Max", priceRange: "P11500-P13000", condition: "Varies" },
];

const brandNewPhones = [
  { model: "iPhone X", storage: "64GB", price: "P3300", warranty: "1 Year" },
  { model: "iPhone X", storage: "256GB", price: "P3600", warranty: "1 Year" },
  { model: "iPhone XR", storage: "64GB", price: "P3600", warranty: "1 Year" },
  { model: "iPhone XR", storage: "128GB", price: "P3900", warranty: "1 Year" },
  { model: "iPhone XS Max", storage: "64GB", price: "P3800", warranty: "1 Year" },
  { model: "iPhone XS Max", storage: "256GB", price: "P4200", warranty: "1 Year" },

  { model: "iPhone 11", storage: "64GB", price: "P4300", warranty: "1 Year" },
  { model: "iPhone 11", storage: "128GB", price: "P4600", warranty: "1 Year" },
  { model: "iPhone 11 Pro", storage: "64GB", price: "P5000", warranty: "1 Year" },
  { model: "iPhone 11 Pro", storage: "256GB", price: "P5400", warranty: "1 Year" },
  { model: "iPhone 11 Pro Max", storage: "64GB", price: "P5500", warranty: "1 Year" },
  { model: "iPhone 11 Pro Max", storage: "256GB", price: "P5900", warranty: "1 Year" },

  { model: "iPhone 12", storage: "64GB", price: "P5000", warranty: "1 Year" },
  { model: "iPhone 12", storage: "128GB", price: "P5400", warranty: "1 Year" },
  { model: "iPhone 12 Pro", storage: "128GB", price: "P6200", warranty: "1 Year" },
  { model: "iPhone 12 Pro", storage: "256GB", price: "P6500", warranty: "1 Year" },
  { model: "iPhone 12 Pro Max", storage: "128GB", price: "P6900", warranty: "1 Year" },
  { model: "iPhone 12 Pro Max", storage: "256GB", price: "P7300", warranty: "1 Year" },

  { model: "iPhone 13", storage: "128GB", price: "P6700", warranty: "1 Year" },
  { model: "iPhone 13", storage: "256GB", price: "P7000", warranty: "1 Year" },
  { model: "iPhone 13 Pro", storage: "128GB", price: "P8200", warranty: "1 Year" },
  { model: "iPhone 13 Pro", storage: "256GB", price: "P8500", warranty: "1 Year" },
  { model: "iPhone 13 Pro Max", storage: "128GB", price: "P8800", warranty: "1 Year" },
  { model: "iPhone 13 Pro Max", storage: "256GB", price: "P9100", warranty: "1 Year" },

  { model: "iPhone 14", storage: "128GB", price: "P8500", warranty: "1 Year" },
  { model: "iPhone 14", storage: "256GB", price: "P8900", warranty: "1 Year" },
  { model: "iPhone 14 Plus", storage: "128GB", price: "P9000", warranty: "1 Year" },
  { model: "iPhone 14 Plus", storage: "256GB", price: "P9500", warranty: "1 Year" },
  { model: "iPhone 14 Pro", storage: "128GB", price: "P10200", warranty: "1 Year" },
  { model: "iPhone 14 Pro", storage: "256GB", price: "P10800", warranty: "1 Year" },
  { model: "iPhone 14 Pro Max", storage: "128GB", price: "P10900", warranty: "1 Year" },
  { model: "iPhone 14 Pro Max", storage: "256GB", price: "P11300", warranty: "1 Year" },

  { model: "iPhone 15", storage: "128GB", price: "P10400", warranty: "1 Year" },
  { model: "iPhone 15", storage: "256GB", price: "P11000", warranty: "1 Year" },
  { model: "iPhone 15 Plus", storage: "128GB", price: "P11000", warranty: "1 Year" },
  { model: "iPhone 15 Plus", storage: "256GB", price: "P11400", warranty: "1 Year" },
  { model: "iPhone 15 Pro", storage: "128GB", price: "P12600", warranty: "1 Year" },
  { model: "iPhone 15 Pro", storage: "256GB", price: "P13150", warranty: "1 Year" },
  { model: "iPhone 15 Pro Max", storage: "256GB", price: "P15200", warranty: "1 Year" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees. Just honest prices for quality devices.
            </p>
          </div>

          <Tabs defaultValue="preowned" className="w-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger value="preowned" className="text-base">
                Pre-Owned iPhones
              </TabsTrigger>
              <TabsTrigger value="brandnew" className="text-base">
                Brand New iPhones
              </TabsTrigger>
            </TabsList>

            {/* PRE-OWNED TABLE */}
            <TabsContent value="preowned" className="space-y-6">
              <Card className="p-8 elegant-shadow border-border bg-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Quality Tested</Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">Best Value</Badge>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Model</th>
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Condition</th>
                          <th className="text-right py-4 px-4 text-foreground font-semibold">Price Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preOwnedPhones.map((phone, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                            <td className="py-4 px-4 text-foreground font-medium">{phone.model}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-accent" />
                                <span className="text-muted-foreground">{phone.condition}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right text-accent font-bold text-lg">
                              {phone.priceRange}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* BRAND NEW TABLE */}
            <TabsContent value="brandnew" className="space-y-6">
              <Card className="p-8 elegant-shadow border-border bg-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <Badge className="bg-accent/10 text-accent border-accent/20">Brand New</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Warranty Included</Badge>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Model</th>
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Storage</th>
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Warranty</th>
                          <th className="text-right py-4 px-4 text-foreground font-semibold">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brandNewPhones.map((phone, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                            <td className="py-4 px-4 text-foreground font-medium">{phone.model}</td>
                            <td className="py-4 px-4 text-muted-foreground">{phone.storage}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-accent" />
                                <span className="text-muted-foreground">{phone.warranty}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right text-accent font-bold text-lg">
                              {phone.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            * Prices may vary based on device condition and availability. Contact us for the latest pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
