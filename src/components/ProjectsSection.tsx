import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    title: "Brand Commercial",
    description: "A cinematic product launch video for a tech startup, featuring dynamic transitions and color grading.",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    title: "Music Video",
    description: "An energetic music video with creative visual effects, speed ramps, and beat-synced editing.",
    tags: ["DaVinci Resolve", "VFX", "Motion Graphics"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    title: "Documentary Short",
    description: "A powerful short documentary featuring interviews, B-roll storytelling, and emotional pacing.",
    tags: ["Final Cut Pro", "Sound Design", "Storytelling"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    title: "YouTube Series",
    description: "Ongoing editing for a creator with 500K+ subscribers. Engaging cuts, graphics, and thumbnails.",
    tags: ["Premiere Pro", "Photoshop", "Content Creation"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    title: "Corporate Training",
    description: "Professional training videos with clean graphics, screen recordings, and voiceover sync.",
    tags: ["After Effects", "Screen Capture", "Motion Graphics"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    title: "Event Highlight",
    description: "A fast-paced highlight reel capturing the energy and key moments of a major conference.",
    tags: ["Premiere Pro", "Multicam", "Fast Editing"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift transition-all hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>
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
                  <a
                    href={project.videoUrl}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Watch Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
