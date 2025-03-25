// components/PackagesSection.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const packages = [
    {
        id: 'kids-pack',
        name: 'Kids Pack',
        description: 'Safe and fun crackers specially designed for children',
        image: '/images/carousel/Picture 03.jpg',
        previewProducts: [
            'Sparklers (10 cm)',
            'Color Pencils',
            'Flower Pots (Small)',
            'Ground Chakras',
            'Magic Wand'
        ],
        allProducts: [
            'Sparklers (10 cm)',
            'Color Pencils',
            'Flower Pots (Small)',
            'Ground Chakras',
            'Magic Wand',
            'Whistling Wheel',
            'Paper Bombs',
            'Color Smoke',
            'Butterfly',
            'Mini Rocket'
        ]
    },
    {
        id: 'night-pack',
        name: 'Night Pack',
        description: 'Vibrant night sky illuminating fireworks package',
        image: '/images/carousel/Picture 02.jpg',
        previewProducts: [
            'Aerial Shots',
            'Multi-Color Rockets',
            'Sky Lanterns',
            'Thousand Flower Pots',
            'Sound Crackers'
        ],
        allProducts: [
            'Aerial Shots',
            'Multi-Color Rockets',
            'Sky Lanterns',
            'Thousand Flower Pots',
            'Sound Crackers',
            '7-Shot Barrage',
            'Golden Waterfall',
            'Whistling Rockets',
            'Large Chakras',
            'Moonlight Shots',
            'Spiral Wheels',
            'Red & Green Mines'
        ]
    },
    {
        id: 'thala-deepavali',
        name: 'Thala Deepavali',
        description: 'Premium festive package for grand Deepavali celebrations',
        image: '/images/carousel/Picture 07.jpg',
        previewProducts: [
            'Garland 1000 Wala',
            'Special Rockets',
            'Deluxe Chakras',
            'Gift Box Special',
            'Giant Flower Pots'
        ],
        allProducts: [
            'Garland 1000 Wala',
            'Special Rockets',
            'Deluxe Chakras',
            'Gift Box Special',
            'Giant Flower Pots',
            'Supreme Deluxe Bombs',
            'Multi-Shot Tubes',
            'Peacock Fountain',
            'Musical Flower Pots',
            'Drone Aerial Show',
            'Premium Gift Hamper',
            'Exclusive Sparklers Set',
            'Color Smoke Fountain'
        ]
    }
];

const PackageCard = ({ pack, isExpanded, onExpand }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48">
                <Image
                    src={pack.image || '/api/placeholder/400/200'}
                    alt={pack.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pack.name}</h3>
                <p className="text-gray-600 mb-4">{pack.description}</p>
                
                <div className="mb-2 font-medium text-gray-700">Includes:</div>
                <ul className="space-y-1 mb-4">
                    {(isExpanded ? pack.allProducts : pack.previewProducts).map((product, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                            <span className="mr-2">•</span>
                            <span>{product}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <button 
                        onClick={onExpand}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-5 h-5 mr-1" />
                                <span>Show Less</span>
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-5 h-5 mr-1" />
                                <span>Show More</span>
                            </>
                        )}
                    </button>
                    
                    <Link 
                        href={`/packages/${pack.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

const PackagesSection = () => {
    const [expandedPackageId, setExpandedPackageId] = useState(null);
    useEffect(() => {
        console.log('Current expandedPackageId:', expandedPackageId);
    }, [expandedPackageId]);

    const handleExpand = (packageId) => {
        console.log('Expanding package:', packageId);
        setExpandedPackageId(prevId => {
            const newId = prevId === packageId ? null : packageId;
            console.log('New expandedPackageId:', newId);
            return newId;
        });
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Special Packages</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pack) => (
                        <PackageCard 
                            key={pack.id} 
                            pack={pack} 
                            isExpanded={expandedPackageId === pack.id}
                            onExpand={() => handleExpand(pack.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;