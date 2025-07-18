import React, { useState, useEffect } from 'react';

function HeroSlider() {
  const images = [
    'https://s6.uupload.ir/files/slider_ua0x.png', // Healthy meal 1
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1350&q=80', // Healthy meal 2
    'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1350&q=80', // Healthy meal 3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide loop
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-700" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-black/60 transition-all duration-300"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/40 backdrop-blur-sm p-3 rounded-full hover:bg-black/60 transition-all duration-300"
      >
        →
      </button>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">ترکیب طعم و سلامتی</h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-md">غذاهای خوشمزه و سالم برای زندگی بهتر</p>
        <button className="bg-gradient-to-r from-[#417F56] to-[#2E5F45] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#355F45] hover:to-[#2E4F3A] transition-all duration-300 shadow-lg">
          سفارش آنلاین
        </button>
      </div>

      {/* Pagination Dots with Liquid Glass Effect */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-white/20 backdrop-blur-md p-2 rounded-full">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex
              ? 'bg-gradient-to-r from-green-400 to-green-600 scale-125 shadow-[0_0_10px_rgba(0,255,0,0.5)]'
              : 'bg-gray-300 hover:bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;