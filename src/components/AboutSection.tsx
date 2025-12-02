import { Film, Sparkles, Clock } from "lucide-react";

const skills = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Expert in Premiere Pro, DaVinci Resolve, and Final Cut Pro. Seamless cuts, color grading, and audio mixing.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Creating stunning animations and visual effects using After Effects and Cinema 4D.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient workflow and clear communication to deliver high-quality edits on tight deadlines.",
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
                Telling stories through the art of editing
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm a professional video editor with over 2 years of experience crafting visual content 
                for brands, creators, and filmmakers. My journey began with a passion for videos
                  which evolved into a career of bringing ideas to life through video.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From YouTube content and commercials to documentaries and music videos, I've worked 
                across diverse genres. I believe great editing is invisible—it serves the story and 
                keeps audiences engaged from start to finish.
              </p>
            </div>

            {/* Right column - Skills */}
            <div className="space-y-6">
              {skills.map((skill) => (
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
