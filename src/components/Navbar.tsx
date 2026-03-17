import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-ink/5"
    >
      <div className="flex items-center gap-8">
        <button className="p-2 hover:text-luxury-gold transition-colors">
          <Menu size={20} strokeWidth={1.5} />
        </button>
        <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-muted">
          <a href="#" className="hover:text-luxury-ink transition-colors">Collection</a>
          <a href="#" className="hover:text-luxury-ink transition-colors">Our Story</a>
          <a href="#" className="hover:text-luxury-ink transition-colors">Boutiques</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-3xl font-serif tracking-widest uppercase">Mocko</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:text-luxury-gold transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button className="p-2 hover:text-luxury-gold transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className="p-2 hover:text-luxury-gold transition-colors relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-luxury-gold rounded-full"></span>
        </button>
      </div>
    </motion.nav>
  );
}
