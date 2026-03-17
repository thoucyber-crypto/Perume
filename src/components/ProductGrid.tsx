import { products } from "@/src/data/products";
import { ProductCard } from "./ProductCard";
import { motion } from "motion/react";

export function ProductGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-luxury-muted mb-4 block font-medium">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
              Our <span className="italic">Collection</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-muted"
          >
            <button className="text-luxury-ink border-b border-luxury-ink pb-1">All</button>
            <button className="hover:text-luxury-ink transition-colors pb-1">Woody</button>
            <button className="hover:text-luxury-ink transition-colors pb-1">Floral</button>
            <button className="hover:text-luxury-ink transition-colors pb-1">Fresh</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex justify-center"
        >
          <button className="px-12 py-4 border border-luxury-ink/10 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-luxury-ink hover:text-white transition-all duration-500">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
