import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const preOwnedPhones = [
  { model: "iPhone 11", storage: "64GB", price: "P2,500", condition: "Excellent" },
  { model: "iPhone 11", storage: "128GB", price: "P2,800", condition: "Excellent" },
  { model: "iPhone 11 Pro", storage: "64GB", price: "P3,200", condition: "Very Good" },
  { model: "iPhone 12", storage: "64GB", price: "P3,500", condition: "Excellent" },
  { model: "iPhone 12", storage: "128GB", price: "P3,900", condition: "Excellent" },
  { model: "iPhone 12 Pro", storage: "128GB", price: "P4,500", condition: "Very Good" },
  { model: "iPhone 13", storage: "128GB", price: "P5,200", condition: "Excellent" },
  { model: "iPhone 13 Pro", storage: "128GB", price: "P6,000", condition: "Excellent" },
];

const brandNewPhones = [
  { model: "iPhone 13", storage: "128GB", price: "P7,500", warranty: "1 Year" },
  { model: "iPhone 13", storage: "256GB", price: "P8,200", warranty: "1 Year" },
  { model: "iPhone 14", storage: "128GB", price: "P9,500", warranty: "1 Year" },
  { model: "iPhone 14", storage: "256GB", price: "P10,500", warranty: "1 Year" },
  { model: "iPhone 14 Pro", storage: "256GB", price: "P13,500", warranty: "1 Year" },
  { model: "iPhone 15", storage: "128GB", price: "P11,500", warranty: "1 Year" },
  { model: "iPhone 15", storage: "256GB", price: "P12,800", warranty: "1 Year" },
  { model: "iPhone 15 Pro", storage: "256GB", price: "P16,000", warranty: "1 Year" },
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
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Storage</th>
                          <th className="text-left py-4 px-4 text-foreground font-semibold">Condition</th>
                          <th className="text-right py-4 px-4 text-foreground font-semibold">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preOwnedPhones.map((phone, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                            <td className="py-4 px-4 text-foreground font-medium">{phone.model}</td>
                            <td className="py-4 px-4 text-muted-foreground">{phone.storage}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-accent" />
                                <span className="text-muted-foreground">{phone.condition}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-right text-accent font-bold text-lg">{phone.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </TabsContent>

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
                            <td className="py-4 px-4 text-right text-accent font-bold text-lg">{phone.price}</td>
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
