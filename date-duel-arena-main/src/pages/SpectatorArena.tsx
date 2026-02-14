import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { User, Flag, Smile, AlertTriangle, Bell, Volume2, HelpCircle, ShieldCheck, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import RosePetals from "@/components/RosePetals";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const liveFeed = [
  { icon: Flag, text: 'Stranger gave a compliment! Rating: +12 love', time: '0:42' },
  { icon: AlertTriangle, text: 'Host: "Hey! Don\'t be so shy, give us some banter!"', time: '0:35' },
  { icon: Flag, text: 'Stranger gave a compliment! Rating: +12 love', time: '0:28' },
  { icon: Smile, text: 'Someone checked their phone under the table — suspicious', time: '0:22' },
  { icon: AlertTriangle, text: '"manifesting" used three times — cringe alert', time: '0:14' },
  { icon: Flag, text: 'Contestant used a BAD pickup line... -5 love', time: '0:08' },
];

const sabotageCards = [
  { icon: Bell, title: "Ping the Bell", sub: "Ding ding! Distract them.", color: "text-primary" },
  { icon: Volume2, title: "Chaos Sounds", sub: "Play random sound effects.", color: "text-accent" },
  { icon: HelpCircle, title: "Spicy Question", sub: "Force an awkward question.", color: "text-arena-gold" },
  { icon: ShieldCheck, title: "Love Shield", sub: "Protect from the next flag.", color: "text-primary" },
];

const mockChat = [
  { user: "dating_expert", msg: "THE DATE is going surprisingly well lol", time: "1:42" },
  { user: "lol_therapist_", msg: "I feel like they can barely talk 🤣", time: "1:38" },
  { user: "karen_is_here", msg: "Are they actually into each other tho?!", time: "1:35" },
  { user: "dating_expert", msg: "THE DATE is going surprisingly well lol", time: "1:30" },
  { user: "vibecheck101", msg: "They are actually cute together tbh?!", time: "1:22" },
];

const SpectatorArena = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(134);
  const [vibeValue, setVibeValue] = useState([50]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const handleSabotage = (title: string) => {
    toast({ title: `⚡ ${title}`, description: "Signal sent to the arena!" });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <RosePetals count={6} />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-border/30">
          <span
            className="font-display font-bold text-foreground cursor-pointer text-sm"
            onClick={() => navigate("/")}
          >
            🌹 Roses are <span className="text-gradient-rose">Red</span> (FLAGS)
          </span>
          <div className="flex items-center gap-4 text-sm font-body">
            <span className="text-muted-foreground">8,292 watching</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse-glow" />
              <span className="text-destructive font-bold">LIVE</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col lg:flex-row gap-0">
          {/* Left: The Date */}
          <div className="flex-1 flex flex-col p-4 lg:p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse-glow" />
                <span className="text-xs font-bold font-body text-destructive uppercase">THE DATE</span>
              </div>
              <span className="text-xs text-muted-foreground font-body">Referee Active</span>
            </div>

            {/* Timer */}
            <div className="flex justify-center mb-4">
              <motion.span
                className="text-4xl sm:text-5xl font-display font-black text-primary glow-text tabular-nums"
                key={seconds}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15 }}
              >
                {mins}:{secs.toString().padStart(2, "0")}
              </motion.span>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Player 1 */}
              <div className="relative bg-muted/40 rounded-xl flex flex-col items-center justify-center aspect-video gap-2 border border-border/30">
                <motion.div
                  className="absolute top-2 right-2 flex items-center gap-1 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Flag size={10} /> FLAG × 1
                </motion.div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="text-primary" size={28} />
                </div>
                <p className="font-display font-bold text-foreground text-sm">You</p>
                <p className="text-[11px] text-muted-foreground font-body">looking_cool_today</p>
              </div>

              {/* Player 2 */}
              <div className="relative bg-muted/40 rounded-xl flex flex-col items-center justify-center aspect-video gap-2 border border-border/30">
                <motion.div
                  className="absolute top-2 right-2 flex items-center gap-1 bg-accent/90 text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <Smile size={10} /> CRINGE
                </motion.div>
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="text-accent" size={28} />
                </div>
                <p className="font-display font-bold text-foreground text-sm">The Stranger</p>
                <p className="text-[11px] text-muted-foreground font-body">GLADIATOR_ROSE2077</p>
              </div>
            </div>

            {/* Vibe Check */}
            <div className="glass rounded-lg px-4 py-3 mb-3">
              <div className="flex items-center justify-between text-xs font-body text-muted-foreground mb-2">
                <span>😬 Cringing Hard</span>
                <span className="uppercase font-bold tracking-wider text-foreground">Vibe Check</span>
                <span>Smooth Sailing 😎</span>
              </div>
              <Slider
                value={vibeValue}
                onValueChange={setVibeValue}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
            </div>

            {/* Yapper Meters */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-lg px-4 py-3">
                <div className="flex items-center justify-between text-xs font-body text-muted-foreground mb-1">
                  <span className="uppercase font-bold tracking-wider">Yapper Meter</span>
                  <span className="text-primary font-bold">42%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full gradient-rose" style={{ width: "42%" }} />
                </div>
              </div>
              <div className="glass rounded-lg px-4 py-3">
                <div className="flex items-center justify-between text-xs font-body text-muted-foreground mb-1">
                  <span className="uppercase font-bold tracking-wider">Yapper Meter</span>
                  <span className="text-accent font-bold">28%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-accent" style={{ width: "28%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Control Room */}
          <div className="w-full lg:w-[380px] border-l border-border/30 flex flex-col bg-card/30">
            <div className="px-4 py-3 border-b border-border/30">
              <h2 className="font-display font-bold text-foreground text-sm">CONTROL ROOM</h2>
            </div>

            {/* Live Updates */}
            <div className="px-4 py-3 border-b border-border/30 flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs">👁️</span>
                <h3 className="text-xs font-body text-muted-foreground uppercase tracking-widest font-bold">
                  LIVE UPDATES
                </h3>
              </div>
              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                {liveFeed.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 text-xs font-body"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <span className="text-primary font-bold shrink-0">▸</span>
                    <span className="text-muted-foreground flex-1 leading-snug">
                      <span className="text-primary font-semibold">System</span> {item.text}
                    </span>
                    <span className="text-muted-foreground/50 shrink-0">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sabotage Deck */}
            <div className="px-4 py-3 border-b border-border/30 flex-shrink-0">
              <h3 className="text-xs font-body text-destructive uppercase tracking-widest font-bold mb-3">
                SABOTAGE DECK
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sabotageCards.map((card) => (
                  <motion.button
                    key={card.title}
                    className="glass rounded-lg p-3 text-left border border-transparent hover:border-primary/60 transition-all group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSabotage(card.title)}
                  >
                    <card.icon className={`${card.color} mb-1.5 group-hover:drop-shadow-[0_0_8px_hsl(340,85%,60%)]`} size={18} />
                    <p className="font-display font-bold text-foreground text-xs leading-tight">{card.title}</p>
                    <p className="text-[10px] text-muted-foreground font-body mt-0.5">{card.sub}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Spectator Chat */}
            <div className="flex flex-col flex-1 min-h-0">
              <div className="px-4 py-2 border-b border-border/30">
                <h3 className="text-xs font-body text-muted-foreground uppercase tracking-widest font-bold">
                  👀 SPECTATOR CHAT
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-[200px]">
                {mockChat.map((msg, i) => (
                  <div key={i} className="text-xs font-body">
                    <span className="text-primary font-semibold">{msg.user}</span>
                    <span className="text-muted-foreground/50 ml-1">{msg.time}</span>
                    <p className="text-muted-foreground leading-snug">{msg.msg}</p>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <div className="px-4 py-3 border-t border-border/30 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Send a message..."
                  className="flex-1 bg-muted/50 border border-border/50 rounded-lg px-3 py-2 text-xs font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && chatInput.trim()) {
                      toast({ title: "💬 Chat", description: chatInput });
                      setChatInput("");
                    }
                  }}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="shrink-0 text-primary hover:text-primary"
                  onClick={() => {
                    if (chatInput.trim()) {
                      toast({ title: "💬 Chat", description: chatInput });
                      setChatInput("");
                    }
                  }}
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="text-center py-3 border-t border-border/30">
          <p className="font-display font-bold text-sm text-foreground">
            ROSES ARE <span className="text-gradient-rose">RED (FLAGS)</span>
          </p>
          <p className="text-[11px] text-muted-foreground font-body">
            Dating is dead. Long live the arena. 🌹 © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpectatorArena;
