import { 
  Briefcase, 
  Building, 
  Lightbulb, 
  User, 
  Users,
  Quote
} from 'lucide-react';

export default function ClientsSection() {
  const clientTypes = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Business Owners & Entrepreneurs",
      description: "Protect your brand, structure contracts, and resolve disputes with comprehensive legal support.",
      quote: "I need to protect my brand, structure my contracts, or resolve a dispute."
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Companies & Institutions",
      description: "Legal guidance that aligns with operations and strategy, managing risk and compliance.",
      quote: "We need legal guidance that aligns with our operations and strategy."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Creatives & Innovators",
      description: "Secure your inventions, ideas, and creative content through IP protection and enforcement.",
      quote: "I want to secure my invention, idea, or creative content."
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Individuals",
      description: "Clear, respectful legal support for contracts, notarization, and dispute resolution.",
      quote: "I need help with a legal issue or document."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Associations & Sector Bodies",
      description: "Influence policy, advocate for members, and organize impactful legal dialogues.",
      quote: "We want to influence policy, advocate for members, or organize legal dialogues."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80 z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/9 dark:bg-primary/90 blur-3xl z-0"></div>

      <div className="relative max-w-full md:max-w-11/12 mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/90 dark:bg-primary/90 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/90 dark:border-primary/90 mb-6 mx-auto transition-colors duration-300">
            <Users className="w-4 h-4" />
            Client Focus
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="text-primary dark:text-primary-400">Diverse Clients</span>, Unified Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Tailored legal services designed for your specific needs and objectives
          </p>
        </div>
        
        {/* Client Cards - 3 columns on desktop, 1 on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary/90 dark:hover:border-primary/400"
            >
              {/* Icon with subtle background */}
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/90 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/90 dark:group-hover:bg-primary/90 transition-colors duration-300">
                {client.icon}
              </div>
              
              {/* Client Type Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {client.title}
              </h3>
              
              {/* Quote Card */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4 border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-primary dark:text-primary-400 mt-1 flex-shrink-0" />
                  <blockquote className="text-gray-600 dark:text-gray-300 text-sm italic transition-colors duration-300">
                    "{client.quote}"
                  </blockquote>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
