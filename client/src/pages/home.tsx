import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedShows from "@/components/FeaturedShows";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-netflix-black text-white min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedShows />
      <Features />
      <Footer />
    </div>
  );
}
