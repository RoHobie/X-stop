import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';

export default function XStopLanding() {
    const featuredProducts = [
        { name: 'Pro Runner X1', category: 'Running Shoes', price: '$129.99', image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
        { name: 'FlexFit Yoga Mat', category: 'Equipment', price: '$49.99', image: 'bg-gradient-to-br from-purple-400 to-purple-600' },
        { name: 'Urban Joggers', category: 'Athleisure', price: '$79.99', image: 'bg-gradient-to-br from-gray-400 to-gray-600' },
        { name: 'Elite Dumbbell Set', category: 'Gym Equipment', price: '$199.99', image: 'bg-gradient-to-br from-red-400 to-red-600' },
        { name: 'Performance Tee', category: 'Apparel', price: '$39.99', image: 'bg-gradient-to-br from-green-400 to-green-600' },
        { name: 'Speed Bike Pro', category: 'Cycling', price: '$899.99', image: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <Hero />
            <Categories />
            <ProductCatalog featuredProducts={featuredProducts} />
            <Footer />
        </div>
    );
}