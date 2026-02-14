import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swords, Timer, Zap, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import RosePetals from "@/components/RosePetals";

const modes = [
  {
    id: "classic",
    icon: Timer,
    title: "Classic",
    description: "The original. Three minutes to make it or break it. No pressure.",
  },
  {
    id: "speed",
    icon: Zap,
    title: "Speed Round",
    description: "One minute of pure chaos. Can you survive a 60-second date?",
  },
  {
    id: "gauntlet",
    icon: Flame,
    title: "Gauntlet",
    description: "Survive five dates in a row. Only legends make it through.",
  },
];

const ChooseBattle = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <RosePetals count={12} />

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.h1
          className="text-4xl sm:text-6xl font-display font-black text-center mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Choose Your <span className="text-gradient-rose">Battle</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Pick your gladiator challenge. No turning back.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
          {modes.map((m, i) => (
            <motion.div
              key={m.id}
              className={cn(
                "glass-rose rounded-xl p-8 flex flex-col items-center text-center gap-4 cursor-pointer transition-all",
                selected === m.id && "ring-2 ring-primary glow-primary"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              onClick={() => setSelected(m.id)}
            >
              <div className="w-14 h-14 rounded-full gradient-rose flex items-center justify-center">
                <m.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">{m.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{m.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-2">
            Ready to Get <span className="text-gradient-rose italic">Roasted?</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm mb-6">
            Your friends are already in the spectator seats. Don't keep them waiting.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-12 py-7 rounded-full"
            disabled={!selected}
            onClick={() => navigate("/arena")}
          >
            <Swords className="mr-2 !size-5" />
            Enter the Arena
          </Button>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-border/30 py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-muted-foreground text-sm font-body">
          <span className="font-display font-bold text-foreground text-sm cursor-pointer" onClick={() => navigate("/")}>
            🌹 Roses are <span className="text-gradient-rose">RED FLAGS</span>
          </span>
          <span>© 2026 · The Arena · Ages 19-27 Only</span>
        </div>
      </footer>
    </div>
  );
};

export default ChooseBattle;
