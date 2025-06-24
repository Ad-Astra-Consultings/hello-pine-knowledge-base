
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const HeroSection: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="home" data-section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 
            ref={titleRef}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Hello-Pine: The First{' '}
            <span className="bg-gradient-to-r from-[#5F33FF] to-[#8B5CF6] bg-clip-text text-transparent">
              AI-Powered Solution
            </span>{' '}
            for Next-Gen E-Commerce
          </h1>
          
          <h2 
            ref={subtitleRef}
            className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Instantly map shop data to marketplaces via AI-driven APIs—orders, 
            fulfillments, and inventory always in perfect sync.
          </h2>
          
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-400 ${
              buttonsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
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
