import { Film, Heart, Zap, Laugh, Eye, Globe } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Action Movies",
    icon: Zap,
    count: "500+ titles",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    name: "Romance Dramas",
    icon: Heart,
    count: "300+ titles",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    name: "Comedy Shows",
    icon: Laugh,
    count: "400+ titles",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 4,
    name: "Thriller Movies",
    icon: Eye,
    count: "350+ titles",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 5,
    name: "International Films",
    icon: Globe,
    count: "600+ titles",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 6,
    name: "Classic Movies",
    icon: Film,
    count: "200+ titles",
    image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-netflix-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Browse by <span className="text-netflix-red">Categories</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent group-hover:from-netflix-red/80 group-hover:via-netflix-red/40 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-48 flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <IconComponent className="w-6 h-6 text-netflix-red mr-2 group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm text-netflix-gray group-hover:text-white transition-colors duration-300">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}