import { Bookmark, Gavel, FileSignature, ClipboardList } from 'lucide-react';
import React from 'react';

export const AboutUsCoreServices = () => {
  const services = [
    {
      icon: <Bookmark className="w-5 h-5" />,
      title: "Intellectual Property",
      description: "Trademark, patent, and copyright registration and protection"
    },
    {
      icon: <Gavel className="w-5 h-5" />,
      title: "Litigation & Dispute Resolution",
      description: "Representation in commercial, civil, employment, and IP-related disputes"
    },
    {
      icon: <FileSignature className="w-5 h-5" />,
      title: "Private Notary Services",
      description: "Notarization and authentication of contracts, deeds, and official documents"
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Strategic Legal & Policy Advisory",
      description: "Guidance rooted in research to influence policy or guide institutions"
    }
  ];

  return (
    <div className="mb-16" id='services'>
      <div className="flex items-center gap-3 mb-8 max-w-full md:max-w-11/12 m-auto">
        <div className="w-8 h-0.5 bg-primary dark:bg-primary-400"></div>
        <h3 className="text-lg font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
          Core Legal Services
        </h3>
        <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full md:max-w-11/12 m-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/50"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4 p-3 w-12 h-12 rounded-lg bg-primary/5 dark:bg-primary/10 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                {React.cloneElement(service.icon, { className: "w-5 h-5 text-primary dark:text-primary-400" })}
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-primary dark:text-primary-400 font-medium">Learn more →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};