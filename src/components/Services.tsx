import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import massageHandsImage from "@/assets/massage-hands.jpg";
import spaStoneImage from "@/assets/spa-stones.jpg";

const Services = () => {
  const services = [
    {
      title: "Swedish Massage",
      description: "Classic relaxation massage with long, flowing strokes to reduce tension and promote well-being.",
      duration: "60 min",
      price: "$90",
      image: massageHandsImage
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to relieve chronic pain and muscle knots.",
      duration: "75 min", 
      price: "$120",
      image: spaStoneImage
    },
    {
      title: "Hot Stone Therapy",
      description: "Heated stones placed on key points to melt away tension and promote deep relaxation.",
      duration: "90 min",
      price: "$140",
      image: spaStoneImage
    },
    {
      title: "Sports Massage",
      description: "Specialized technique for athletes to enhance performance and speed recovery.",
      duration: "60 min",
      price: "$100",
      image: massageHandsImage
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-sage mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of therapeutic massage treatments designed to restore balance and promote healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl text-sage mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                  <span className="text-lg font-semibold text-sage">{service.price}</span>
                </div>

                <Button 
                  variant="sage" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;