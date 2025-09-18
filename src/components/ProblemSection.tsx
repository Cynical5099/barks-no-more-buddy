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
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Is Your Dog's Bad Behavior Taking Over Your Life?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all">
                <problem.icon className="w-12 h-12 text-destructive mb-4 mx-auto" />
                <p className="text-lg font-medium text-card-foreground">{problem.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-8 mb-8">
            <p className="text-xl text-destructive font-semibold mb-4">
              ⚠️ The Consequences Are Real
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Without proper training, your dog's behavior can lead to serious consequences: 
              lawsuits from neighbor complaints, potential injuries to family members and guests, 
              expensive property damage, and even the heartbreaking possibility of having to surrender your beloved pet.
            </p>
          </div>
          
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Stella's Story: The Mailman Incident</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
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