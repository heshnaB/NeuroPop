import { motion } from "framer-motion";
import { useMemo } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

const RosePetals = ({ count = 20 }: { count?: number }) => {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      size: 10 + Math.random() * 16,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-primary"
          style={{ left: `${p.x}%`, top: -30, fontSize: p.size }}
          initial={{ y: -30, rotate: p.rotation, opacity: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            rotate: [p.rotation, p.rotation + 180 + Math.random() * 180],
            x: [0, (Math.random() - 0.5) * 120],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
};

export default RosePetals;
