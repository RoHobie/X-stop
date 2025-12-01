import React from 'react';

export default function Categories() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                    <p className="text-gray-600 text-lg">Find exactly what you need to reach your goals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer">
                        <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Running</h3>
                            </div>
                        </div>
                    </div>

                    <div className="group cursor-pointer">
                        <div className="relative h-64 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Training</h3>
                            </div>
                        </div>
                    </div>

                    <div className="group cursor-pointer">
                        <div className="relative h-64 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl overflow-hidden shadow-lg transform transition-all group-hover:scale-105">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">Lifestyle</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
