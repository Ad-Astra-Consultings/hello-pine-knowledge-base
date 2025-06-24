
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface QuickNavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const QuickNavigation: React.FC<QuickNavigationProps> = ({ scrollToSection }) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          Submit a support ticket or book a personal call with one of our{' '}
          <span className="bg-gradient-to-r from-[#5F33FF] to-[#8B5CF6] bg-clip-text text-transparent">
            E-Commerce specialists
          </span>
        </h2>
        
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('shop-integrations')}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#5F33FF]/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#5F33FF] transition-colors duration-300">
              Shop-Integrations
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Connect your shop platform with Hello-Pine's AI-powered system
            </p>
          </button>
          
          <button
            onClick={() => scrollToSection('channel-integrations')}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#5F33FF]/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#5F33FF] transition-colors duration-300">
              Channel-Integrations
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Sync your products across multiple sales channels effortlessly
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};
