import { AlertTriangle, Heart, Home, Users, Shield } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    { icon: AlertTriangle, text: "Excessive barking disturbing neighbors" },
    { icon: Heart, text: "Aggressive biting putting family at risk" },
    { icon: Home, text: "Destructive chewing ruining furniture" },
    { icon: Users, text: "Jumping on guests causing embarrassment" },
    { icon: Shield, text: "Dangerous digging creating hazards" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-foreground">
            Is Your Dog's Bad Behavior Taking Over Your Life?
          </h2>

          {/* Problem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-all flex flex-col items-center text-center">
                <problem.icon className="w-10 h-10 sm:w-12 sm:h-12 text-destructive mb-2 sm:mb-4" />
                <p className="text-sm sm:text-base md:text-lg font-medium text-card-foreground">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Consequences Box */}
          <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-xl text-destructive font-semibold mb-2 sm:mb-4">
              ⚠️ The Consequences Are Real
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
              Without proper training, your dog's behavior can lead to serious consequences: 
              lawsuits from neighbor complaints, potential injuries to family members and guests, 
              expensive property damage, and even the heartbreaking possibility of having to surrender your beloved pet.
            </p>
          </div>

          {/* Stella's Story */}
          <div className="bg-muted rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-4 text-foreground">Stella's Story: The Mailman Incident</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              "My Golden Retriever Buddy was the sweetest dog at home, but every time the mailman came, 
              he would bark aggressively and even nipped at his uniform once. I was terrified of a lawsuit 
              and didn't know what to do. Traditional training was too expensive and time-consuming. 
              That's when I discovered Barks No More..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
