import { ArrowDown, BookOpenCheck, Scale, Briefcase, Users, FileText, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      light: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      dark: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      light: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      dark: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      light: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      dark: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-10 w-full overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="hidden dark:block">
              <img src={img.dark} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="dark:hidden">
              <img src={img.light} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/100 to-transparent dark:from-black/70 dark:via-black/50 dark:to-black/30" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-primary/80 dark:bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20 dark:border-primary/30 transition-colors duration-300">
            <Scale className="w-4 h-4" />
            <span>Trusted Since 2018</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-primary dark:text-primary-400 transition-colors duration-300">Strategic</span>{' '}
            <span className="bg-gradient-to-r from-primary to-primary dark:from-primary-800 dark:to-primary-300 bg-clip-text text-transparent">
              Legal Protection
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed transition-colors duration-300">
            Comprehensive legal solutions in Intellectual Property, Litigation, and Notarial Services.
            Partner with Rwanda's most trusted legal advisors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-primary hover:bg-primary/90 dark:bg-primary-600 dark:hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <BookOpenCheck className="w-5 h-5" />
              Book Consultation
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button onClick={() => {window.location.href = '/#services'}} className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg border border-white/20 dark:border-gray-700 backdrop-blur-sm">
              Our Services
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: <Briefcase className="w-6 h-6" />, value: "30+", label: "Years Experience" },
              { icon: <Users className="w-6 h-6" />, value: "500+", label: "Clients Served" },
              { icon: <FileText className="w-6 h-6" />, value: "100%", label: "Client Focus" },
              { icon: <Award className="w-6 h-6" />, value: "3", label: "Practice Areas" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-primary-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;