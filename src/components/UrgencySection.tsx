import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp, Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-12 shadow-card border border-destructive/20">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ⚠️ Almost Out of Stock!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-destructive/10 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-destructive mx-auto mb-3" />
                <p className="font-bold text-2xl text-destructive">36,400+</p>
                <p className="text-sm text-muted-foreground">Units Sold</p>
              </div>
              
              <div className="bg-warm-orange/10 rounded-xl p-6">
                <Clock className="w-8 h-8 text-warm-orange mx-auto mb-3" />
                <p className="font-bold text-2xl text-warm-orange">High</p>
                <p className="text-sm text-muted-foreground">Demand</p>
              </div>
              
              <div className="bg-destructive/10 rounded-xl p-6">
                <AlertCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
                <p className="font-bold text-2xl text-destructive">Limited</p>
                <p className="text-sm text-muted-foreground">Stock Left</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
              Due to overwhelming demand, <strong>Barks No More has sold over 36,400 units</strong> and is 
              almost out of stock. Don't wait - secure your device while supplies last!
            </p>
            
            <div className="bg-hero-gradient rounded-2xl p-8 text-white mb-6">
              <p className="text-2xl font-bold mb-4">
                🔥 Limited Time: 50% OFF
              </p>
              <p className="text-lg opacity-95">
                This discount won't last long with current demand
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="xl"
              className="w-full md:w-auto animate-pulse hover:animate-none"
              onClick={() => window.open('https://uplevelrewarded.com/aff_c?offer_id=1907&aff_id=21664', '_blank')}
            >
              Order Now - Secure Your Device!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;