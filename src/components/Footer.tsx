import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury-ink text-white py-32 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-8 block font-medium">
              Join the Circle
            </span>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight mb-12 tracking-tight">
              Stay <span className="italic text-luxury-gold">Inspired</span>
            </h2>
            <div className="relative max-w-xl mx-auto w-full group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-white/20 py-6 text-2xl font-serif focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
              />
              <motion.button 
                whileHover={{ scale: 1.1, color: "#C5A059" }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-4 transition-colors"
              >
                <ArrowRight size={32} strokeWidth={1} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-t border-white/10 pt-24">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-4xl font-serif tracking-widest uppercase mb-8">Mocko</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Crafting olfactory experiences that transcend time and space.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all duration-500">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2026 Mocko Fragrances. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
