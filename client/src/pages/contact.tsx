import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Twitter, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Contact() {
  return (
    <div className="bg-netflix-black text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-netflix-dark to-netflix-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-netflix-red">Touch</span>
          </h1>
          <p className="text-lg text-netflix-gray max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of our channels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-netflix-dark rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    type="text" 
                    placeholder="Your full name"
                    className="bg-netflix-black border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-netflix-black border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    type="text" 
                    placeholder="What's this about?"
                    className="bg-netflix-black border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="bg-netflix-black border-gray-600 text-white min-h-[120px]"
                  />
                </div>
                <Button 
                  className="w-full bg-netflix-red hover:bg-red-700 text-white font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
              
              {/* Social Media Links */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-netflix-dark rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="bg-netflix-red p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-netflix-gray">support@streamflix.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-netflix-dark rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="bg-netflix-red p-3 rounded-full">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Twitter</h3>
                    <p className="text-netflix-gray">@streamflix_official</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-netflix-dark rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="bg-netflix-red p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-netflix-gray">@streamflix_official</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-netflix-dark rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="bg-netflix-red p-3 rounded-full">
                    <SiTiktok className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">TikTok</h3>
                    <p className="text-netflix-gray">@streamflix_official</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-netflix-dark rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p className="text-netflix-gray mb-4">
                  Our support team is available 24/7 to help you with any questions or issues.
                </p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium">Response Time:</span> Within 2 hours</p>
                  <p className="text-sm"><span className="font-medium">Languages:</span> English, Hindi, Spanish</p>
                  <p className="text-sm"><span className="font-medium">Support Hours:</span> 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}