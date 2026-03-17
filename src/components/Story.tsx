import { motion } from "motion/react";

export function Story() {
  return (
    <section className="py-32 bg-luxury-bg overflow-hidden">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[100px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop" 
              alt="Brand Story" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-12 -right-12 w-48 h-48 bg-luxury-gold p-8 rounded-full flex items-center justify-center text-center shadow-xl"
          >
            <span className="text-white text-sm font-serif italic leading-tight">
              "Crafted with passion since 1994"
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-luxury-muted mb-6 block font-medium">
            Our Heritage
          </span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8 tracking-tight">
            A Legacy of <br />
            <span className="italic text-luxury-gold">Excellence</span>
          </h2>
          <div className="space-y-6 text-lg text-luxury-muted leading-relaxed font-light">
            <p>
              Founded in the heart of Grasse, the world's perfume capital, Mocko was born from a desire to redefine luxury through olfactory storytelling.
            </p>
            <p>
              Every bottle is a testament to our commitment to quality, using only the most precious raw materials and traditional extraction methods that have been passed down through generations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-luxury-ink/10 pt-12">
            <div>
              <span className="text-3xl font-serif block mb-1">120+</span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Ingredients</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1">28</span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Years</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1">15</span>
              <span className="text-[10px] uppercase tracking-widest text-luxury-muted">Boutiques</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
