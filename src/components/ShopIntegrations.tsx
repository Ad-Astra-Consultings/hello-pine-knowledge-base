
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const ShopIntegrations: React.FC = () => {
  const [activeShop, setActiveShop] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('problems');

  const shops = [
    { id: 'shopify', name: 'Shopify', color: 'from-green-500 to-green-600' },
    { id: 'woocommerce', name: 'WooCommerce', color: 'from-blue-500 to-blue-600' },
    { id: 'shopware', name: 'Shopware', color: 'from-purple-500 to-purple-600' }
  ];

  const tabs = [
    { id: 'problems', name: 'Common Problems' },
    { id: 'faqs', name: 'FAQs' },
    { id: 'workflows', name: 'Complete Workflows' }
  ];

  const handleShopClick = (shopId: string) => {
    if (activeShop === shopId) {
      setActiveShop('');
    } else {
      setActiveShop(shopId);
      setActiveTab('problems');
    }
  };

  const renderContent = () => {
    if (!activeShop) return null;

    const content = {
      problems: {
        shopify: ['Sync delays with inventory', 'Order processing errors', 'Product mapping issues'],
        woocommerce: ['Plugin conflicts', 'Database synchronization', 'API rate limiting'],
        shopware: ['Cache invalidation', 'Custom field mapping', 'Multi-store setup']
      },
      faqs: {
        shopify: ['How to connect Shopify?', 'What data is synced?', 'How often does sync occur?'],
        woocommerce: ['Installation requirements?', 'Compatible versions?', 'Backup recommendations?'],
        shopware: ['System requirements?', 'Extension compatibility?', 'Performance impact?']
      },
      workflows: {
        shopify: ['Setup guide', 'Product import process', 'Order fulfillment workflow'],
        woocommerce: ['Initial configuration', 'Bulk operations', 'Troubleshooting steps'],
        shopware: ['Integration setup', 'Data migration', 'Testing procedures']
      }
    };

    return content[activeTab as keyof typeof content][activeShop as keyof typeof content.problems] || [];
  };

  return (
    <section id="shop-integrations" data-section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Shop Integrations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {shops.map((shop) => (
            <button
              key={shop.id}
              onClick={() => handleShopClick(shop.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                activeShop === shop.id
                  ? 'border-[#5F33FF] bg-[#5F33FF]/10 shadow-lg shadow-[#5F33FF]/25'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${shop.color} mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{shop.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{shop.name}</h3>
            </button>
          ))}
        </div>

        {activeShop && (
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
