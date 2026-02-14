import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Timer, Bot, Users, Bomb, Swords, Trophy } from "lucide-react";
import RosePetals from "@/components/RosePetals";

const features = [
  {
    icon: Timer,
    title: "3-Minute Dates",
    description: "A dramatic countdown. One chance to impress — or crash and burn. Every second matters.",
  },
  {
    icon: Bot,
    title: "AI Referee",
    description: "Our AI host monitors in real-time, calling out red flags, cringe moments, and smooth moves.",
  },
  {
    icon: Users,
    title: "Friend Spectating",
    description: "Invite your friend to watch. They can see the date, judge the vibe, and spectate live.",
  },
  {
    icon: Bomb,
    title: "Sabotage Tools",
    description: "Spectators can trigger chaos: embarrassing questions, sound effects, and wild disruptions.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Climb the ranks as a smooth operator or wear your red flags proudly. Achievements & badges included.",
  },
  {
    icon: Swords,
    title: "Safe & Private",
    description: "No screenshots, no recordings. Your embarrassing moments live only in the arena and in memory.",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <RosePetals count={12} />

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <motion.h1
          className="text-4xl sm:text-6xl font-display font-black text-center mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How the <span className="text-gradient-rose">Arena</span> Works
        </motion.h1>

        <motion.p
          className="text-muted-foreground font-body text-center mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          It's speed dating meets gladiator combat, with an AI judge and your worst friends.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-rose rounded-xl p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center">
                <f.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-12 py-7 rounded-full"
            onClick={() => navigate("/choose-battle")}
          >
            <Swords className="mr-2 !size-5" />
            Continue
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

export default HowItWorks;
