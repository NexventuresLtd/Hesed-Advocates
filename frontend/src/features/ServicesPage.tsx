import React, { useState } from 'react';
import { X, Scale, Shield, FileText, Users, Search, Edit3, Calendar, Mic, ArrowRight } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  gradient: string;
  details: {
    overview: string;
    services: string[];
    expertise: string;
  };
};

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const coreServices: Service[] = [
    {
      id: 'ip',
      title: 'Intellectual Property',
      icon: Shield,
      description: 'Protection and enforcement for your innovations and brand assets',
      gradient: 'from-blue-500 to-blue-600',
      details: {
        overview: 'We help protect your innovations, ideas, and brand assets through comprehensive IP services.',
        services: [
          'Trademark registration and enforcement',
          'Patent applications and protection',
          'Copyright protection',
          'Trade secret and industrial design',
          'IP audits and due diligence',
          'IP litigation and dispute resolution'
        ],
        expertise: 'Our IP practice is led by experts with strong institutional and private sector experience.'
      }
    },
    {
      id: 'litigation',
      title: 'Litigation',
      icon: Scale,
      description: 'Strategic representation for complex disputes',
      gradient: 'from-purple-500 to-purple-600',
      details: {
        overview: 'We represent clients before courts and arbitration panels with smart litigation strategies.',
        services: [
          'Commercial disputes',
          'Labor and employment matters',
          'Civil claims',
          'Contract enforcement',
          'IP disputes',
          'Administrative matters'
        ],
        expertise: 'We prioritize risk management and client outcomes at every stage.'
      }
    },
    {
      id: 'notary',
      title: 'Notary Services',
      icon: FileText,
      description: 'Certified notarization with legal compliance',
      gradient: 'from-green-500 to-green-600',
      details: {
        overview: 'We provide legally recognized notarization of key documents.',
        services: [
          'Authentication of contracts',
          'Certification of deeds and affidavits',
          'Powers of attorney',
          'Company documents',
          'Property transactions',
          'Cross-border notarization'
        ],
        expertise: 'Handled with precision, confidentiality, and legal compliance.'
      }
    },
    {
      id: 'advisory',
      title: 'Legal Advisory',
      icon: Users,
      description: 'Guidance for complex institutional environments',
      gradient: 'from-orange-500 to-orange-600',
      details: {
        overview: 'We support organizations with legal and policy guidance.',
        services: [
          'Legal audits and compliance',
          'Policy analysis',
          'Business association advisory',
          'Legal reform representation',
          'Risk advisory',
          'Strategic legal planning'
        ],
        expertise: 'We leverage our background in legal reform and policy engagement.'
      }
    }
  ];

  const complementaryServices: Service[] = [
    {
      id: 'research',
      title: 'Legal Research',
      icon: Search,
      description: 'Thorough research for case development and policy',
      gradient: 'from-teal-500 to-teal-600',
      details: {
        overview: 'We conduct thorough legal research to support cases and policy.',
        services: [
          'Case development',
          'Policy formulation',
          'Legal publications',
          'Advocacy research',
          'Regulatory analysis',
          'Comparative studies'
        ],
        expertise: 'Our research is rigorous and strategically aligned.'
      }
    },
    {
      id: 'content',
      title: 'Content Development',
      icon: Edit3,
      description: 'Legal documents and strategic messaging',
      gradient: 'from-indigo-500 to-indigo-600',
      details: {
        overview: 'We craft professional legal documents and communications.',
        services: [
          'Position papers',
          'Policy briefs',
          'Advocacy messages',
          'Legal branding',
          'Institutional reports',
          'Communication planning'
        ],
        expertise: 'Bridges legal expertise and strategic messaging.'
      }
    },
    {
      id: 'events',
      title: 'Event Organization',
      icon: Calendar,
      description: 'High-impact legal and policy events',
      gradient: 'from-pink-500 to-pink-600',
      details: {
        overview: 'We organize impactful legal and policy events.',
        services: [
          'Policy forums',
          'Legal workshops',
          'Institutional meetings',
          'Sector consultations',
          'Conference planning',
          'Stakeholder events'
        ],
        expertise: 'We ensure every event delivers maximum impact.'
      }
    },
    {
      id: 'moderation',
      title: 'Moderation',
      icon: Mic,
      description: 'Professional facilitation for discussions',
      gradient: 'from-red-500 to-red-600',
      details: {
        overview: 'We moderate high-level events and discussions.',
        services: [
          'Policy forums',
          'Legal conferences',
          'Roundtables',
          'Stakeholder dialogues',
          'Board meetings',
          'Planning sessions'
        ],
        expertise: 'We bring clarity and engagement to every platform.'
      }
    }
  ];

  const ServiceCard = ({ service }: { service: Service }) => {
    const Icon = service.icon;
    return (
      <div 
        className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/400 cursor-pointer h-full flex flex-col"
        onClick={() => setSelectedService(service)}
      >
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm transition-colors duration-300 flex-grow">
          {service.description}
        </p>
        <div className="flex items-center text-primary dark:text-primary-400 text-sm font-medium group-hover:text-primary/80 dark:group-hover:text-primary-300 transition-colors duration-300">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    );
  };

  const ServiceModal = ({ service, onClose }: { service: Service | null; onClose: () => void }) => {
    if (!service) return null;
    
    const Icon = service.icon;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-t-2xl`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Overview</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.details.overview}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Services Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.services.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} mt-2 mr-3 flex-shrink-0`}></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {service.details.expertise}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6 mx-auto">
            Legal Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive <span className="text-primary dark:text-primary-400">Legal Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strategic counsel and services tailored for businesses, institutions, and individuals
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Practice Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Complementary Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Complementary Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Specialized services that enhance your legal strategy
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complementaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Choose Our Firm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">30+</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Combined legal expertise</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Trusted Partner</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">For institutions and businesses</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Multilingual</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">English, French, Kinyarwanda</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Client Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Tailored solutions</p>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
};

export default ServicesComponent;