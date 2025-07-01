import { 
  Scale, 
  Shield, 
  FileText, 
  Target,
  CheckCircle,
  Gavel,
  ClipboardList
} from 'lucide-react';

export default function ServicesSection() {
  const coreServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intellectual Property",
      description: "Trademark, patent, and copyright registration and protection"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Litigation & Dispute Resolution",
      description: "Representation in commercial, civil, employment, and IP-related disputes"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Private Notary Services",
      description: "Notarization and authentication of contracts, deeds, and official documents"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Legal & Policy Advisory",
      description: "Guidance rooted in research to influence policy or guide institutions"
    }
  ];

  const complementaryServices = [
    "Legal Research & Analysis",
    "Strategic Content Development", 
    "Professional Event Organization",
    "Expert Panel Moderation",
    "Regulatory Compliance",
    "Contract Drafting",
    "Legal Training",
    "Due Diligence"
  ];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl z-0"></div>

      <div className="relative max-w-full md:max-w-11/12 mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6 transition-colors duration-300">
            <Gavel className="w-4 h-4" />
            Legal Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Comprehensive <span className="text-primary dark:text-primary-400">Legal Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Tailored services designed to protect your interests and advance your objectives
          </p>
        </div>
        
        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/400"
            >
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Complementary Services */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                Additional Capabilities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Supporting services to enhance your legal strategy
              </p>
            </div>
            <div className="flex items-center gap-2 bg-primary/5 dark:bg-primary/10 px-4 py-2 rounded-full border border-primary/20 dark:border-primary/30">
              <ClipboardList className="w-5 h-5 text-primary dark:text-primary-400" />
              <span className="text-sm font-medium text-primary dark:text-primary-400">8 Specialized Services</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {complementaryServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors duration-300 hover:border-primary/50 dark:hover:border-primary/400"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary dark:text-primary-400" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}