import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Truck,
  FileText,
  MessageSquare,
  Award,
  Globe,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

// Adinkra Symbols
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

const AdinkraStrength = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M3 12h18" />
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

const Skills = () => {
  const coreSkills = [
    {
      icon: Package,
      title: "Procurement Strategy & Sourcing",
      description:
        "Developing and executing sourcing strategies for optimal cost and quality balance.",
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      description:
        "Improving end-to-end logistics flow and enhancing operational visibility.",
    },
    {
      icon: FileText,
      title: "Contract & Risk Management",
      description:
        "Ensuring legal compliance and minimizing exposure through structured agreements.",
    },
    {
      icon: MessageSquare,
      title: "Stakeholder Communication",
      description:
        "Facilitating transparent, productive discussions that strengthen partnerships.",
    },
  ];

  const achievements = [
    { icon: Award, text: "Reduced Procurement Costs by 18%" },
    { icon: Award, text: "Implemented Vendor Evaluation Framework" },
    { icon: Award, text: "Enhanced Logistics Efficiency by 25%" },
  ];

  const languages = [
    { name: "English", level: "Fluent", icon: Globe },
    { name: "French", level: "Proficient", icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative overflow-hidden"
    >
      {/* Background Adinkra Icons */}
      <div className="absolute top-16 left-10 opacity-[0.03] pointer-events-none">
        <AdinkraWisdom className="w-96 h-96" />
      </div>
      <div className="absolute bottom-16 right-10 opacity-[0.03] pointer-events-none">
        <AdinkraStrength className="w-80 h-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-primary/5 backdrop-blur-sm rounded-full border border-primary/10">
              <AdinkraStrength className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Core Competencies
              </span>
              <AdinkraWisdom className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every strategy, every negotiation, and every logistics decision I make
              is rooted in knowledge, adaptability, and collaboration.{" "}
              <span className="block mt-2 text-primary/80 italic font-medium">
                “Mate Masie” — What I hear, I keep.
              </span>
            </p>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            className="grid sm:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {coreSkills.map((skill) => (
              <motion.div key={skill.title} variants={cardVariants}>
                <Card className="border-none shadow-xl hover:shadow-2xl bg-card/90 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-10 transition-opacity duration-500" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <skill.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">
                          {skill.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements & Languages */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {/* Achievements */}
            <motion.div variants={cardVariants}>
              <Card className="border-none shadow-xl bg-card/90 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      Key Achievements
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.text}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                      >
                        <Badge className="text-sm px-4 py-2 bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                          {achievement.text}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div variants={cardVariants}>
              <Card className="border-none shadow-xl bg-card/90 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      Languages
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <motion.div
                        key={lang.name}
                        className="flex items-center justify-between"
                        whileHover={{ x: 6 }}
                      >
                        <span className="font-medium text-card-foreground">
                          {lang.name}
                        </span>
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {lang.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Footer Cultural Element */}
          <motion.div
            className="mt-12 text-center"
            variants={cardVariants}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20">
              <AdinkraStrength className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground italic">
                <span className="font-semibold text-card-foreground">
                  Dwennimmen (Ram’s Horns)
                </span>{" "}
                — Strength is found in humility.
              </p>
              <AdinkraWisdom className="w-5 h-5 text-secondary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
