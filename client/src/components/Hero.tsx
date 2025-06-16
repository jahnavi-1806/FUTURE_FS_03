import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1489599904323-9c0fc9c89863?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-netflix-black/40" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Watch <span className="text-netflix-red">Anywhere</span>,<br />
          Cancel <span className="text-netflix-red">Anytime</span>
        </h1>
        <p className="text-lg md:text-xl text-netflix-gray mb-8 max-w-2xl mx-auto leading-relaxed">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. 
          No extra costs, no contracts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-netflix-red hover:bg-red-700 text-white font-semibold px-8 py-4 h-auto transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white hover:bg-white hover:text-netflix-black text-white font-semibold px-8 py-4 h-auto transition-all duration-200"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
