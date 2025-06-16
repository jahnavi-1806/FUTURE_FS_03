import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Monthly",
    price: "₹150",
    duration: "per month",
    features: [
      "Watch on any device",
      "Unlimited movies & shows",
      "Cancel anytime",
      "HD quality streaming",
      "Download for offline viewing"
    ],
    popular: false
  },
  {
    name: "3 Months",
    price: "₹500",
    duration: "3 months",
    originalPrice: "₹450",
    savings: "Save ₹50",
    features: [
      "All Monthly features",
      "Priority customer support",
      "Early access to new content",
      "Multiple user profiles",
      "4K Ultra HD streaming"
    ],
    popular: true
  },
  {
    name: "6 Months",
    price: "₹900",
    duration: "6 months",
    originalPrice: "₹900",
    savings: "Save ₹100",
    features: [
      "All 3 Month features",
      "Family sharing (up to 6 accounts)",
      "Premium content library",
      "Ad-free experience",
      "Exclusive behind-the-scenes content"
    ],
    popular: false
  },
  {
    name: "Yearly",
    price: "₹1800",
    duration: "12 months",
    originalPrice: "₹1800",
    savings: "Save ₹200",
    features: [
      "All 6 Month features",
      "Best value plan",
      "VIP customer support",
      "Early movie releases",
      "Gift subscriptions available"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-netflix-black text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-netflix-dark to-netflix-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-netflix-red">Plan</span>
          </h1>
          <p className="text-lg text-netflix-gray max-w-2xl mx-auto">
            Pick the perfect plan for your entertainment needs. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-netflix-dark rounded-lg p-6 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-netflix-red' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-netflix-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-netflix-red">{plan.price}</span>
                    <span className="text-netflix-gray ml-1">/{plan.duration}</span>
                  </div>
                  {plan.savings && (
                    <span className="text-green-400 text-sm font-medium">{plan.savings}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-netflix-red mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-netflix-red hover:bg-red-700 text-white' 
                      : 'bg-transparent border-2 border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white'
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Choose StreamFlix?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-netflix-red w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">No Contracts</h4>
                <p className="text-netflix-gray text-sm">Cancel anytime with no cancellation fees</p>
              </div>
              <div className="text-center">
                <div className="bg-netflix-red w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Watch Anywhere</h4>
                <p className="text-netflix-gray text-sm">Stream on all your devices, anytime</p>
              </div>
              <div className="text-center">
                <div className="bg-netflix-red w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Premium Quality</h4>
                <p className="text-netflix-gray text-sm">Enjoy HD and 4K streaming quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}