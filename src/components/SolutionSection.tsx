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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Introducing Barks No More
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            The revolutionary device that transforms your pet's behavior in minutes, not months
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all border">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-hero-gradient rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Pet's Behavior Today
            </h3>
            <p className="text-xl mb-8 opacity-95">
              Join thousands of happy pet owners who've already solved their training problems
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
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