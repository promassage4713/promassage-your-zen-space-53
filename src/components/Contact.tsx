import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-sage">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-foreground mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-sage-foreground/80 max-w-2xl mx-auto">
            Ready to experience the healing benefits of professional massage therapy? 
            Contact us today to schedule your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-sage-foreground/10 border-sage-foreground/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-sage-foreground text-2xl">Get In Touch</CardTitle>
                <CardDescription className="text-sage-foreground/70">
                  We're here to help you on your wellness journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-gold-foreground text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-sage-foreground">Location</div>
                    <div className="text-sage-foreground/70">123 Wellness Ave, Spa City, SC 12345</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-gold-foreground text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-medium text-sage-foreground">Phone</div>
                    <div className="text-sage-foreground/70">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-gold-foreground text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-medium text-sage-foreground">Email</div>
                    <div className="text-sage-foreground/70">info@promassage.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-gold-foreground text-xl">🕐</span>
                  </div>
                  <div>
                    <div className="font-medium text-sage-foreground">Hours</div>
                    <div className="text-sage-foreground/70">
                      Mon-Fri: 9am-7pm<br/>
                      Sat-Sun: 10am-5pm
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-sage-foreground/10 border-sage-foreground/20 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="text-sage-foreground text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-sage-foreground/70">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sage-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      required 
                      className="bg-sage-foreground/20 border-sage-foreground/30 text-sage-foreground placeholder:text-sage-foreground/50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sage-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      required 
                      className="bg-sage-foreground/20 border-sage-foreground/30 text-sage-foreground placeholder:text-sage-foreground/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sage-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-sage-foreground/20 border-sage-foreground/30 text-sage-foreground placeholder:text-sage-foreground/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sage-foreground">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    className="bg-sage-foreground/20 border-sage-foreground/30 text-sage-foreground placeholder:text-sage-foreground/50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sage-foreground">Preferred Service</Label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 bg-sage-foreground/20 border border-sage-foreground/30 rounded-md text-sage-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="swedish">Swedish Massage</option>
                    <option value="deep-tissue">Deep Tissue Massage</option>
                    <option value="hot-stone">Hot Stone Therapy</option>
                    <option value="sports">Sports Massage</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sage-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={4}
                    className="bg-sage-foreground/20 border-sage-foreground/30 text-sage-foreground placeholder:text-sage-foreground/50"
                    placeholder="Tell us about your needs or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gold" 
                  size="lg" 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;