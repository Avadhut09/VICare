import React from "react";
import { motion } from "framer-motion";
import { Filter, SortAsc, Activity, Zap, Building, Home, Server } from "lucide-react";

function ProductFilters({ filters, onFilterChange }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 sticky top-24"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-sky-400" />
        <h2 className="text-xl font-semibold text-white">Filters</h2>
      </motion.div>

      {/* Product Category */}
      <motion.div variants={itemVariants} className="mb-6">
        <label className="block text-white font-medium mb-2">Product Category</label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white"
        >
          <option value="all">All Products</option>
          <option value="ups">UPS Systems</option>
          <option value="battery">Batteries</option>
          <option value="accessory">Accessories</option>
        </select>
      </motion.div>

      {/* Power Rating */}
      <motion.div variants={itemVariants} className="mb-6">
        <label className="block text-white font-medium mb-2">Power Rating</label>
        <select
          value={filters.power}
          onChange={(e) => onFilterChange({ power: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white"
        >
          <option value="all">All Power Ratings</option>
          <option value="small">Small (&lt;1kVA)</option>
          <option value="medium">Medium (1-10kVA)</option>
          <option value="large">Large (&gt; 10kVA)</option>
        </select>
      </motion.div>

      {/* Use Case */}
      <motion.div variants={itemVariants} className="mb-6">
        <label className="block text-white font-medium mb-2">Application</label>
        <select
          value={filters.usage}
          onChange={(e) => onFilterChange({ usage: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white"
        >
          <option value="all">All Applications</option>
          <option value="home">Home/Home Office</option>
          <option value="small-business">Small Business</option>
          <option value="enterprise">Enterprise</option>
          <option value="data-center">Data Center</option>
          <option value="industrial">Industrial</option>
          <option value="medical">Medical</option>
        </select>
      </motion.div>

      {/* Sort By */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <SortAsc className="w-4 h-4 text-sky-400" />
          <label className="block text-white font-medium">Sort By</label>
        </div>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ sortBy: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 text-white"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
        </select>
      </motion.div>

      {/* Quick Application Filter Buttons */}
      <motion.div variants={itemVariants}>
        <h3 className="text-white font-medium mb-3">Quick Filters</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onFilterChange({ usage: 'home' })}
            className={`flex items-center justify-center gap-1 p-2 rounded ${
              filters.usage === 'home' ? 'bg-sky-600' : 'bg-zinc-700 hover:bg-zinc-600'
            } transition-colors`}
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">Home</span>
          </button>
          <button
            onClick={() => onFilterChange({ usage: 'data-center' })}
            className={`flex items-center justify-center gap-1 p-2 rounded ${
              filters.usage === 'data-center' ? 'bg-sky-600' : 'bg-zinc-700 hover:bg-zinc-600'
            } transition-colors`}
          >
            <Server className="w-4 h-4" />
            <span className="text-sm">Data Center</span>
          </button>
          <button
            onClick={() => onFilterChange({ usage: 'small-business' })}
            className={`flex items-center justify-center gap-1 p-2 rounded ${
              filters.usage === 'small-business' ? 'bg-sky-600' : 'bg-zinc-700 hover:bg-zinc-600'
            } transition-colors`}
          >
            <Building className="w-4 h-4" />
            <span className="text-sm">Business</span>
          </button>
          <button
            onClick={() => onFilterChange({ usage: 'industrial' })}
            className={`flex items-center justify-center gap-1 p-2 rounded ${
              filters.usage === 'industrial' ? 'bg-sky-600' : 'bg-zinc-700 hover:bg-zinc-600'
            } transition-colors`}
          >
            <Activity className="w-4 h-4" />
            <span className="text-sm">Industrial</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductFilters;