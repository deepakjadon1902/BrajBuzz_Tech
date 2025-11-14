import { Link } from 'react-router-dom';
import { Star, Check, X } from 'lucide-react';
import { reviews } from '../data/mockData';

export function LatestReviewsCarousel() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Reviews</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-min">
            {reviews.slice(0, 5).map((review) => (
              <Link
                key={review.id}
                to={`/review/${review.id}`}
                className="flex-shrink-0 w-80 bg-white dark:bg-[#0A0A0A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {review.title}
                  </h3>
                  <div className="flex items-center mb-3">
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
                    <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {review.rating}/5
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[#002366] dark:text-blue-400 mb-4">
                    {review.price}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2">
                      <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.pros[0]}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.cons[0]}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#002366] dark:text-blue-400 font-semibold text-sm hover:underline">
                    Read Full Review →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
