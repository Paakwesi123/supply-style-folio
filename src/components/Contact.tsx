import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "0597720842",
      href: "tel:0597720842",
      color: "text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ansulordina@amail.com",
      href: "mailto:ansulordina@amail.com",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sekondi-Takoradi, Ghana",
      href: null,
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking to optimize your supply chain or discuss procurement strategies? 
              Let's connect and explore opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 bg-primary/10 rounded-full mb-4 ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    {method.label}
                  </h3>
                  {method.href ? (
                    <a 
                      href={method.href}
                      className="text-card-foreground hover:text-primary transition-colors font-medium"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-card-foreground font-medium">{method.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground animate-fade-in">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto leading-relaxed">
                Whether you need expertise in procurement planning, supply chain optimization, 
                or strategic sourcing, I'm here to help drive results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.location.href = 'mailto:ansulordina@amail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50"
                  onClick={() => window.location.href = 'tel:0597720842'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
