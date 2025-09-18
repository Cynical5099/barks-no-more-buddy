import { Star } from "lucide-react";

const SocialProofSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      text: "My German Shepherd Max was constantly barking at neighbors. Within 3 days of using Barks No More, he's completely calm. This device is amazing!",
      petType: "German Shepherd"
    },
    {
      name: "Mike Chen", 
      location: "Seattle, WA",
      rating: 5,
      text: "I have 3 rescue dogs and 2 cats. Barks No More works on ALL of them! Finally, peace in my house. Worth every penny.",
      petType: "3 Dogs + 2 Cats"
    },
    {
      name: "Lisa Rodriguez",
      location: "Miami, FL", 
      rating: 5,
      text: "My Beagle Lucy used to jump on everyone who came to the door. Now she sits calmly and waits for permission. Life-changing!",
      petType: "Beagle"
    },
    {
      name: "David Thompson",
      location: "Denver, CO",
      rating: 5,
      text: "Skeptical at first, but this really works! My Pitbull mix stopped his aggressive chewing in less than a week. Highly recommend!",
      petType: "Pitbull Mix"
    },
    {
      name: "Jennifer Park",
      location: "Portland, OR",
      rating: 5,
      text: "As a senior citizen, I needed something simple and effective. Barks No More is perfect - one button and my Poodle listens instantly.",
      petType: "Poodle"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Thousands of Happy Pet Owners
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the real transformations happening every day with Barks No More
          </p>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-all border flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-center mb-2 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-warm-orange fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-card-foreground mb-4 sm:mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-bold text-card-foreground text-sm sm:text-base">{review.name}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-1">{review.location}</p>
                  <p className="text-primary font-medium text-xs sm:text-sm">{review.petType} Owner</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Box */}
          <div className="bg-success-green/10 border border-success-green rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-4 text-success-green">
              ✅ Join 36,400+ Satisfied Customers
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
              Our customers report an average of 87% improvement in their pet's behavior within the first week. 
              From aggressive barking to destructive chewing - Barks No More handles it all.
