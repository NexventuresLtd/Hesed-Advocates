import { Briefcase, Lightbulb, User, Users, ListOrdered } from 'lucide-react';
import React from 'react';

export const AboutUsWhatToExpect = () => {
  const clientGroups = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Business Owners & Entrepreneurs",
      description: "Protect your brand, structure contracts, or resolve disputes"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Companies & Institutions",
      description: "Legal guidance aligned with your operations and strategy"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Creatives & Innovators",
      description: "Secure your inventions, ideas, or creative content"
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Individuals",
      description: "Help with legal issues or document notarization"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We listen to understand your unique legal needs"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Customized roadmap for your legal objectives"
    },
    {
      step: "3",
      title: "Execution Phase",
      description: "Precise implementation with regular updates"
    },
    {
      step: "4",
      title: "Resolution & Review",
      description: "Finalizing matters with comprehensive follow-up"
    }
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-950 relative">
              {/* Background pattern/texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-9 bg-[url('https://blog.puc.edu/wp-content/uploads/2025/01/AdobeStock_387176470.jpeg')] bg-cover"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-sm font-medium tracking-widest text-primary dark:text-primary-400 uppercase">
              Our Approach
            </span>
            <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What To Expect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            At Hesed Advocates Ltd, we support clients with clear, strategic, and personalized legal services.
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Client Groups - Takes 5 columns on desktop */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20">
                <Users className="w-6 h-6 text-primary dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Who We Serve
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {clientGroups.map((group, index) => (
                <div key={index} className="flex gap-4 group p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300">
                      {React.cloneElement(group.icon, { className: "w-5 h-5 text-primary dark:text-primary-400" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{group.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{group.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider - Only shows on desktop */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-950 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400">
                AND
              </div>
            </div>
          </div>

          {/* Process Steps - Takes 5 columns on desktop */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20">
                <ListOrdered className="w-6 h-6 text-primary dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Our Process
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative pl-14 group">
                  <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-4 border-white dark:border-gray-900 group-hover:scale-105 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};