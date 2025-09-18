const Footer = () => {
  const footerLinks = [
    { title: "About the Author", href: "#" },
    { title: "Contact Info", href: "#" },
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Marketing Disclosures", href: "#" },
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Barks No More</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Transforming pet behavior with safe, effective, and easy-to-use training technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              © 2024 Barks No More. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Individual results may vary. This product is not intended to replace professional 
              veterinary advice. Always consult with a qualified pet behaviorist for severe behavioral issues. 
              The testimonials shown are from real customers but individual results may differ.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;