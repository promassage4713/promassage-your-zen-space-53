const Footer = () => {
  return (
    <footer className="bg-sage text-sage-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ProMassage</h3>
            <p className="text-sage-foreground/80 leading-relaxed">
              Professional massage therapy dedicated to your wellness journey.
              Experience the healing power of therapeutic touch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sage-foreground/80 hover:text-sage-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sage-foreground/80 hover:text-sage-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sage-foreground/80 hover:text-sage-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sage-foreground/80 hover:text-sage-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-sage-foreground/80">
              <p>📍 4713 E 41st Street, Tulsa OK 74135</p>
              <p>📞 (918) 730-3716</p>
              <p>✉️ promassage4713@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sage-foreground/60">
            © 2025 ProMassage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
