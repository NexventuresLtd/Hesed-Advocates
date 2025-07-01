import React from 'react';

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Get in Touch",
      description: "Call or email us. We'll listen, assess your issue, and connect you with the right lawyer or service lead."
    },
    {
      number: "02", 
      title: "Consultation",
      description: "We clarify your needs, explore legal options, and provide a roadmap with timelines and costs."
    },
    {
      number: "03",
      title: "Engagement & Action", 
      description: "We begin the work - drafting contracts, registering trademarks, or organizing legal forums."
    },
    {
      number: "04",
      title: "Completion & Follow-up",
      description: "We guide matters to resolution, deliver outcomes, and offer continued advice as needed."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            Our Process
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Four clear steps to legal clarity and resolution
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative group bg-primary/10 backdrop-blur-md p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-primary to-primary/80 text-white text-lg font-bold w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md border border-primary/30">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-6 text-primary">{step.title}</h3>
              <p className="text-primary/70">{step.description}</p>
              
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-primary/10 backdrop-blur-md p-8 rounded-3xl max-w-md mx-auto border border-primary/20">
            <h3 className="text-lg font-bold mb-2 text-primary">Not Sure Where You Fit?</h3>
            <p className="text-primary/70 mb-6">That's completely fine. Just reach out — we'll help you find the right path.</p>
            <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border border-primary/30 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}