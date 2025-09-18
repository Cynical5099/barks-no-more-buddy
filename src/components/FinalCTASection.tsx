import { Button } from "@/components/ui/button";
import { Gift, Shield, Heart } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-snug md:leading-tight">
            Get Your Barks No More Today
            <span className="block text-lg sm:text-2xl md:text-4xl mt-2 opacity-90">
              50% Off While Supplies Last!
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 md:mb-12">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">50% Discount</h3>
              <p className="text-sm sm:text-base opacity-90">Limited time offer - save big today!</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Safe & Effective</h3>
              <p className="text-sm sm:text-base opacity-90">Proven technology trusted by thousands</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Happy Pets</h3>
              <p className="text-sm sm:text-base opacity-90">Transform your relationship with your pet</p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 opacity-95 leading-relaxed">
            Don't let another day go by with bad behavior problems. 
            Join thousands of pet owners who've transformed their pets' behavior with Barks No More.
          </p>
          
          <Button 
            variant="secondary" 
            size="hero"
            className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-4 sm:mb-0"
            onClick={() => window.open('https://uplevelrewarded.com/aff_c?offer_id=1907&aff_id=21664&source=tiktok', '_blank')}
          >
            Claim Discount & Train Your Pet Now
          </Button>
          
          <p className="text-sm mt-4 sm:mt-6 opacity-75">
            ⏰ This special price is only available for a limited time
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
