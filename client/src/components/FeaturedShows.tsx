import { Button } from "@/components/ui/button";
import strangerThingsImg from "@assets/stranger things_1750068758177.jpg";
import tangerinesImg from "@assets/2_1750068769154.jpg";
import aliceImg from "@assets/3_1750068777048.jpg";
import hiNannaImg from "@assets/4_1750068783429.jpg";
import friendsImg from "@assets/5_1750068790614.jpg";
import salaarImg from "@assets/6_1750068799958.jpg";
import hiddenLoveImg from "@assets/7_1750068809959.jpg";

const featuredShows = [
  {
    id: 1,
    title: "Stranger Things",
    genre: "Sci-Fi Horror",
    image: strangerThingsImg
  },
  {
    id: 2,
    title: "When Life Gives You Tangerines",
    genre: "Drama",
    image: tangerinesImg
  },
  {
    id: 3,
    title: "Alice in Borderland",
    genre: "Thriller",
    image: aliceImg
  },
  {
    id: 4,
    title: "Hi Nanna",
    genre: "Family Drama",
    image: hiNannaImg
  },
  {
    id: 5,
    title: "Friends",
    genre: "Comedy",
    image: friendsImg
  },
  {
    id: 6,
    title: "Salaar",
    genre: "Action",
    image: salaarImg
  },
  {
    id: 7,
    title: "Hidden Love",
    genre: "Romance",
    image: hiddenLoveImg
  },
  {
    id: 8,
    title: "Coming Soon",
    genre: "Mystery",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
  }
];

export default function FeaturedShows() {
  return (
    <section className="py-16 bg-netflix-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-netflix-red">Shows</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredShows.map((show) => (
            <div 
              key={show.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img 
                src={show.image} 
                alt={`${show.title} Poster`}
                className="w-full h-auto rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="mt-3 text-center">
                <h3 className="font-semibold text-white group-hover:text-netflix-red transition-colors duration-200">
                  {show.title}
                </h3>
                <p className="text-netflix-gray text-sm">{show.genre}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white font-semibold px-8 py-3 transition-all duration-200"
          >
            View All Shows
          </Button>
        </div>
      </div>
    </section>
  );
}
