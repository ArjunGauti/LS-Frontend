"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// Complete product list
const ALL_PRODUCTS = [
  { id: 1, name: 'Sparkers', category: 'fireworks', image: '/api/placeholder/300/300', description: 'Sparkling fireworks' },
  { id: 2, name: 'Chakkars', category: 'fireworks', image: '/api/placeholder/300/300', description: 'Rotating wheel fireworks' },
  { id: 3, name: 'Flower Pots', category: 'fireworks', image: '/api/placeholder/300/300', description: 'Fountain-like fireworks' },
  { id: 4, name: 'Novelties', category: 'fireworks', image: '/api/placeholder/300/300', description: 'Unique fireworks items' },
  { id: 5, name: 'Bomb', category: 'fireworks', image: '/api/placeholder/300/300', description: 'Explosive fireworks' },
  { id: 6, name: 'Single Sound', category: 'sound', image: '/api/placeholder/300/300', description: 'Single sound effect' },
  { id: 7, name: 'Fancy Fountain', category: 'fountain', image: '/api/placeholder/300/300', description: 'Decorative fountain' },
  { id: 8, name: 'Fancy Pencil', category: 'novelty', image: '/api/placeholder/300/300', description: 'Decorative pencil' },
  { id: 9, name: 'Fancy Items', category: 'novelty', image: '/api/placeholder/300/300', description: 'Assorted fancy items' },
  { id: 10, name: 'Rocket', category: 'fireworks', image: '/api/placeholder/300/300', description: 'High-flying rocket fireworks' },
  { id: 11, name: 'Single Light', category: 'light', image: '/api/placeholder/300/300', description: 'Single light effect' },
  { id: 12, name: 'Multi Light', category: 'light', image: '/api/placeholder/300/300', description: 'Multiple light effects' }
];

const ProductsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Check if there's a category filter from the URL
    const category = searchParams.get('category');
    
    if (category) {
      const filtered = ALL_PRODUCTS.filter(
        product => product.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
      setSelectedCategory(category);
    } else {
      setFilteredProducts(ALL_PRODUCTS);
      setSelectedCategory('');
    }
  }, [searchParams]);

  // Extract unique categories
  const categories = [...new Set(ALL_PRODUCTS.map(product => product.name))];

  const handleCategoryFilter = (category) => {
    router.push(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`
              px-4 py-2 
              rounded-full 
              transition-colors 
              ${selectedCategory.toLowerCase() === category.toLowerCase() 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }
            `}
          >
            {category}
          </button>
        ))}
        {selectedCategory && (
          <button
            onClick={() => router.push('/products')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex justify-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={250} 
                height={250} 
                className="object-contain max-h-48"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;