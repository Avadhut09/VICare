import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";
import { products } from "../../constants/product.js";

function ProductCatalogue() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "all",
    power: "all",
    usage: "all",
    sortBy: "name",
  });

  // Filter products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply power filter
    if (filters.power !== "all") {
      result = result.filter(product => product.power === filters.power);
    }
    
    // Apply usage filter
    if (filters.usage !== "all") {
      result = result.filter(product => product.useCases.includes(filters.usage));
    }
    
    // Apply sorting
    if (filters.sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [filters]);

  // Update filters from filter component
  const handleFilterChange = (newFilters) => {
    setFilters({...filters, ...newFilters});
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Power Solutions Catalogue
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Browse our comprehensive collection of Uninterruptible Power Supplies (UPS) and Batteries designed for reliability in mission-critical applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-1"
        >
          <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-3"
        >
          <ProductGrid products={filteredProducts} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductCatalogue;
