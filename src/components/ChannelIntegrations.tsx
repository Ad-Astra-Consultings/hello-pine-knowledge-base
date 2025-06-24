
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const ChannelIntegrations: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('problems');

  const channels = [
    { id: 'otto', name: 'Otto', color: 'from-red-500 to-red-600' },
    { id: 'avocadostore', name: 'Avocadostore', color: 'from-green-500 to-green-600' },
    { id: 'etsy', name: 'Etsy', color: 'from-orange-500 to-orange-600' },
    { id: 'kaufland', name: 'Kaufland', color: 'from-blue-500 to-blue-600' },
    { id: 'amazon', name: 'Amazon', color: 'from-yellow-500 to-yellow-600' }
  ];

  const tabs = [
    { id: 'problems', name: 'Common Problems' },
    { id: 'faqs', name: 'FAQs' },
    { id: 'workflows', name: 'Complete Workflows' }
  ];

  const handleChannelClick = (channelId: string) => {
    if (activeChannel === channelId) {
      setActiveChannel('');
    } else {
      setActiveChannel(channelId);
      setActiveTab('problems');
    }
  };

  const renderContent = () => {
    if (!activeChannel) return null;

    const content = {
      problems: {
        otto: ['Product catalog sync issues', 'Pricing discrepancies', 'Stock level mismatches'],
        avocadostore: ['Category mapping errors', 'Image quality requirements', 'Sustainability criteria'],
        etsy: ['SEO optimization challenges', 'Shipping calculation errors', 'Review management'],
        kaufland: ['Product approval delays', 'Return processing', 'Payment reconciliation'],
        amazon: ['FBA integration issues', 'Competitor monitoring', 'Review management']
      },
      faqs: {
        otto: ['How to get approved?', 'Product requirements?', 'Fee structure?'],
        avocadostore: ['Sustainability requirements?', 'Commission rates?', 'Product categories?'],
        etsy: ['Shop setup process?', 'SEO best practices?', 'International shipping?'],
        kaufland: ['Seller requirements?', 'Product guidelines?', 'Marketing opportunities?'],
        amazon: ['FBA vs FBM?', 'Brand registry?', 'Advertising options?']
      },
      workflows: {
        otto: ['Account setup', 'Product listing process', 'Order management'],
        avocadostore: ['Verification process', 'Product optimization', 'Performance tracking'],
        etsy: ['Shop customization', 'Product photography', 'Customer communication'],
        kaufland: ['Onboarding process', 'Inventory management', 'Performance monitoring'],
        amazon: ['Seller central setup', 'Product research', 'PPC campaigns']
      }
    };

    return content[activeTab as keyof typeof content][activeChannel as keyof typeof content.problems] || [];
  };

  return (
    <section id="channel-integrations" data-section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Channel Integrations
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {channels.map((channel, index) => (
            <button
              key={channel.id}
              onClick={() => handleChannelClick(channel.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                activeChannel === channel.id
                  ? 'border-[#5F33FF] bg-[#5F33FF]/10 shadow-lg shadow-[#5F33FF]/25'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${channel.color} mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{channel.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
            </button>
          ))}
        </div>

        {activeChannel && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-fade-in">
            <div className="flex space-x-1 mb-6 bg-white/5 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 ${
                    activeTab === tab.id
                      ? 'bg-[#5F33FF] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            
            <div className="space-y-3">
              {renderContent().map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ChevronRight className="w-4 h-4 text-[#5F33FF]" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
