import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Featured() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-23%"]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[130%] w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000&auto=format&fit=crop" 
          alt="Featured Fragrance" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="container mx-auto px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[11px] uppercase tracking-[0.5em] mb-8 block font-medium text-white/60">
            Limited Edition
          </span>
          <h2 className="text-6xl md:text-9xl font-serif mb-12 tracking-tight">
            The New Standard <br />
            <span className="italic text-luxury-gold">of Luxury</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#FFFFFF" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-12 py-5 bg-white text-luxury-ink rounded-full text-sm font-medium tracking-widest uppercase shadow-xl"
          >
            Shop the Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
