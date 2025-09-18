import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog-training.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Stop Your Dog's Bad Behaviors Fast
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 opacity-90">
              – Without Expensive Training!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95">
            The Barks No More device makes training your dog easy, fast, and painless 
            – even if you have no experience.
          </p>
          
          <div className="mb-16">
            <img 
              src={heroImage} 
              alt="Dog owner using Barks No More device with calm, obedient dog" 
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full h-auto"
            />
          </div>
          
          <Button 
            variant="cta" 
            size="hero"
            className="animate-pulse hover:animate-none"
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
