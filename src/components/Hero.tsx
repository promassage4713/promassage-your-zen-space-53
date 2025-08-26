import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-massage.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-sage/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-sage-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Restore Your
            <span className="block text-gold">Well-being</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Professional massage therapy to rejuvenate your body, mind, and spirit. 
            Experience the healing touch at ProMassage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg"
            >
              Book Your Session
            </Button> */}
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg bg-sage-foreground/10 border-sage-foreground/30 text-sage-foreground hover:bg-sage-foreground/20"
            >
              View Services
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-sage-foreground/20 rounded-full animate-float animation-delay-2000 hidden lg:block"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;