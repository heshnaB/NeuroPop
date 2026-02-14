import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { User, Flag, Clock, Zap, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import RosePetals from "@/components/RosePetals";

const DaterArena = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(134); // 2:14

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <RosePetals count={8} />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border/30">
          <span className="font-display font-bold text-foreground cursor-pointer" onClick={() => navigate("/")}>
            🌹 Roses are <span className="text-gradient-rose">RED FLAGS</span>
          </span>
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>LIVE</span>
            </div>
            <span>Round 1 of 1</span>
          </div>
        </header>

        {/* Timer */}
        <div className="flex justify-center py-4">
          <motion.div
            className="gradient-rose text-primary-foreground font-display font-black text-4xl px-8 py-3 rounded-full"
            animate={{ scale: seconds <= 10 ? [1, 1.05, 1] : 1 }}
            transition={{ repeat: seconds <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            {mins}:{secs.toString().padStart(2, "0")}
          </motion.div>
        </div>

        {/* Main area */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 px-6 pb-6">
          {/* Video feeds */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Player tags */}
            <div className="flex items-center gap-3 col-span-2">
              <span className="gradient-rose text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">PLAYER 1</span>
              <span className="glass text-xs font-bold px-3 py-1 rounded-full text-muted-foreground">CHAOS STARTER</span>
            </div>

            {/* You */}
            <div className="glass-rose rounded-xl flex flex-col items-center justify-center aspect-video gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary" size={32} />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-foreground">PLAYER 1</p>
                <p className="text-xs text-muted-foreground font-body">@username101</p>
              </div>
            </div>

            {/* Stranger */}
            <div className="glass-rose rounded-xl flex flex-col items-center justify-center aspect-video gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary" size={32} />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-foreground">PLAYER 2</p>
                <p className="text-xs text-muted-foreground font-body">@random_fox92</p>
              </div>
            </div>

            {/* Yapper Meter & Vibe Check */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4">
                <p className="text-xs font-body text-muted-foreground mb-2 uppercase tracking-wider">Yapper Meter</p>
                <Progress value={67} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1 font-body">
                  <span>not talkative</span>
                  <span>67%</span>
                  <span>yapping</span>
                </div>
              </div>
              <div className="glass rounded-lg p-4">
                <p className="text-xs font-body text-muted-foreground mb-2 uppercase tracking-wider">Vibe Check</p>
                <Slider defaultValue={[65]} max={100} step={1} className="mt-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1 font-body">
                  <span>cringing hard</span>
                  <span>smooth sailing</span>
                </div>
              </div>
            </div>
          </div>

        
        </div>

        {/* War Room */}
        <div className="border-t border-border/30 px-4 lg:px-6 py-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">👀</span>
              <h3 className="text-xs font-body text-muted-foreground uppercase tracking-widest font-bold">
                SPECTATOR WAR ROOM — 12 WATCHING
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Flag, title: "RED FLAG AMPLIFIER", sub: "Proceed with caution...", color: "text-primary" },
                { icon: AlertTriangle, title: "ABORT!!!", sub: "Report/block user.", color: "text-destructive" },
                { icon: Clock, title: "ONE MORE ROUND?", sub: "Add an extra turn to the date.", color: "text-accent" },
                { icon: Zap, title: "VETO DATE", sub: "Nuclear option — end it all.", color: "text-arena-gold" },
              ].map((card) => (
                <motion.button
                  key={card.title}
                  className="glass rounded-xl p-4 text-left border border-transparent hover:border-primary/60 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toast({ title: `⚡ ${card.title}`, description: "Signal sent to the arena!" })}
                >
                  <card.icon className={`${card.color} mb-2 group-hover:drop-shadow-[0_0_8px_hsl(340,85%,60%)]`} size={20} />
                  <p className="font-display font-bold text-foreground text-sm leading-tight">{card.title}</p>
                  <p className="text-[11px] text-muted-foreground font-body mt-1">{card.sub}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaterArena;
