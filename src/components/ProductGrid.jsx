"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Product data
const PRODUCTS = [
  { id: 1, name: 'Sparkers', image: '/api/placeholder/300/300', category: 'fireworks' },
  { id: 2, name: 'Chakkars', image: '/api/placeholder/300/300', category: 'fireworks' },
  { id: 3, name: 'Flower Pots', image: '/api/placeholder/300/300', category: 'fireworks' },
  { id: 4, name: 'Novelties', image: '/api/placeholder/300/300', category: 'fireworks' },
  { id: 5, name: 'Bomb', image: '/api/placeholder/300/300', category: 'fireworks' },
  { id: 6, name: 'More', image: null, category: 'all' }
];

const ProductCard = ({ product, isMoreCard }) => {
  const cardContent = (
    <div className={`
      relative 
      w-full 
      h-72 
      border 
      rounded-lg 
      shadow-md 
      flex 
      flex-col 
      items-center 
      justify-center 
      transition-transform 
      hover:scale-105
      ${isMoreCard ? 'bg-gray-100' : 'bg-white'}
    `}>
      {!isMoreCard && product.image && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={200} 
            height={200} 
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}
      
      <div className="absolute bottom-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {isMoreCard && (
          <div className="flex items-center justify-center text-blue-600">
            See More <ChevronRight className="ml-2" />
          </div>
        )}
      </div>
    </div>
  );

  return isMoreCard ? (
    <Link href="/products" className="block">
      {cardContent}
    </Link>
  ) : (
    <Link href={`/products?category=${product.name.toLowerCase()}`} className="block">
      {cardContent}
    </Link>
  );
};

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-6">
        {PRODUCTS.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isMoreCard={index === 5} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;