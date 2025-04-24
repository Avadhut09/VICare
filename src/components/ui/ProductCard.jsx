// src/components/Products/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-neutral-800/70 rounded-xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 border border-neutral-700"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageUrl || "/placeholder.svg"} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-neutral-300 mb-4 flex-grow">{product.description}</p>
        
        {/* Applications/Use Cases */}
        {product.useCases && product.useCases.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Applications</h4>
            <div className="flex flex-wrap gap-1">
              {product.useCases.map((useCase, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-zinc-700 px-2 py-1 rounded"
                >
                  {useCase === 'home' ? 'Home' : 
                   useCase === 'small-business' ? 'Small Business' :
                   useCase === 'enterprise' ? 'Enterprise' :
                   useCase === 'data-center' ? 'Data Center' :
                   useCase === 'industrial' ? 'Industrial' : 
                   useCase === 'medical' ? 'Medical' : useCase}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Product Category and Price */}
        <div className="flex justify-between items-center">
          <span className="text-sm py-1 px-3 bg-teal-900/40 rounded-full text-teal-300">
            {product.category === 'ups' ? 'UPS System' : 
             product.category === 'battery' ? 'Battery' : 
             product.category === 'accessory' ? 'Accessory' : product.category}
          </span>
          {product.price && (
            <span className="font-semibold">${product.price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;