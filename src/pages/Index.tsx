
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { QuickNavigation } from '../components/QuickNavigation';
import { ShopIntegrations } from '../components/ShopIntegrations';
import { ChannelIntegrations } from '../components/ChannelIntegrations';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000014] via-[#1a0033] to-[#2d1b69] relative overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* Enhanced vignette effect for darker, more futuristic look */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60 pointer-events-none"></div>
      
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <QuickNavigation scrollToSection={scrollToSection} />
      <ShopIntegrations />
      <ChannelIntegrations />
    </div>
  );
};

export default Index;
