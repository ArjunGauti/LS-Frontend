'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/globals.css';
import PackagesSection from '@/components/PackagesSection';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
    const [showLoginMenu, setShowLoginMenu] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Sample carousel images - replace with your actual product images
    const carouselImages = [
        '/images/carousel/Picture 04.jpg',
        '/images/carousel/Picture 05.jpg',
        '/images/carousel/Picture 06.jpg',
    ];
    
    // Add this effect to automatically change slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
            );
        }, 2000); // Change image every 5 seconds
        
        return () => clearInterval(interval); // Clean up on unmount
    }, [carouselImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Lights and Sound Crackers</title>
                <meta name="description" content="Your premier shop for lights and sound crackers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex-grow">
                {/* Image Carousel/Slider */}
                <div className="relative mx-auto overflow-hidden" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {carouselImages.map((src, index) => (
                            <div key={index} className="min-w-full">
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    width={1400}
                                    height={400}
                                    style={{ width: '100%', 
                                        height: 'auto',
                                        maxHeight: '500px' }}
                                />
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    {/* Indicator Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                <PackagesSection />
                {/* Your additional content will go here */}
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                    {/* Add your product listing here */}
                    <ProductGrid />
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center">© 2025 Light and Sound Crackers. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}