// src/app/packages/[id]/page.js
import Image from 'next/image';
import Link from 'next/link';

// This would typically come from an API or database
const getPackageData = (id) => {
    const packages = {
        'kids-pack': {
            name: 'Kids Pack',
            description: 'Safe and fun crackers specially designed for children',
            detailedDescription: 'Our Kids Pack is designed with safety in mind while ensuring maximum fun for children. Each product is carefully selected to provide a delightful experience with minimal noise and safe handling features.',
            image: '/images/carousel/Picture 03.jpg',
            price: '₹999',
            products: [
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
            ],
            features: [
                'Child-friendly products',
                'Low noise levels',
                'Easy to light',
                'Colorful visual effects',
                'Safety instructions included'
            ]
        },
        'night-pack': {
            name: 'Night Pack',
            description: 'Vibrant night sky illuminating fireworks package',
            detailedDescription: 'Transform your night celebration with our spectacular Night Pack. This collection features a variety of aerial fireworks that create breathtaking displays in the night sky, perfect for outdoor celebrations.',
            image: '/images/carousel/Picture 02.jpg',
            price: '₹2499',
            products: [
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
            ],
            features: [
                'High altitude effects',
                'Multi-color displays',
                'Long-lasting shows',
                'Variety of sound effects',
                'Premium quality materials'
            ]
        },
        'thala-deepavali': {
            name: 'Thala Deepavali',
            description: 'Premium festive package for grand Deepavali celebrations',
            detailedDescription: 'Celebrate Deepavali like never before with our exclusive Thala Deepavali package. This comprehensive collection includes our finest selection of crackers and fireworks for the ultimate festive experience.',
            image: '/images/carousel/Picture 07.jpg',
            price: '₹4999',
            products: [
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
            ],
            features: [
                'Complete celebration package',
                'Premium quality products',
                'Exclusive varieties',
                'Extended duration shows',
                'Special gift packaging'
            ]
        }
    };
    
    return packages[id] || null;
};

export default function PackageDetailPage({ params }) {
    const packageData = getPackageData(params.id);
    
    if (!packageData) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Package not found</h1>
                <p className="mb-6">Sorry, the package you're looking for doesn't exist.</p>
                <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    Return to Home
                </Link>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <div className="relative h-64 md:h-full min-h-[300px]">
                            <Image
                                src={packageData.image || '/api/placeholder/600/400'}
                                alt={packageData.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">
                            {packageData.name}
                        </h1>
                        
                        <div className="text-2xl font-bold text-blue-600 mb-4">
                            {packageData.price}
                        </div>
                        
                        <p className="text-gray-600 mb-6">
                            {packageData.detailedDescription}
                        </p>
                        
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mb-6 transition-colors">
                            Add to Cart
                        </button>
                        
                        <div className="border-t border-gray-200 pt-4">
                            <h3 className="font-bold text-gray-800 mb-2">Key Features:</h3>
                            <ul className="list-disc pl-5 mb-4 space-y-1">
                                {packageData.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Package Contents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {packageData.products.map((product, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-md">
                                <span className="text-gray-700">{product}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-6">
                <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}