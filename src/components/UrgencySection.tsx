import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingUp, Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-destructive/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-card border border-destructive/20">
            <AlertCircle className="w-12 sm:w-16 h-12 sm:h-16 text-destructive mx-auto mb-4 sm:mb-6" />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
              ⚠️ Almost Out of Stock!
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-destructive/10 rounded-xl p-4 sm:p-6">
                <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-destructive mx-auto mb-2 sm:mb-3" />
                <p className="font-bold text-xl sm:text-2xl text-destructive">36,400+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Units Sold</p>
              </div>
              
              <div className="bg-warm-orange/10 rounded-xl p-4 sm:p-6">
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-warm-orange mx-auto mb-2 sm:mb-3" />
                <p className="font-bold text-xl sm:text-2xl text-warm-orange">High</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Demand</p>
              </div>
              
              <div className="bg-destructive/10 rounded-xl p-4 sm:p-6">
                <AlertCircle className="w-6 sm:w-8 h-6 sm:h-8 text-destructive mx-auto mb-2 sm:mb-3" />
                <p className="font-bold text-xl sm:text-2xl text-destructive">Limited</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Stock Left</p>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed">
              Due to overwhelming demand, <strong>Barks No More has sold over 36,400 units</strong> and is 
              almost out of stock. Don't wait - secure your device while supplies last!
            </p>
            
            <div className="bg-hero-gradient rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white mb-4 sm:mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                🔥 Limited Time: 50% OFF
              </p>
              <p className="text-sm sm:text-base md:text-lg opacity-95">
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
