import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Sparkles, AlertCircle, ShoppingBag } from "lucide-react";
import { usePhones } from "@/hooks/usePhones";

const PricingSection = () => {
  const { preOwned, brandNew, sales, loading, error } = usePhones();

  const handleClaimSale = (model: string, price: string, details: string) => {
    const message = encodeURIComponent(
      `Hi Brooklyn! I saw the Website Exclusive Sale for the ${model} (${details}) for ${price} on your site and would like to claim this offer!`
    );
    window.open(`https://wa.me/26774320023?text=${message}`, "_blank");
  };

  const handleInquirePhone = (model: string, price: string, type: "preowned" | "brandnew") => {
    const message = encodeURIComponent(
      `Hi Brooklyn! I'm interested in the ${type === "preowned" ? "Pre-Owned" : "Brand New"} ${model} listed on your website for ${price}. Is it currently available?`
    );
    window.open(`https://wa.me/26774320023?text=${message}`, "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-background transition-smooth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <ShoppingBag className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent">Live Catalog</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time prices from our store. WhatsApp us directly to secure your phone before it sells out!
            </p>
          </div>

          {error && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                Showing offline inventory catalog. Prices are up-to-date.
              </p>
            </div>
          )}

          <Tabs defaultValue="preowned" className="w-full animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12 h-14 bg-muted border border-border p-1 rounded-xl">
              <TabsTrigger value="preowned" className="text-base rounded-lg transition-smooth">
                Pre-Owned
              </TabsTrigger>
              <TabsTrigger value="brandnew" className="text-base rounded-lg transition-smooth">
                Brand New
              </TabsTrigger>
              <TabsTrigger value="sales" className="text-base rounded-lg transition-smooth font-semibold text-accent flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent fill-accent/20 animate-glow-pulse" />
                Sales 🔥
              </TabsTrigger>
            </TabsList>

            {loading ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-muted-foreground animate-pulse">Loading live inventory...</p>
              </div>
            ) : (
              <>
                {/* PRE-OWNED TABLE */}
                <TabsContent value="preowned" className="space-y-6">
                  <Card className="p-6 md:p-8 elegant-shadow border-border bg-card transition-smooth hover:border-accent/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-6">
                        <Badge className="bg-primary/10 text-primary border-primary/20 dark:bg-accent/15 dark:text-accent">
                          100% Tested
                        </Badge>
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          Warranty Included
                        </Badge>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-4 px-4 text-foreground font-semibold">Model</th>
                              <th className="text-left py-4 px-4 text-foreground font-semibold">Condition</th>
                              <th className="text-right py-4 px-4 text-foreground font-semibold">Price Range</th>
                              <th className="text-right py-4 px-4 text-foreground font-semibold">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {preOwned.map((phone, index) => (
                              <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                                <td className="py-4 px-4 text-foreground font-medium">{phone.model}</td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-accent" />
                                    <span className="text-muted-foreground">{phone.condition || "Varies"}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-right text-accent font-bold text-lg">
                                  {phone.priceRange || phone.price}
                                </td>
                                <td className="py-4 px-4 text-right">
                                  <button
                                    onClick={() => handleInquirePhone(phone.model, phone.priceRange || phone.price || "", "preowned")}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-medium rounded-lg transition-smooth border border-border"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    Inquire
                                  </button>
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
                  <Card className="p-6 md:p-8 elegant-shadow border-border bg-card transition-smooth hover:border-accent/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-6">
                        <Badge className="bg-accent/10 text-accent border-accent/20">Brand New</Badge>
                        <Badge className="bg-primary/10 text-primary border-primary/20 dark:bg-accent/15 dark:text-accent">
                          12 Months Warranty
                        </Badge>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-4 px-4 text-foreground font-semibold">Model</th>
                              <th className="text-left py-4 px-4 text-foreground font-semibold">Storage</th>
                              <th className="text-left py-4 px-4 text-foreground font-semibold">Warranty</th>
                              <th className="text-right py-4 px-4 text-foreground font-semibold">Price</th>
                              <th className="text-right py-4 px-4 text-foreground font-semibold">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {brandNew.map((phone, index) => (
                              <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                                <td className="py-4 px-4 text-foreground font-medium">{phone.model}</td>
                                <td className="py-4 px-4 text-muted-foreground">{phone.storage || "N/A"}</td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-accent" />
                                    <span className="text-muted-foreground">{phone.warranty || "1 Year"}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-right text-accent font-bold text-lg">
                                  {phone.price}
                                </td>
                                <td className="py-4 px-4 text-right">
                                  <button
                                    onClick={() => handleInquirePhone(phone.model, phone.price || "", "brandnew")}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-medium rounded-lg transition-smooth border border-border"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    Inquire
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* SALES / DEALS TAB */}
                <TabsContent value="sales" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {sales.map((phone, index) => {
                      const discountText = phone.originalPrice && phone.salePrice 
                        ? `Save P${parseInt(phone.originalPrice.replace(/\D/g, '')) - parseInt(phone.salePrice.replace(/\D/g, ''))}`
                        : "Limited Promo";
                        
                      return (
                        <Card 
                          key={index} 
                          className="relative overflow-hidden p-6 md:p-8 elegant-shadow border-accent/25 dark:border-accent/15 bg-card transition-smooth hover:scale-[1.02] hover:border-accent/40 hover:shadow-glow flex flex-col justify-between"
                        >
                          {/* Sale Ribbon/Badge */}
                          <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-md">
                            <Sparkles className="w-3.5 h-3.5 fill-accent-foreground/20 animate-spin" style={{ animationDuration: '4s' }} />
                            Web Deal
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-destructive/10 text-destructive border-destructive/20 uppercase tracking-wide text-[10px] font-bold">
                                {discountText}
                              </Badge>
                              <Badge className="bg-accent/10 text-accent border-accent/20 uppercase tracking-wide text-[10px]">
                                {phone.type === "brandnew" ? "Brand New" : `Pre-Owned (${phone.condition})`}
                              </Badge>
                            </div>

                            <div>
                              <h3 className="text-2xl font-bold text-foreground">{phone.model}</h3>
                              <p className="text-sm text-muted-foreground">
                                {phone.storage ? `Storage: ${phone.storage}` : `Condition: ${phone.condition || "Varies"}`} &bull; {phone.warranty || "Warranty Included"}
                              </p>
                            </div>

                            {/* Prices */}
                            <div className="flex items-baseline gap-3 pt-2">
                              <span className="text-3xl font-extrabold text-accent">
                                {phone.salePrice}
                              </span>
                              {phone.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through decoration-destructive/60">
                                  {phone.originalPrice}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            <div className="p-3 bg-muted/50 rounded-lg border border-border/50 text-sm text-muted-foreground leading-relaxed">
                              {phone.saleDescription || "Special reward pricing for online users!"}
                            </div>
                          </div>

                          {/* WhatsApp CTA */}
                          <button
                            onClick={() => handleClaimSale(phone.model, phone.salePrice || "", phone.storage || phone.condition || "")}
                            className="mt-6 w-full py-3 bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-smooth hover:shadow-xl active:scale-[0.98]"
                          >
                            <MessageCircle className="w-5 h-5 fill-accent-foreground/20" />
                            Claim Reward Deal
                          </button>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              </>
            )}
          </Tabs>

          <p className="text-center text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            * Sales offers are exclusive to website users. Stock is highly limited. Contact us immediately to lock in your deal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
