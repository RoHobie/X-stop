import React from "react";
import Basketball from '../assets/Basketball.png'

export default function Hero() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT TEXT CONTENT */}
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black">
                            CHAMPIONS KEEP
                        </h1>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black">
                            PLAYING
                        </h1>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-600">
                            UNTIL THEY GET IT
                        </h1>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-400">
                            RIGHT
                        </h1>
                    </div>

                    {/* RIGHT IMAGE PLACEHOLDER */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* IMAGE PLACEHOLDER */}
                        <div className="w-full max-w-md aspect-[3/4] rounded-xl flex items-center justify-center">
                            <span className="text-gray-500 text-lg">
                                <img
                                    src={Basketball}
                                    alt="Athlete"
                                    className="max-w-md w-full object-contain"
                                />
                            </span>
                        </div>

                        {/*
              Replace above div with:
              <img
                src="/your-image.png"
                alt="Athlete"
                className="max-w-md w-full object-contain"
              />
            */}
                    </div>
                </div>
            </div>

            {/* CTA BUTTON */}
            <div className="flex justify-center mt-12 mb-16">
                <button className="border-2 border-black px-8 py-3 text-black font-semibold hover:bg-black hover:text-white transition">
                    Explore
                </button>
            </div>
        </section>
    );
}
