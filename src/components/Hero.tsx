import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="z-10"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-luxury-muted mb-6 block font-medium">
            New Collection 2026
          </span>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-8 tracking-tight">
            The Art of <br />
            <span className="italic text-luxury-gold">Essence</span>
          </h1>
          <p className="max-w-md text-luxury-muted text-lg leading-relaxed mb-10 font-light">
            Discover our curated collection of rare fragrances, crafted with the finest ingredients from around the globe.
          </p>
          <div className="flex items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#FFFFFF" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group flex items-center gap-3 px-10 py-4 bg-luxury-ink text-white rounded-full transition-all"
            >
              <span className="text-sm font-medium tracking-wide">Explore Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ color: "#C5A059" }}
              className="text-sm font-medium tracking-widest uppercase border-b border-luxury-ink/20 pb-1 transition-colors"
            >
              Our Process
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 1.1, opacity: 0, rotate: 5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative aspect-[3/4] lg:aspect-square"
        >
          <div className="absolute inset-0 bg-luxury-gold/5 rounded-[100px] -rotate-6 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Perfume Bottle" 
            className="w-full h-full object-cover rounded-[100px] shadow-2xl z-10 relative"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex flex-col h-full justify-between">
              <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Top Note</span>
              <span className="text-xl font-serif">Saffron & Oud</span>
              <div className="w-full h-1 bg-luxury-gold/20 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-luxury-gold"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-muted">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-luxury-ink/20 to-transparent"></div>
      </div>
    </section>
  );
}
