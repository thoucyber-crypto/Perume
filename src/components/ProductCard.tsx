import { motion } from "motion/react";
import { Product } from "@/src/data/products";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ 
        rotate: index % 2 === 0 ? 1 : -1, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-luxury-ink/5 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-125"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-luxury-ink/0 group-hover:bg-luxury-ink/25 transition-colors duration-700 ease-in-out" />
        
        {/* Prominent Add to Cart Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button 
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: "#C5A059", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-8 py-4 bg-white text-luxury-ink rounded-full flex items-center gap-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) z-10 shadow-2xl"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Add to Cart</span>
          </motion.button>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-medium rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-serif mb-1 group-hover:text-luxury-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex gap-2">
            {product.notes.slice(0, 2).map((note) => (
              <span key={note} className="text-[10px] text-luxury-muted uppercase tracking-wider">
                {note}
              </span>
            ))}
          </div>
        </div>
        <span className="text-lg font-medium">${product.price}</span>
      </div>
    </motion.div>
  );
}
