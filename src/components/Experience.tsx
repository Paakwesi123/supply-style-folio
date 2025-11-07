import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

// Adinkra icons for decoration (consistent with your Contact section)
const AdinkraCooperation = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <circle cx="8" cy="8" r="4" />
    <circle cx="16" cy="16" r="4" />
    <path d="M11 9l2 2M9 11l2 2M13 15l2-2M15 13l-2 2" />
    <path d="M8 12v4M16 8v4M12 8h4M8 16h4" />
  </svg>
);

const AdinkraWisdom = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const experiences = [
  {
    company: "Lands Commission",
    role: "Procurement & Supply Chain Officer",
    location: "Sekondi, Ghana",
    period: "Jan 2023 – Present",
    details: [
      "Managed procurement and supply chain operations in compliance with public sector regulations.",
      "Developed vendor relationships and negotiated contracts to ensure cost efficiency.",
      "Implemented strategic sourcing initiatives aligned with organizational objectives.",
    ],
  },
  {
    company: "Ghana Ports & Harbours Authority (Internship)",
    role: "Supply Chain Intern",
    location: "Takoradi, Ghana",
    period: "Jun 2022 – Sep 2022",
    details: [
      "Supported procurement documentation and vendor performance tracking.",
      "Assisted in coordinating inbound logistics and inventory reporting.",
      "Collaborated with senior officers to streamline material request processes.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/40 relative overflow-hidden"
    >
      {/* Decorative background Adinkra icons */}
      <div className="absolute top-20 left-10 opacity-[0.02] pointer-events-none">
        <AdinkraCooperation className="w-96 h-96" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.02] pointer-events-none">
        <AdinkraWisdom className="w-80 h-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-primary/5 rounded-full border border-primary/10 backdrop-blur-sm">
            <AdinkraCooperation className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Experience
            </span>
            <AdinkraWisdom className="w-5 h-5 text-primary" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A record of growth, collaboration, and results — driving excellence
            across procurement and supply chain management.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 md:ml-12"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute -left-6 top-10 items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary shadow-md" />

              <Card className="border-none shadow-xl hover:shadow-2xl bg-card transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity`}
                />
                <CardContent className="p-8 relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-semibold text-sm">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative element */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <AdinkraWisdom className="w-10 h-10" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20">
            <AdinkraCooperation className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground italic">
              <span className="font-semibold text-card-foreground">
                “Nkabom” — Unity in Purpose
              </span>
            </p>
            <AdinkraWisdom className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
