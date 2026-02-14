import { motion } from "framer-motion";
import { Clock, Zap, Flame } from "lucide-react";

const modes = [
  {
    icon: Clock,
    name: "Classic",
    time: "3 min",
    description: "The original. Three minutes to charm or crash and burn.",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    name: "Speed Round",
    time: "1 min",
    description: "Sixty seconds of pure chaos. No filter, no mercy.",
    color: "from-accent to-primary",
  },
  {
    icon: Flame,
    name: "Gauntlet",
    time: "5 dates",
    description: "Survive five dates in a row. Only legends endure the Gauntlet.",
    color: "from-primary via-accent to-primary",
  },
];

const GameModesSection = () => {
  return (
    <section className="relative py-32 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Choose Your <span className="text-gradient-gold">Battle</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Three game modes. Infinite embarrassment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.name}
              className="glass rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 gradient-rose-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${mode.color} flex items-center justify-center mx-auto mb-6 glow-primary`}>
                  <mode.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-1 text-foreground">{mode.name}</h3>
                <span className="text-primary font-bold text-sm tracking-wider uppercase">{mode.time}</span>
                <p className="text-muted-foreground mt-4 font-body">{mode.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
