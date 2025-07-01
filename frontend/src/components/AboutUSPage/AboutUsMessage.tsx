import { Globe, Award, Briefcase, Languages, Calendar } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80"></div>
      <div className="hidden lg:block absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>

      <div className="relative max-w-full md:max-w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 transition-colors duration-300">
              <Briefcase className="w-4 h-4" />
              Our Story
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              <span className="text-primary dark:text-primary-400">Strategic Legal Partners</span>{' '}
              in Rwanda
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                We believe that law should not only protect but also empower. From startups and 
                established companies to institutions, business associations, and individuals, 
                we serve a wide range of clients with precision, professionalism, and strategic insight.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Our multidisciplinary approach allows us to serve as more than just legal 
                representatives — we become long-term partners in helping clients navigate 
                legal frameworks, influence change, and achieve sustainable impact.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Briefcase className="w-6 h-6" />, value: "30+", label: "Years Experience" },
                { icon: <Languages className="w-6 h-6" />, value: "3", label: "Languages" },
                { icon: <Calendar className="w-6 h-6" />, value: "2018", label: "Established" }
              ].map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Language Section */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-500 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Multilingual Excellence</h3>
              </div>
              
              <div className="space-y-6">
                {/* Modern Language Listing */}
                <div className="space-y-4">
                  {[
                    { language: "English", level: "Fluent" },
                    { language: "French", level: "Fluent" },
                    { language: "Kinyarwanda", level: "Native" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{item.language}</span>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full flex-1 min-w-[100px]">
                          <div 
                            className={`h-full rounded-full ${index === 2 ? 'bg-primary' : 'bg-primary/70'}`}
                            style={{ width: index === 2 ? '100%' : '90%' }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We provide legal services with cultural understanding and linguistic precision across East Africa.
                  </p>
                  
                  <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 px-4 py-3 rounded-lg border border-primary/20 dark:border-primary/30">
                    <Award className="w-5 h-5 text-primary dark:text-primary-400" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">Trusted Legal Advisors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}