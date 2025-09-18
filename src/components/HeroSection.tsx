import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog-training.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-snug md:leading-tight">
            Stop Your Dog's Bad Behaviors Fast
            <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 opacity-90">
              – Without Expensive Training!
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
            The Barks No More device makes training your dog easy, fast, and painless 
            – even if you have no experience.
          </p>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img 
              src={heroImage} 
              alt="Dog owner using Barks No More device with calm, obedient dog" 
              className="mx-auto rounded-2xl shadow-2xl w-full max-w-full h-auto"
            />
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="hero"
            className="w-full sm:w-auto px-6 py-3 sm:py-4 animate-pulse hover:animate-none"
            onClick={() => window.open('https://uplevelrewarded.com/aff_c?offer_id=1907&aff_id=21664&source=tiktok', '_blank')}
          >
            Apply 50% Discount & Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
