import { Eye, Hand, Gift } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Eye,
      number: "1",
      title: "Wait for Bad Behavior",
      description: "Watch for unwanted actions like barking, jumping, or chewing"
    },
    {
      icon: Hand,
      number: "2", 
      title: "Press & Command",
      description: "Press the button while giving a clear command like 'Stop!' or 'No!'"
    },
    {
      icon: Gift,
      number: "3",
      title: "Reward Immediately",
      description: "Give praise and treats the moment your pet stops the behavior"
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How Barks No More Works
          </h2>
          <p className="text-xl mb-16 text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to better behavior - no complex training routines required
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all border h-full">
                  <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white font-bold text-2xl">
                    {step.number}
                  </div>
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">It's That Simple!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The device emits a high-frequency sound that only your pet can hear, instantly getting their attention 
              and interrupting the unwanted behavior. With consistent use and positive reinforcement, 
              most pets learn to stop bad behaviors within days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;