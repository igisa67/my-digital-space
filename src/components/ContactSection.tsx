import { useState } from "react";
import { Mail, MapPin, Send, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ⚠️ KORAK 1: OBAVEZNO ZAMIJENITE OVAJ URL svojim API End-pointom iz SheetDB-a
const SheetDB_API_URL = "https://sheetdb.io/api/v1/1t3hp4xhrs3mq"; 

const ContactSection = () => {
  const { toast } = useToast();
  // AŽURIRANO STANJE: Ključevi se podudaraju s nazivima stupaca
  const [formData, setFormData] = useState({
    Name: "", 
    Email: "",
    "Project Details": "", // Koristimo navodnike zbog razmaka u imenu
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(SheetDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData 
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us.",
        });
        // Resetiranje s novim ključevima
        setFormData({ Name: "", Email: "", "Project Details": "" });
      } else {
        console.error("SheetDB Error:", await response.json());
        toast({
          title: "Error Sending",
          description: "Provjerite SheetDB API URL i nazive stupaca.",
          // @ts-ignore
          variant: "destructive", 
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast({
        title: "Network Error",
        description: "Unable to connect to the server.",
        // @ts-ignore
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Ova funkcija automatski radi za sve ključeve
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a video project in mind? Whether it's a commercial, YouTube content, or a 
              creative piece, I'd love to hear about it and bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info - ostaje isti */}
            <div className="space-y-8">
              {/* ... (kontakt info) ... */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">igor.sokolovicc7@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Samobor, Croatia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Availability</h3>
                  <p className="text-muted-foreground">Currently accepting new projects</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  I work with brands, creators, and agencies worldwide. Remote collaboration 
                  is seamless with my established workflow. Let's discuss your next project!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name" // <-- AŽURIRANO!
                  value={formData.Name} // <-- AŽURIRANO!
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email" // <-- AŽURIRANO!
                  value={formData.Email} // <-- AŽURIRANO!
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="Project Details" // <-- AŽURIRANO! OBAVEZNO s razmakom!
                  value={formData["Project Details"]} // <-- AŽURIRANO!
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your video project, timeline, and budget..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover-lift hover:bg-primary/90 transition-all"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;