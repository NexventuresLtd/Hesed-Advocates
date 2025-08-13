import { Calendar, Users, Target, ExternalLink, TreePine, Briefcase, Globe, Award, Clock, MapPin } from 'lucide-react';

export default function RwandaWoodForumPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Header Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('https://cdn1.img.sputniknews.africa/img/07e9/07/15/1075802418_0:67:1280:787_1920x0_80_0_0_bbd28bb29d7e2f0afba58ec159bc2cf7.jpg')] bg-cover">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/60 dark:from-gray-900 dark:to-gray-950/60"></div>
        <div className="hidden lg:block absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="hidden lg:block absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>

        <div className="relative max-w-11/12 mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300">
              <TreePine className="w-4 h-4" />
              Historic Industry Event
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Rwanda Wood Sector
              <span className="block text-primary dark:text-primary-400">Forum 2025</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed italic transition-colors duration-300">
              Ready to witness a first for Rwanda's wood industry?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Event Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  A Landmark Gathering
                </h2>

                <div className="space-y-4">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    For the first time ever, the Rwanda Wood Sector Forum is being organized, bringing government, private sector, and development partners together on one stage to shape a sustainable, competitive future for the sector.
                  </p>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    Our Managing Partner, serving as Lead Event Coordinator, is driving every step, from strategic planning to impactful delivery, to ensure this landmark Forum leaves a lasting legacy.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  What Makes This Historic
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: <Users className="w-5 h-5" />, title: "Multi-Stakeholder Collaboration", desc: "Government, private sector, and development partners united" },
                    { icon: <Target className="w-5 h-5" />, title: "Strategic Vision", desc: "Shaping a sustainable and competitive future for Rwanda's wood sector" },
                    { icon: <Award className="w-5 h-5" />, title: "Expert Leadership", desc: "Led by our Managing Partner with comprehensive event coordination" }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Progress Tracker */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Real-Time Progress</h3>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    This page is your real-time progress tracker - follow milestones, see results, and stay connected until the big day.
                  </p>

                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Be in the loop from start to finish
                      </p>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <div className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full transition-all duration-500" style={{ width: '35%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Forum Planning in Progress</p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="pt-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>18, September, 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Ubumwe Grande Hotel, Kigali, Rwanda</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span>Led by Hesed Advocates Managing Partner</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-3xl p-8 transition-colors duration-500">
                <div className="text-center space-y-6">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl inline-flex">
                    <Globe className="w-8 h-8 text-primary dark:text-primary-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Stay Connected
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Follow our dedicated events portal for the latest updates, milestones, and announcements.
                    </p>
                  </div>

                  <a
                    href="https://events.hesedadvocates.com/"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold text-xs md:text-lg transition-all duration-300 hover:scale-105 group"
                  >
                    View Progress & Updates
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-500">
        <div className="max-w-11/12 mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Driving Sector Transformation
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This Forum represents more than an event - it's the foundation for Rwanda's wood sector evolution, creating pathways for sustainable growth, innovation, and strategic partnerships.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <TreePine className="w-8 h-8" />,
                  title: "Sustainability Focus",
                  desc: "Environmental stewardship at the core of sector development"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Stakeholder Unity",
                  desc: "Building bridges between government, business, and development partners"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Strategic Vision",
                  desc: "Long-term planning for competitive market positioning"
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl text-primary dark:text-primary-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}