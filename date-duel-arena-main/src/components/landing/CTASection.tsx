import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl sm:text-6xl font-display font-black mb-6">
          Ready to Get <span className="text-gradient-rose">Roasted?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 font-body">
          Your friends are already in the spectator seats. Don't keep them waiting.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-12 py-7 rounded-full">
          <Swords className="mr-2 !size-5" />
          Enter the Arena Now
        </Button>
        <p className="text-muted-foreground text-sm mt-6 font-body">
          Ages 19-27 only · Free to play · No screenshots allowed
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
