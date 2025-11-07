import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-supply-chain.jpg";
import supplyChainVideo from "@/assets/logistics.webm";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Supply chain network visualization"
          className="w-full h-full object-cover transition-transform duration-[5000ms] ease-out"
          style={{ transform: `scale(${1.05 + scrollProgress * 0.03})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-secondary/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      {/* Video Animation Overlay */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-4xl h-auto mix-blend-soft-light transition-all duration-700 ease-out"
          style={{
            transform: `scale(${1 + scrollProgress * 0.15})`,
            opacity: 0.4 - scrollProgress * 0.15,
            filter: 'blur(0px) brightness(1.2) contrast(0.9)',
          }}
        >
          <source src={supplyChainVideo} type="video/webm" />
        </video>
      </div>

      {/* Animated Delivery Track */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Lines that converge into a road */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent/20 rounded-full transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${scrollProgress * 150}px, ${scrollProgress * 200}px) scale(${1 - scrollProgress * 0.8})`,
            opacity: 1 - scrollProgress * 0.5,
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-secondary/30 rounded-full transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${scrollProgress * -100}px, ${scrollProgress * 150}px) scale(${1 - scrollProgress * 0.8})`,
            opacity: 1 - scrollProgress * 0.5,
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-accent/15 rounded-full transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${scrollProgress * 100}px, ${scrollProgress * -100}px) scale(${1 - scrollProgress * 0.8})`,
            opacity: 1 - scrollProgress * 0.5,
          }}
        />

        {/* Road track that appears on scroll */}
        <div 
          className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-full transition-all duration-1000 ease-out"
          style={{
            opacity: scrollProgress,
            transform: `translateX(-50%) scale(${0.5 + scrollProgress * 0.5})`,
          }}
        >
          {/* Road base */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/20 to-accent/10 rounded-full blur-2xl" />
          
          {/* Road lines */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-accent/60 to-transparent animate-road-line"
              style={{ animationPlayState: scrollProgress > 0.3 ? 'running' : 'paused' }}
            />
          </div>

          {/* Moving delivery packages */}
          {scrollProgress > 0.3 && (
            <>
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-accent/60 rounded animate-delivery-move-1 shadow-lg" />
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary/50 rounded animate-delivery-move-2 shadow-lg" />
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-accent/40 rounded animate-delivery-move-3 shadow-lg" />
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg animate-fade-in">
            <p className="text-white font-semibold text-sm tracking-wide">✦ Supply Chain & Procurement Expert</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ansu Ama<br />
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent">
              Lordina
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-10 max-w-3xl leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Optimizing supply chains and driving cost-effective procurement strategies across organizations
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 mb-10 text-white/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="tel:0597720842" className="flex items-center gap-2.5 hover:text-accent transition-all hover:scale-105 group">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-accent/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">0597720842</span>
            </a>
            <a href="mailto:ansulordina@amail.com" className="flex items-center gap-2.5 hover:text-accent transition-all hover:scale-105 group">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">ansulordina@amail.com</span>
            </a>
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">Sekondi-Takoradi, Ghana</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/60 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-2 h-3 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;