import React from "react";
import { motion } from "framer-motion";
import { Battery, Clock, Shield, Zap, ArrowRight, Info } from "lucide-react";

function ProductGrid({ products }) {
  // Animation for empty state
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-zinc-800/30 p-8 rounded-lg border border-zinc-700 flex flex-col items-center justify-center text-center h-96"
      >
        <Info className="w-12 h-12 text-sky-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
        <p className="text-gray-400 max-w-md">
          We couldn't find any products matching your current filters. Try adjusting your filter criteria.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-700 flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="h-48 overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            product.category === 'ups' ? 'bg-sky-500/80' : 
            product.category === 'battery' ? 'bg-emerald-500/80' : 'bg-amber-500/80'
          }`}>
            {product.category === 'ups' ? 'UPS System' : 
             product.category === 'battery' ? 'Battery' : 'Accessory'}
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{product.description}</p>
        
        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="text-sky-400 mt-0.5">
                {feature.includes('power') || feature.includes('Power') ? (
                  <Zap className="w-4 h-4" />
                ) : feature.includes('backup') || feature.includes('time') ? (
                  <Clock className="w-4 h-4" />
                ) : feature.includes('protection') || feature.includes('safe') ? (
                  <Shield className="w-4 h-4" />
                ) : (
                  <Battery className="w-4 h-4" />
                )}
              </span>
              <p className="text-xs text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
        
        {/* Applications */}
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
        
        {/* Price & CTA */}
        <div className="flex justify-between items-center mt-auto">
          <div>
            <span className="text-sky-400 text-lg font-bold">${product.price}</span>
          </div>
          <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 transition-colors rounded-md text-white text-sm font-medium flex items-center gap-1">
            Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductGrid;