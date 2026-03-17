import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Featured } from "./components/Featured";
import { Story } from "./components/Story";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <div className="relative selection:bg-luxury-gold selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <ProductGrid />
            <Featured />
            <Story />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
