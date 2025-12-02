import { Code2, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building scalable web applications with modern technologies like React, TypeScript, and Node.js.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive user interfaces with a focus on aesthetics and user experience.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency to deliver the best user experience.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - About text */}
            <div>
              <p className="text-primary font-medium mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Passionate about creating digital excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building web applications. 
                My journey started with a curiosity for how things work on the internet, and it has evolved 
                into a passion for creating seamless digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Right column - Skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-card border border-border rounded-xl p-6 hover-lift transition-all hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
