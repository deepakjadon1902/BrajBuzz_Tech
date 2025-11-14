import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, Search, X } from 'lucide-react';
import { reviews } from '../data/mockData';

export function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Smartphones', 'Laptops', 'Gaming', 'Audio', 'Tablets', 'Wearables'];

  const filteredReviews = reviews.filter((review) => {
    const matchesCategory = selectedCategory === 'All' || review.category === selectedCategory;
    const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return parseInt(a.price) - parseInt(b.price);
    if (sortBy === 'price-high') return parseInt(b.price) - parseInt(a.price);
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Product Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            In-depth reviews of the latest tech products
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002366]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <SlidersHorizontal size={20} className="text-gray-700 dark:text-gray-300 mr-2" />
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-[#002366] text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-[#0A0A0A] hover:bg-gray-100 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                    Rating
                  </h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded" />
                        <div className="flex items-center ml-3">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                            & up
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">
                  Showing <span className="font-bold text-gray-900 dark:text-white">{sortedReviews.length}</span> of <span className="font-bold text-gray-900 dark:text-white">{reviews.length}</span> reviews
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#002366]"
                >
                  <option value="latest">Latest</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {sortedReviews.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No reviews found</p>
              </div>
            ) : (
              <div className="space-y-6">
                {sortedReviews.map((review) => (
                  <Link
                    key={review.id}
                    to={`/review/${review.id}`}
                    className="group bg-white dark:bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-6">
                      <div className="sm:col-span-1">
                        <div className="relative h-48 sm:h-40 overflow-hidden rounded-lg">
                          <img
                            src={review.image}
                            alt={review.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-[#002366] text-white text-xs font-bold rounded-full">
                              {review.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-3 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#002366] dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {review.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                            {review.excerpt}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide font-semibold mb-1">Rating</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={`${
                                      i < Math.floor(review.rating)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-lg font-bold text-gray-900 dark:text-white">
                                {review.rating}
                              </span>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide font-semibold mb-1">Price</p>
                            <p className="text-2xl font-bold text-[#002366] dark:text-blue-400">
                              {review.price}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide font-semibold mb-1">Published</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                              {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </p>
                          </div>

                          <div className="flex items-end">
                            <button className="w-full bg-[#002366] text-white px-4 py-2 rounded-lg hover:bg-[#003399] transition-colors font-semibold text-sm">
                              Read Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
