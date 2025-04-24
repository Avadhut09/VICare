import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../constants/product";

const InfiniteMovingCards = ({ items, direction = "left", speed = "medium" }) => {
  // Convert speed string to actual duration values
  const speedValues = {
    slow: 60,
    medium: 40, 
    fast: 20
  };
  
  const duration = speedValues[speed] || speedValues.medium;
  
  return (
    <div className="relative overflow-hidden w-full py-10">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-zinc-900 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-zinc-900 to-transparent"></div>
      
      {/* First moving container */}
      <motion.div
        initial={{ x: direction === "right" ? "-100%" : "0%" }}
        animate={{ x: direction === "right" ? "0%" : "-100%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex gap-4 w-max"
      >
        {items.map((product, idx) => (
          <ProductCard key={`${product.id}-${idx}`} product={product} />
        ))}
        {items.map((product, idx) => (
          <ProductCard key={`${product.id}-repeat-${idx}`} product={product} />
        ))}
      </motion.div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex flex-col w-[280px] h-[360px] bg-zinc-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20"
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-zinc-300 mb-3 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sky-400 font-medium">{product.price}</span>
          <Link 
            to={`/products#product-${product.id}`} 
            className="flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-100"
          >
            View details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductShowcase() {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured) || products.slice(0, 6);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Power Solutions for Every Need
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-300">
            Discover our complete lineup of innovative power protection products
          </p>
        </motion.div>
        
        {/* Continuous scrolling products */}
        <InfiniteMovingCards items={products} direction="left" speed="slow" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-md flex items-center gap-2 mx-auto"
            >
              Explore Full Catalogue
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
