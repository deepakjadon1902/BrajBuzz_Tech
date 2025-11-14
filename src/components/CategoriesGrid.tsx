import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Watch, Gamepad2, Home, Headphones, Camera, Cpu } from 'lucide-react';

export function CategoriesGrid() {
  const categories = [
    { name: 'Smartphones', icon: Smartphone, count: '350+', color: 'bg-blue-500' },
    { name: 'Laptops & PCs', icon: Laptop, count: '280+', color: 'bg-green-500' },
    { name: 'Wearables', icon: Watch, count: '150+', color: 'bg-orange-500' },
    { name: 'Gaming', icon: Gamepad2, count: '420+', color: 'bg-red-500' },
    { name: 'Smart Home', icon: Home, count: '190+', color: 'bg-teal-500' },
    { name: 'Audio', icon: Headphones, count: '210+', color: 'bg-pink-500' },
    { name: 'Cameras', icon: Camera, count: '95+', color: 'bg-yellow-500' },
    { name: 'AI & Software', icon: Cpu, count: '180+', color: 'bg-indigo-500' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to="/reviews"
                className="group bg-white dark:bg-[#1A1A1A] rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count} reviews
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
