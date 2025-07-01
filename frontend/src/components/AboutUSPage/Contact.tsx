import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-primary/10 backdrop-blur-md rounded-3xl p-12 border border-primary/30">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary/80">
            Let's discuss how we can provide the legal clarity, protection, 
            and strategic advancement you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-primary/20 backdrop-blur-md hover:bg-primary/30 text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 border border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="bg-primary/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              Book Consultation
            </button>
            
            <button className="group bg-primary/15 backdrop-blur-md hover:bg-primary/25 text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 border border-primary/30 hover:border-primary/50 hover:scale-105">
              <div className="bg-primary/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              Contact Us
            </button>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-primary/10 backdrop-blur-md rounded-2xl p-4 border border-primary/20">
              <div className="text-sm text-primary/60 mb-1">Call Us</div>
              <div className="font-semibold text-primary">+250 XXX XXX XXX</div>
            </div>
            <div className="bg-primary/10 backdrop-blur-md rounded-2xl p-4 border border-primary/20">
              <div className="text-sm text-primary/60 mb-1">Email Us</div>
              <div className="font-semibold text-primary">info@hesedadvocates.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}