import { motion } from "framer-motion";
import { Timer, Bot, Users, Trophy, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "3-Minute Dates",
    description: "A dramatic countdown. One chance to impress. When the timer hits zero, you choose: keep going or abort.",
  },
  {
    icon: Bot,
    title: "AI Referee",
    description: "Our AI watches your every word, calling out red flags, cringe moments, and smooth operator moves in real-time.",
  },
  {
    icon: Users,
    title: "Friend Spectating",
    description: "Invite your friends to watch. They can sabotage your date with embarrassing questions and sound effects.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Climb the ranks as a Smooth Operator or embrace your destiny as a Red Flag Champion. Badges included.",
  },
  {
    icon: Zap,
    title: "Sabotage Tools",
    description: "Truth or dare challenges, sound effects, embarrassing questions — your friends have the power to ruin everything.",
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "No screenshots, no recordings, no sharing of personal info. Block and report anyone instantly.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            How the <span className="text-gradient-rose">Arena</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            It's speed dating meets gladiator combat, with an AI judge and your worst friends.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-rose rounded-xl p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-rose flex items-center justify-center mb-5 glow-primary group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
