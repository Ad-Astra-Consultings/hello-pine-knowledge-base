
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" data-section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hello-Pine: The First{' '}
            <span className="bg-gradient-to-r from-[#5F33FF] to-[#8B5CF6] bg-clip-text text-transparent">
              AI-Powered Solution
            </span>{' '}
            for Next-Gen E-Commerce
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Instantly map shop data to marketplaces via AI-driven APIs—orders, 
            fulfillments, and inventory always in perfect sync.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.hello-pine.com/demo-vereinbaren"
              className="bg-gradient-to-r from-[#5F33FF] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#5F33FF]/25"
            >
              Get Started
            </a>
            <a
              href="https://www.hello-pine.com/integrationen"
              className="border-2 border-[#5F33FF] text-[#5F33FF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5F33FF] hover:text-white transition-all duration-300"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
