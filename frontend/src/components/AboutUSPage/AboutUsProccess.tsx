import { ArrowRight, HelpCircle } from 'lucide-react';

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Contact",
      description: "Call or email us. We'll listen, assess your issue, and connect you with the right legal expert.",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      number: "02", 
      title: "Strategy Session",
      description: "We clarify your needs, explore legal options, and provide a clear roadmap with timelines.",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Implementation", 
      description: "We begin executing the plan - drafting contracts, filing trademarks, or preparing cases.",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Resolution & Support",
      description: "We guide matters to completion and offer ongoing counsel as your needs evolve.",
      icon: <ArrowRight className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80 z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl z-0"></div>

      <div className="relative max-w-full md:max-w-11/12 mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6 mx-auto transition-colors duration-300">
            Our Methodology
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="text-primary dark:text-primary-400">Clear</span> Legal Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A structured approach to achieving your legal objectives
          </p>
        </div>
        
        {/* Process Steps - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Timeline connector - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/400"
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-primary-400 font-bold text-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {step.description}
                </p>
                
                {/* Step Indicator - for desktop timeline */}
                <div className="hidden lg:flex items-center justify-center absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-950">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-md mx-auto transition-colors duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-primary dark:text-primary-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Unsure Where to Begin?</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              We'll guide you through every step of the process.
            </p>
            <button className="group bg-primary hover:bg-primary/90 dark:bg-primary-600 dark:hover:bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
