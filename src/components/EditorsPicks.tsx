import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import { howToGuides } from '../data/mockData';

export function EditorsPicks() {
  const picks = [
    {
      title: "MacBook Pro M4 vs Dell XPS 15: Which Laptop is Right for You?",
      type: "Comparison",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Best Smartphones of 2025: Buying Guide",
      type: "Buying Guide",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    ...howToGuides.slice(0, 3).map(guide => ({
      title: guide.title,
      type: "How-To Guide",
      image: guide.image
    }))
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Award size={32} className="text-[#002366] dark:text-blue-400 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Editor's Picks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {picks.map((pick, index) => (
            <Link
              key={index}
              to="/reviews"
              className="group bg-white dark:bg-[#0A0A0A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
                    Editor's Pick
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#002366] dark:text-blue-400 uppercase">
                  {pick.type}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 line-clamp-2">
                  {pick.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
