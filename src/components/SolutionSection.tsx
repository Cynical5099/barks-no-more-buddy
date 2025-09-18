import { CheckCircle, Shield, Zap, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Stops Bad Behavior Instantly",
      description: "High-frequency sound immediately interrupts unwanted behaviors"
    },
    {
      icon: Shield,
      title: "Safe & Painless",
      description: "Completely harmless ultrasonic technology that doesn't hurt your pet"
    },
    {
      icon: Users,
      title: "Easy for Beginners",
      description: "No prior training experience needed - simple one-button operation"
    },
    {
      icon: Heart,
      title: "Works on All Dogs & Cats",
      description: "Effective for pets of all sizes, ages, and breeds"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Introducing Barks No More
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The revolutionary device that transforms your pet's behavior in minutes, not months
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-card hover:shadow-lg transition-all border flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-card-foreground">{benefit.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Box */}
          <div className="bg-hero-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              Transform Your Pet's Behavior Today
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95">
              Join thousands of happy pet owners who've already solved their training problems
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              onClick={() => window.open('https://uplevelrewarded.com/aff_c?offer_id=1907&aff_id=21664', '_blank')}
            >
              Get Barks No More Now - 50% Off
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
