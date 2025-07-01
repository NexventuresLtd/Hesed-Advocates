import { Heart, Briefcase, Users, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] py-4 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="hidden dark:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="dark:hidden absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/30 transition-colors duration-500"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-full md:max-w-11/12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/80 dark:bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20 dark:border-primary/30 transition-colors duration-300">
              <Heart className="w-4 h-4" />
              Trusted Since 2018
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary dark:text-primary-400 transition-colors duration-300">Strategic</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                Legal Excellence
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed transition-colors duration-300">
              Full-service law firm delivering tailored legal solutions in intellectual property, 
              litigation, and corporate advisory across East Africa.
            </p>
            

            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                { icon: <Briefcase className="w-6 h-6" />, value: "30+", label: "Years Experience" },
                { icon: <Users className="w-6 h-6" />, value: "200+", label: "Clients Served" },
                { icon: <FileText className="w-6 h-6" />, value: "500+", label: "Cases Handled" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800/50 backdrop-blur-md p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl p-2 border border-gray-200 dark:border-gray-700 transition-colors duration-500">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Legal team collaborating"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              
              {/* Floating Card - Dark/Light aware */}
              <div className="absolute -bottom-6 -right-6 bg-primary dark:bg-primary-600 text-white rounded-2xl p-6 border border-primary/20 dark:border-primary-700/50">
                <div className="text-3xl font-bold">2018</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
