import React, { useState } from 'react';
import { X, Scale, Shield, FileText, Users, Search, Edit3, Calendar, Mic, ArrowRight } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number }>;
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
      title: 'Intellectual Property Services',
      icon: Shield,
      description: 'Comprehensive IP protection and enforcement strategies for your innovations and brand assets.',
      gradient: 'from-blue-600 to-blue-800',
      details: {
        overview: 'We help protect your innovations, ideas, and brand assets through comprehensive IP services, both at the national and regional level.',
        services: [
          'Trademark registration and enforcement (Rwanda, ARIPO, OAPI, and WIPO)',
          'Patent applications and protection strategies',
          'Copyright protection and enforcement',
          'Trade secret and industrial design protection',
          'IP audits and due diligence',
          'IP litigation and dispute resolution',
          'IP strategy for startups, creatives, and corporates'
        ],
        expertise: 'Our IP practice is led by experts with strong institutional and private sector experience.'
      }
    },
    {
      id: 'litigation',
      title: 'Litigation & Dispute Resolution',
      icon: Scale,
      description: 'Strategic litigation representation for complex disputes across multiple jurisdictions.',
      gradient: 'from-purple-600 to-purple-800',
      details: {
        overview: 'We represent clients before courts and arbitration panels, delivering smart and assertive litigation strategies for complex disputes.',
        services: [
          'Commercial disputes',
          'Labor and employment matters',
          'Civil claims',
          'Contract enforcement',
          'Intellectual property disputes',
          'Administrative and regulatory matters',
          'Mediation and out-of-court settlement support'
        ],
        expertise: 'We prioritize risk management, clarity, and client outcomes at every stage.'
      }
    },
    {
      id: 'notary',
      title: 'Private Notary Services',
      icon: FileText,
      description: 'Certified notarization services for businesses and individuals with legal compliance.',
      gradient: 'from-green-600 to-green-800',
      details: {
        overview: 'As certified notaries, we provide legally recognized notarization of key documents for businesses and individuals.',
        services: [
          'Authentication of contracts and agreements',
          'Certification of deeds, affidavits, and declarations',
          'Powers of attorney',
          'Company documents and board resolutions',
          'Property transactions and legal certifications',
          'Cross-border notarization needs'
        ],
        expertise: 'We ensure every notarial transaction is handled with precision, confidentiality, and legal compliance.'
      }
    },
    {
      id: 'advisory',
      title: 'Strategic Legal & Policy Advisory',
      icon: Users,
      description: 'Expert guidance for organizations navigating complex institutional environments.',
      gradient: 'from-orange-600 to-orange-800',
      details: {
        overview: 'We support organizations, associations, and institutions with legal and policy guidance that informs decision-making and shapes outcomes.',
        services: [
          'Legal audits and institutional compliance reviews',
          'Policy analysis and regulatory positioning',
          'Advisory services for business associations',
          'Representation in legal reform or policy dialogue processes',
          'Risk advisory and strategic legal planning'
        ],
        expertise: 'We leverage our background in legal reform, policy engagement, and business law to guide clients navigating complex institutional environments.'
      }
    }
  ];

  const complementaryServices: Service[] = [
    {
      id: 'research',
      title: 'Legal Research & Analysis',
      icon: Search,
      description: 'Thorough legal research to support case development, advocacy work, and policy formulation.',
      gradient: 'from-teal-600 to-teal-800',
      details: {
        overview: 'We conduct thorough legal research to support case development, advocacy work, policy formulation, or legal publications.',
        services: [
          'Case development research',
          'Policy formulation support',
          'Legal publication assistance',
          'Advocacy work research',
          'Regulatory analysis',
          'Comparative legal studies'
        ],
        expertise: 'Our research is rigorous, relevant, and strategically aligned with the client\'s objectives.'
      }
    },
    {
      id: 'content',
      title: 'Strategic Content Development',
      icon: Edit3,
      description: 'Professional legal documents and communication materials that bridge law and strategic messaging.',
      gradient: 'from-indigo-600 to-indigo-800',
      details: {
        overview: 'We assist clients in crafting professional legal documents and communication materials, bridging the gap between legal expertise and strategic messaging.',
        services: [
          'Position papers',
          'Policy briefs',
          'Advocacy messages',
          'Legal branding and profile building',
          'Proposals and institutional reports',
          'Strategic communication planning'
        ],
        expertise: 'This service bridges the gap between legal expertise and strategic messaging.'
      }
    },
    {
      id: 'events',
      title: 'Event Organization',
      icon: Calendar,
      description: 'High-impact legal and policy events that foster engagement, visibility, and influence.',
      gradient: 'from-pink-600 to-pink-800',
      details: {
        overview: 'We organize and coordinate high-impact legal and policy events that foster engagement, visibility, and influence.',
        services: [
          'Policy forums and public-private dialogues',
          'Legal workshops and advocacy roundtables',
          'Institutional meetings and strategic launches',
          'Sector consultations and regulatory engagement events',
          'Conference planning and coordination',
          'Stakeholder engagement events'
        ],
        expertise: 'We ensure every event delivers maximum impact and engagement for our clients.'
      }
    },
    {
      id: 'moderation',
      title: 'Moderation & Facilitation',
      icon: Mic,
      description: 'Professional moderation services for high-level events and strategic discussions.',
      gradient: 'from-red-600 to-red-800',
      details: {
        overview: 'We offer professional moderation services for high-level events, helping institutions ensure well-structured and impactful discussions.',
        services: [
          'Policy forums',
          'Legal conferences',
          'Private sector roundtables',
          'Cross-sector stakeholder dialogues',
          'Board meetings facilitation',
          'Strategic planning sessions'
        ],
        expertise: 'We bring clarity, neutrality, and engagement to every platform we lead.'
      }
    }
  ];

  const ServiceCard = ({ service, onClick }: { service: Service; onClick: (service: Service) => void }) => {
    const Icon = service.icon;
    return (
      <div 
        className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/400 hover:-translate-y-1 cursor-pointer"
        onClick={() => onClick(service)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
            <Icon size={24}  />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            {service.description}
          </p>
          <div className="flex items-center text-primary dark:text-primary-400 font-medium group-hover:text-primary/80 dark:group-hover:text-primary-300 transition-colors duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    );
  };

  const ServicePopup = ({ service, onClose }: { service: Service | null; onClose: () => void }) => {
    if (!service) return null;
    
    const Icon = service.icon;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`bg-gradient-to-br ${service.gradient} text-white p-8 rounded-t-2xl`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon  />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.details.overview}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Services Include</h3>
              <ul className="space-y-4">
                {service.details.services.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} mt-2 mr-4 flex-shrink-0`}></div>
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.details.expertise}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6 mx-auto transition-colors duration-300">
            Legal Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Comprehensive <span className="text-primary dark:text-primary-400">Legal Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Strategic solutions, trusted counsel, and long-term legal partnerships tailored for businesses, institutions, and individuals.
          </p>
        </div>

        {/* Core Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors duration-300">
            Core Practice Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={setSelectedService}
              />
            ))}
          </div>
        </div>

        {/* Complementary Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4 transition-colors duration-300">
            Complementary Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto transition-colors duration-300">
            Specialized services that add strategic value and ensure law and communication work hand-in-hand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complementaryServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={setSelectedService}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">
            Why Choose Hesed Advocates Ltd
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">30+</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Combined experience across law, policy, and strategic engagement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Trusted Partner</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Trusted by institutions, associations, and private clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Multilingual</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Service delivery in English, Kinyarwanda and French</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Client-Centered</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Recognized for integrity, clarity, and client-centered service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Popup */}
      <ServicePopup 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
};

export default ServicesComponent;