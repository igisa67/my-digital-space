import { X, Instagram,} from "lucide-react"; // <-- Ispravljen import

const socialLinks = [
  { icon: X, href: "https://x.com/igiedits", label: "X" }, // Novi X link
  { icon: Instagram, href: "https://www.instagram.com/igi_graphic/", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
       <div className="max-w-6xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
  © {new Date().getFullYear()} Video Editor Portfolio. All rights reserved.
  {/* Preporučujem da h6 zamijenite s div ili p tagom za bolju semantiku */}
  <div className="mt-1">Made By Igor Sokolović</div>
</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
