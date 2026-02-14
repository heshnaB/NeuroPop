import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ShieldCheck, ThumbsUp, Flag } from "lucide-react";
import RosePetals from "@/components/RosePetals";

const rules = [
  {
    icon: MessageCircle,
    title: "RESPECTFUL CHAT",
    description: "No harassment, hate, or bullying.",
    color: "bg-destructive/20",
  },
  {
    icon: Flag,
    title: "NO SPOILERS or LEAKS",
    description: "Don't screenshot or video share outcomes.",
    color: "bg-primary/20",
  },
  {
    icon: ThumbsUp,
    title: "POSITIVE ENGAGEMENT ONLY",
    description: "Encourage fun, kind audience reactions.",
    color: "bg-accent/20",
  },
];

const SpectatorProtocol = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden flex items-center justify-center">
      <RosePetals count={12} />

      <motion.div
        className="relative z-10 glass-rose rounded-2xl p-10 max-w-xl w-full mx-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-display font-black text-gradient-rose mb-3">
          Spectator Protocol
        </h1>
        <p className="text-muted-foreground font-body mb-8">
          Survive all 3 minutes without any of these happening:
        </p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {rules.map((r, i) => (
            <motion.div
              key={r.title}
              className="glass rounded-xl p-4 flex flex-col items-center text-center gap-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className={`w-10 h-10 rounded-lg ${r.color} flex items-center justify-center`}>
                <r.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-xs text-foreground leading-tight">{r.title}</h3>
              <p className="text-muted-foreground text-[10px] font-body leading-tight">{r.description}</p>
            </motion.div>
          ))}
        </div>

        <Button
          variant="hero"
          size="lg"
          className="text-lg px-10 py-6 rounded-full"
          onClick={() => navigate("/spectator-arena")}
        >
          <Heart className="mr-2 !size-5" />
          READY TO SPECTATE
        </Button>
      </motion.div>
    </div>
  );
};

export default SpectatorProtocol;
