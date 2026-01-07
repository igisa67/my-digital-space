import analyticsImage from "@/assets/analytics-results.png";
import { TrendingUp, Users, Eye } from "lucide-react";

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            From Edits to <span className="text-gradient">Millions of Views</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I don't just edit videos — I help creators and brands explode their reach. 
            Here's what happens when professional editing meets strategic storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
            <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
            <div className="font-display text-3xl font-bold text-gradient mb-2">9.6M+</div>
            <p className="text-muted-foreground">Views Generated</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
            <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
            <div className="font-display text-3xl font-bold text-gradient mb-2">999%+</div>
            <p className="text-muted-foreground">Growth Increase</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <div className="font-display text-3xl font-bold text-gradient mb-2">2.1K+</div>
            <p className="text-muted-foreground">New Subscribers</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
          <img 
            src={analyticsImage} 
            alt="YouTube Analytics showing 9.5 million views in 90 days" 
            className="w-full h-auto"
          />
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Real results from a client channel — edited and optimized for maximum engagement
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
