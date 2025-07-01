import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="hidden dark:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="dark:hidden absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      </div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 dark:bg-primary/25 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-500">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Let's Begin Your <span className="text-primary dark:text-primary-400">Legal Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Schedule a consultation to discuss your legal needs with our expert team.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-primary hover:bg-primary/90 dark:bg-primary-600 dark:hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
              <div className="bg-white/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg">
              <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary dark:text-primary-400" />
              </div>
              Email Inquiry
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 transition-colors duration-300 hover:border-primary/50 dark:hover:border-primary/400">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-primary dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">+250 788 123 456</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 transition-colors duration-300 hover:border-primary/50 dark:hover:border-primary/400">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-primary dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">info@hesedadvocates.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}