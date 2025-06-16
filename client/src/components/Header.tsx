import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-gradient-to-b from-black/80 to-transparent">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-netflix-red px-3 py-2 rounded font-bold text-xl">
            StreamFlix
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-netflix-gray transition-colors duration-200">
            Home
          </a>
          <a href="/shows" className="hover:text-netflix-gray transition-colors duration-200">
            Shows
          </a>
          <a href="/pricing" className="hover:text-netflix-gray transition-colors duration-200">
            Pricing
          </a>
          <a href="/contact" className="hover:text-netflix-gray transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="/" className="block hover:text-netflix-gray transition-colors duration-200">
              Home
            </a>
            <a href="/shows" className="block hover:text-netflix-gray transition-colors duration-200">
              Shows
            </a>
            <a href="/pricing" className="block hover:text-netflix-gray transition-colors duration-200">
              Pricing
            </a>
            <a href="/contact" className="block hover:text-netflix-gray transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
