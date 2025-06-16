import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-netflix-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-netflix-red px-3 py-2 rounded font-bold text-xl">
                StreamFlix
              </div>
            </div>
            <p className="text-netflix-gray text-sm leading-relaxed">
              The world's leading streaming entertainment service with over 200 million members.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-netflix-gray">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-netflix-gray">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Media Center</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-netflix-gray">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-netflix-gray hover:text-netflix-red transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-netflix-gray hover:text-netflix-red transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-netflix-gray hover:text-netflix-red transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-netflix-gray hover:text-netflix-red transition-colors duration-200">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-netflix-gray text-sm">
            © 2024 StreamFlix, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
