import { ExternalLink, Play } from "lucide-react";

// 1. ORIGINALNA LISTA PROJEKATA (Vaši 9:16 videi, pretpostavljamo da su svi Shortovi)
const featuredProjects = [
  // Zadržavamo ovaj naziv, a vi ovdje unosite svoje 9:16 linkove
  {
    title: "Brand Commercial (Short)",
    description: "A cinematic product launch video for a tech startup, featuring dynamic transitions and color grading.",
    tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
    videoUrl: "https://youtube.com/embed/pzZg5DwIuV8", // ⚠️ Koristite 9:16 linkove ovdje
  },
  {
    title: "Brand Commercial (Short)",
    description: "An energetic video with creative visual effects, smooth transitions, speed ramps, and beat-synced editing.",
    tags: ["After Effects", "VFX", "Motion Graphics"],
    videoUrl: "https://youtube.com/embed/I7me4dZF5NI", 
  },
  {
    title: "Brand Commercial (Short)",
    description: "A powerful short documentary featuring interviews, B-roll storytelling, and emotional pacing.",
    tags: ["Premiere Pro", "Sound Design", "After Effects"],
    videoUrl: "https://youtube.com/embed/vZsQmsBn_i4?",
  },

];

// 2. NOVA LISTA PROJEKATA ZA ANIMACIJE (16:9 format)
const animationProjects = [
  {
    title: "Apple Style",
    description: "Apple style is clean and highly precise, with smooth transitions. It emphasizes subtle motion and perfect timing.",
    tags: ["After Effects", "Illustrator", "Motion Graphics"],
    videoUrl: "https://www.youtube.com/embed/ZIiVieL018g", // ⚠️ Koristite 16:9 linkove ovdje
  },
  {
    title: "Documentary Edit",
    description: "Documentary editing focuses on authentic storytelling, a lot of effects that support the narrative without drawing attention to the editing.",
    tags: ["After Effects", "Vector Animation", "Blender"],
    videoUrl: "https://youtube.com/embed/Dc5Z7sDu3Vk", 
  },
  {
    title: "Iman Gadzhi Style",
    description: "Iman Gadzhi’s editing style is fast-paced and high-energy, using sound effects, and dynamic zooms to maintain constant attention.",
    tags: ["After Effects", "Blender", "3D Animation"],
    videoUrl: "https://youtube.com/embed/6yvCkqLsN2s",
  },
];

// Pomoćna komponenta za renderiranje kartice (smanjuje ponavljanje koda)
const ProjectCard = ({ project, isShort }) => {
  // Visina za 16:9 (standardna) je h-48
  // Visina za 9:16 (Shorts) je h-80
  const heightClass = isShort ? "h-80" : "h-48"; 

  return (
    <article
      key={project.title}
      className="group bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all hover:border-primary/50"
    >
      <div className={`relative overflow-hidden w-full ${heightClass}`}> 
        <iframe
          // Parametri za zvuk i kontrole
          src={`${project.videoUrl}?autoplay=0&mute=0&controls=1&modestbranding=1`} 
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover absolute top-0 left-0" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
      </div>
    </article>
  );
}


// 3. GLAVNA KOMPONENTA S OBJE SEKCIJE
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* ----- GLAVNI NASLOV SEKCIJE ----- */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">My Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent video editing work across different genres and styles. 
              Each project represents a unique story brought to life.
            </p>
          </div>

          {/* ----- PODSEKCIJA 1: REGULARNI PROJEKTI (9:16 omjer / h-80) ----- */}
          <div className="mb-20">
            <h3 className="font-display text-3xl font-bold text-foreground mb-8 border-b border-border pb-3">
                Videos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} isShort={true} />
              ))}
            </div>
          </div>
          
          {/* ----- PODSEKCIJA 2: ANIMACIJE (16:9 omjer / h-48) ----- */}
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-8 border-b border-border pb-3">
                Animations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animationProjects.map((project) => (
                <ProjectCard key={project.title} project={project} isShort={false} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;