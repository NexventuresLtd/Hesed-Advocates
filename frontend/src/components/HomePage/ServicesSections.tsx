import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 dark:from-primary/10 to-transparent"></div>
        <div className="hidden lg:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl"></div>
      </div>

      <div className="relative  px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Image Section - Enhanced with modern effects */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://media.istockphoto.com/id/1477032948/photo/black-man-leadership-and-corporate-meeting-in-office-with-executive-management-investor.jpg?s=612x612&w=0&k=20&c=RLsQWEsvlsQ5XEWR91DXJXp1Po2pKZhSnqIg3aXbbQ0="
                alt="Professional legal consultation"
                className="w-full h-auto aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary dark:bg-primary-600 shadow-xl flex items-center justify-center text-white font-bold text-lg rotate-12">
              Trusted
            </div>
          </div>

          {/* Text Section - Premium typography */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-400"></span>
              <span className="text-sm font-medium tracking-wider text-primary dark:text-primary-400 uppercase">
                Expert Guidance
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 dark:text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-600 dark:from-primary-400 dark:to-primary-500">
                Strategic Legal Solutions
              </span> Tailored to Your Needs
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300 leading-relaxed">
              Whether you're launching a new venture, protecting intellectual property, or navigating complex disputes, our team delivers precise, results-driven counsel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-400 text-gray-800 dark:text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                Explore Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
              </div>
              <div className="flex items-center gap-2">
                {/* <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;