import massageHandsImage from "@/assets/massage-hands.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={massageHandsImage} 
                alt="Professional massage therapy"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elegant border border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sage mb-6">
                Healing Through 
                <span className="block text-gold">Expert Touch</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At ProMassage, we believe in the transformative power of therapeutic touch. 
                  Our licensed massage therapists combine years of experience with a genuine 
                  passion for helping you achieve optimal wellness.
                </p>
                
                <p>
                  Whether you're seeking relief from chronic pain, stress reduction, or simply 
                  want to treat yourself to some well-deserved relaxation, we're here to 
                  guide you on your journey to better health.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6 border border-border/50">
                <div className="text-2xl font-bold text-sage mb-2">10+ Years</div>
                <div className="text-muted-foreground">Professional Experience</div>
              </div>
              
              <div className="bg-cream rounded-xl p-6 border border-border/50">
                <div className="text-2xl font-bold text-sage mb-2">Licensed</div>
                <div className="text-muted-foreground">Certified Therapists</div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Sports Therapy'].map((specialty) => (
                  <span 
                    key={specialty}
                    className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;