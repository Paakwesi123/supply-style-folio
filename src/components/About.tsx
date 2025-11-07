import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  // Adinkra Boa Me Na Me Mmoa Wo (help me and let me help you - cooperation)
  const AdinkraCooperation = ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="8" cy="8" r="4" />
      <circle cx="16" cy="16" r="4" />
      <path d="M11 9l2 2M9 11l2 2M13 15l2-2M15 13l-2 2" />
      <path d="M8 12v4M16 8v4M12 8h4M8 16h4" />
    </svg>
  );

  // Adinkra Mate Masie (what I hear I keep - wisdom and knowledge)
  const AdinkraWisdom = ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "0597720842",
      href: "tel:+233597720842",
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
      description: "Available for calls during business hours",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ansulordina@amail.com",
      href: "mailto:ansulordina@amail.com",
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-500/10",
      hoverBg: "hover:bg-emerald-500/20",
      description: "Preferred for detailed inquiries",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sekondi-Takoradi, Ghana",
      href: null,
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-500/10",
      hoverBg: "hover:bg-purple-500/20",
      description: "Western Region, Ghana",
    },
  ];

  const consultationAreas = [
    "Procurement Strategy & Planning",
    "Supply Chain Optimization",
    "Vendor Management Solutions",
    "Contract Negotiation Support",
    "Logistics Coordination",
    "Regulatory Compliance Guidance",
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative overflow-hidden">
      {/* Decorative Adinkra backgrounds */}
      <div className="absolute top-20 left-10 opacity-[0.02] pointer-events-none">
        <AdinkraCooperation className="w-96 h-96" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.02] pointer-events-none">
        <AdinkraWisdom className="w-80 h-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-primary/5 backdrop-blur-sm rounded-full border border-primary/10">
              <AdinkraCooperation className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Let's Connect</span>
              <AdinkraWisdom className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your supply chain or discuss procurement strategies? Let's collaborate and drive results together. 
              <span className="block mt-2 text-primary/80 font-medium italic">
                "Dwannimmen (Ram’s Horns)" - Greatness exists in humility.
              </span>
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label}
                className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-8 text-center relative">
                  <div className="relative inline-block mb-6">
                    <div className={`p-5 ${method.bgColor} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                    </div>
                    <div className="absolute -bottom-2 -right-2">
                      <AdinkraCooperation className={`w-6 h-6 ${method.iconColor} opacity-30`} />
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                    {method.label}
                  </h3>
                  
                  {method.href ? (
                    <a 
                      href={method.href}
                      className={`block text-lg font-bold text-card-foreground group-hover:bg-gradient-to-r ${method.color} group-hover:bg-clip-text group-hover:text-transparent transition-all mb-2`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-card-foreground mb-2">{method.value}</p>
                  )}
                  
                  <p className="text-xs text-muted-foreground">
                    {method.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-2 right-2 opacity-5">
                    <AdinkraWisdom className="w-12 h-12" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CTA Card */}
          <Card className="border-none shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground animate-fade-in mb-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            
            <CardContent className="p-10 sm:p-12 lg:p-16 text-center relative">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <AdinkraCooperation className="w-10 h-10 text-white" />
                  <h3 className="text-3xl sm:text-4xl font-bold">
                    Ready to Collaborate?
                  </h3>
                </div>
                
                <p className="text-primary-foreground/95 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Whether you need expertise in strategic procurement, supply chain optimization, vendor management, 
                  or regulatory compliance, I'm here to help drive measurable results for your organization.
                </p>

                {/* Consultation Areas */}
                <div className="mb-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <h4 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Consultation Areas
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {consultationAreas.map((area, index) => (
                      <div 
                        key={area}
                        className="flex items-center gap-2 p-3 bg-white/10 rounded-lg text-left hover:bg-white/20 transition-all hover:scale-105"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-white hover:bg-white/90 text-primary shadow-2xl hover:shadow-white/20 transition-all hover:scale-105 font-bold px-10 py-7 text-lg group"
                    onClick={() => window.location.href = 'mailto:ansulordina@amail.com'}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Email
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/60 font-bold px-10 py-7 text-lg transition-all hover:scale-105 group"
                    onClick={() => window.location.href = 'tel:+233597720842'}
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Call Now
                  </Button>
                  
                </div>

                {/* Response time badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium">Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 opacity-10">
                <AdinkraCooperation className="w-16 h-16" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <AdinkraWisdom className="w-16 h-16" />
              </div>
            </CardContent>
          </Card>

          {/* Professional Promise */}
          <Card className="border-none shadow-xl bg-card animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
                <div className="flex-shrink-0">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl">
                    <AdinkraCooperation className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-card-foreground mb-3 flex items-center justify-center lg:justify-start gap-2">
                    <span>My Commitment to You</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Every engagement is built on trust, transparency, and mutual benefit. I bring dedication to excellence, 
                    deep industry knowledge, and a collaborative approach to every project. Together, we'll achieve 
                    sustainable improvements in your supply chain operations.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <AdinkraWisdom className="w-4 h-4" />
                      <span className="font-semibold">Professional Excellence</span>
                    </div>
                    <div className="w-px h-4 bg-border hidden sm:block" />
                    <div className="flex items-center gap-2 text-secondary">
                      <AdinkraCooperation className="w-4 h-4" />
                      <span className="font-semibold">Collaborative Partnership</span>
                    </div>
                    <div className="w-px h-4 bg-border hidden sm:block" />
                    <div className="flex items-center gap-2 text-accent">
                      <AdinkraWisdom className="w-4 h-4" />
                      <span className="font-semibold">Measurable Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cultural Footer */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20">
              <AdinkraCooperation className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground italic">
                <span className="font-semibold text-card-foreground">Boa Me Na Me Mmoa Wo</span> - Together we succeed
              </p>
              <AdinkraWisdom className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;