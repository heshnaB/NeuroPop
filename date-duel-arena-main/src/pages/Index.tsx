import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";
import RosePetals from "@/components/RosePetals";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <RosePetals count={18} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.p
            className="text-primary font-body font-medium tracking-[0.3em] uppercase text-sm mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Dating Arena Awaits
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-foreground">Roses are</span>
            <br />
            <span className="text-gradient-rose glow-text inline-block mt-2">RED FLAGS</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            3 minutes. 1 stranger. An AI referee. Your friends watching.
            <br />
            <span className="text-rose-soft italic">Welcome to the most unhinged dating show on the internet.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-10 py-6 rounded-full"
              onClick={() => navigate("/how-it-works")}
            >
              <Heart className="mr-2 !size-5" />
              READY TO DATE?
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-lg px-10 py-6 rounded-full"
              onClick={() => navigate("/spectator-protocol")}
            >
              <Eye className="mr-2 !size-5" />
              Spectate a Date
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-8 text-muted-foreground text-sm font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>2,847 live now</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>127 dates in progress</span>
            <div className="h-4 w-px bg-border" />
            <span>Ages 19-27 only</span>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm font-body">
          <span className="font-display font-bold text-foreground">
            🌹 Roses are <span className="text-gradient-rose">RED FLAGS</span>
          </span>
          <span>© 2026 · The Arena · Ages 19-27 Only</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
