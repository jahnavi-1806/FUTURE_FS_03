import Header from "@/components/Header";
import Footer from "@/components/Footer";

const internationalShows = [
  {
    id: 1,
    title: "Money Heist",
    country: "Spain",
    genre: "Crime Drama",
    image: "https://images.unsplash.com/photo-1489599904323-9c0fc9c89863?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 2,
    title: "Squid Game",
    country: "South Korea",
    genre: "Thriller",
    image: "https://images.unsplash.com/photo-1486575008575-27670ac37156?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 3,
    title: "Dark",
    country: "Germany",
    genre: "Sci-Fi Mystery",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 4,
    title: "Sacred Games",
    country: "India",
    genre: "Crime Thriller",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 5,
    title: "The Rain",
    country: "Denmark",
    genre: "Post-Apocalyptic",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 6,
    title: "Lupin",
    country: "France",
    genre: "Mystery Thriller",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 7,
    title: "Elite",
    country: "Spain",
    genre: "Teen Drama",
    image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  },
  {
    id: 8,
    title: "Ragnarok",
    country: "Norway",
    genre: "Fantasy Drama",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  }
];

export default function Shows() {
  return (
    <div className="bg-netflix-black text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-netflix-dark to-netflix-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            International <span className="text-netflix-red">Shows</span>
          </h1>
          <p className="text-lg text-netflix-gray max-w-2xl mx-auto">
            Discover amazing shows from around the world. Stream the best international content with subtitles and dubbing options.
          </p>
        </div>
      </section>

      {/* Shows Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {internationalShows.map((show) => (
              <div 
                key={show.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={show.image} 
                  alt={`${show.title} Poster`}
                  className="w-full h-auto rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="mt-3">
                  <h3 className="font-semibold text-white group-hover:text-netflix-red transition-colors duration-200">
                    {show.title}
                  </h3>
                  <p className="text-netflix-gray text-sm">{show.country}</p>
                  <p className="text-netflix-gray text-sm">{show.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}