import React from 'react';
import { 
  Briefcase, 
  Building, 
  Lightbulb, 
  User, 
  Users 
} from 'lucide-react';

export default function ClientsSection() {
  const clientTypes = [
    {
      icon: Briefcase,
      title: "Business Owners & Entrepreneurs",
      description: "Protect your brand, structure contracts, and resolve disputes with comprehensive legal support.",
      quote: "I need to protect my brand, structure my contracts, or resolve a dispute."
    },
    {
      icon: Building,
      title: "Companies & Institutions",
      description: "Legal guidance that aligns with operations and strategy, managing risk and compliance.",
      quote: "We need legal guidance that aligns with our operations and strategy."
    },
    {
      icon: Lightbulb,
      title: "Creatives & Innovators",
      description: "Secure your inventions, ideas, and creative content through IP protection and enforcement.",
      quote: "I want to secure my invention, idea, or creative content."
    },
    {
      icon: User,
      title: "Individuals",
      description: "Clear, respectful legal support for contracts, notarization, and dispute resolution.",
      quote: "I need help with a legal issue or document."
    },
    {
      icon: Users,
      title: "Associations & Sector Bodies",
      description: "Influence policy, advocate for members, and organize impactful legal dialogues.",
      quote: "We want to influence policy, advocate for members, or organize legal dialogues."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            Who We Serve
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Clear, strategic, and personalized legal services for diverse clients
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="group bg-primary/10 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-primary">{client.title}</h3>
              
              <div className="bg-primary/10 backdrop-blur-md rounded-2xl p-4 mb-4 border border-primary/20">
                <blockquote className="text-primary/70 italic text-sm">
                  "{client.quote}"
                </blockquote>
              </div>
              
              <p className="text-primary/70">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}