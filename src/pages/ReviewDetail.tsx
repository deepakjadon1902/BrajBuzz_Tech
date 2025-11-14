import { useParams, Link } from 'react-router-dom';
import { Star, Check, X, ChevronRight } from 'lucide-react';
import { reviews } from '../data/mockData';

export function ReviewDetail() {
  const { id } = useParams();
  const review = reviews.find((r) => r.id === Number(id));

  if (!review) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review not found</h1>
        </div>
      </div>
    );
  }

  const alternatives = reviews.filter((r) => r.id !== review.id && r.category === review.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link to="/" className="hover:text-[#002366] dark:hover:text-blue-400">Home</Link>
          <ChevronRight size={16} />
          <Link to="/reviews" className="hover:text-[#002366] dark:hover:text-blue-400">Reviews</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900 dark:text-white">{review.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <span className="px-3 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full">
              {review.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              {review.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Published on {review.date}
            </p>

            <img
              src={review.image}
              alt={review.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />

            <div className="bg-[#E6EEF9] dark:bg-[#1A1A1A] rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overall Rating</h2>
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-[#002366] dark:text-blue-400 mr-2">
                    {review.rating}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/5</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${
                      i < Math.floor(review.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Review</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {review.excerpt}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In our extensive testing, this product has shown remarkable performance across various use cases.
                The build quality is exceptional, and the attention to detail is evident in every aspect of the design.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                After using this device for several weeks, we've found it to be a solid choice for anyone looking
                for a reliable and high-performing option in its category. While there are some minor drawbacks,
                the overall experience has been overwhelmingly positive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4 flex items-center">
                  <Check size={24} className="mr-2" />
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <Check size={18} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
                  <X size={24} className="mr-2" />
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <X size={18} className="text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {Object.keys(review.specs).length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Specifications</h2>
                <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(review.specs).map(([key, value], index) => (
                        <tr
                          key={key}
                          className={index % 2 === 0 ? 'bg-white dark:bg-[#0A0A0A]' : ''}
                        >
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </td>
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="bg-[#002366] text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our Verdict</h2>
              <p className="text-lg">
                {review.title} is an excellent choice for users seeking {review.category.toLowerCase()}
                that delivers on performance and quality. Despite some minor drawbacks, it offers
                exceptional value and a premium experience that justifies its price point.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Price</p>
                <p className="text-3xl font-bold text-[#002366] dark:text-blue-400">{review.price}</p>
              </div>
              <button className="w-full bg-[#002366] text-white py-3 rounded-lg font-semibold hover:bg-[#003399] transition-colors mb-4">
                Check Latest Price
              </button>
              <button className="w-full border-2 border-[#002366] text-[#002366] dark:text-blue-400 dark:border-blue-400 py-3 rounded-lg font-semibold hover:bg-[#002366] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors">
                Compare Prices
              </button>
            </div>

            {alternatives.length > 0 && (
              <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-6 mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Alternative Options
                </h3>
                <div className="space-y-4">
                  {alternatives.map((alt) => (
                    <Link
                      key={alt.id}
                      to={`/review/${alt.id}`}
                      className="block group"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={alt.image}
                          alt={alt.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#002366] dark:group-hover:text-blue-400 line-clamp-2">
                            {alt.title}
                          </h4>
                          <div className="flex items-center text-xs">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className={`${
                                  i < Math.floor(alt.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-gray-600 dark:text-gray-400">
                              {alt.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
