import React from 'react';

const CallToAction: React.FC = () => {
  /* ---- handlers ------------------------------------------------------- */
  const goToContact = () => {
    window.location.href = '/contact';
  };

  const scrollToServices = () => {
    const section = document.getElementById('services');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  /* --------------------------------------------------------------------- */
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 dark:from-primary/10 to-transparent" />
        <div className="hidden lg:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/slide (2).jpg"
                alt="Professional legal consultation"
                className="w-full h-auto aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary dark:bg-primary-600 shadow-xl flex items-center justify-center text-white font-bold text-lg rotate-12">
              Trusted
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-400" />
              <span className="text-sm font-medium tracking-wider text-primary dark:text-primary-400 uppercase">
                Expert Guidance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 dark:text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-600 dark:from-primary-400 dark:to-primary-500">
                Strategic Legal Solutions
              </span>{' '}
              Tailored to Your Needs
            </h2>

            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300 leading-relaxed">
              Whether you're launching a new venture, protecting intellectual property, or navigating complex disputes,
              our team delivers precise, results‑driven counsel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={goToContact}
                className="cursor-pointer px-8 py-4 bg-gradient-to-r from-white to-lime-300 dark:from-white dark:to-lime-300 text-gray-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Schedule Consultation
              </button>

              <button
                onClick={scrollToServices}
                className="cursor-pointer px-8 py-4 bg-gradient-to-r from-white/90 to-white/70 hover:from-white/100 hover:to-white/90 dark:from-gray-800/90 dark:to-gray-700/80 dark:hover:from-gray-900/100 dark:hover:to-gray-800/90 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-400 font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
