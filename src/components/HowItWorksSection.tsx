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
    <section className="py-12 sm:py-16 md:py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            How Barks No More Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three simple steps to better behavior - no complex training routines required
          </p>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-lg transition-all border h-full flex flex-col items-center text-center">
                  <div className="bg-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 text-white font-bold text-lg sm:text-2xl">
                    {step.number}
                  </div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6">
                    <step.icon className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-card-foreground">{step.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Summary Box */}
          <div className="bg-muted rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-4 text-foreground">It's That Simple!</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
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
