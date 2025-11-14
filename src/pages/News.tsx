import { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/mockData';

export function News() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'AI', 'Mobile', 'Computing', 'Gaming'];

  const filteredArticles = activeTab === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeTab);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Latest Tech News</h1>

        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-[#002366] text-white'
                  : 'bg-gray-100 dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-[#002366] dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
