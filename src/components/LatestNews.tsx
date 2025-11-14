import { Link } from 'react-router-dom';
import { newsArticles } from '../data/mockData';

export function LatestNews() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Tech News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.slice(0, 10).map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group flex bg-white dark:bg-[#0A0A0A] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-[#E6EEF9] dark:bg-[#002366] text-[#002366] dark:text-white text-xs font-semibold rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#002366] dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
