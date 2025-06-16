import { Play, Smartphone, X } from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Unlimited Streaming",
    description: "Watch as much as you want, anytime you want. No ads, no commitments."
  },
  {
    icon: Smartphone,
    title: "Watch Anywhere",
    description: "Stream on your phone, tablet, laptop, and TV without paying more."
  },
  {
    icon: X,
    title: "Cancel Anytime",
    description: "No contracts, no cancellation fees. Cancel online with just a few clicks."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-netflix-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose <span className="text-netflix-red">StreamFlix</span>?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="bg-netflix-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-netflix-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
