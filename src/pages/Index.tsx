
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A23] via-[#3F0C80] to-[#5F33FF] relative overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>
      
      {/* Vignette effect */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none"></div>
      
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <QuickNavigation scrollToSection={scrollToSection} />
      <ShopIntegrations />
      <ChannelIntegrations />
    </div>
  );
};

export default Index;
