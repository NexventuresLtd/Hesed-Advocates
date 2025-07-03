import { useState} from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import {
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950/80 z-0" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-lime-500/5 to-lime-500/5" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-r from-lime-600/5 to-lime-600/5" />
      </div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-lime-300/10 to-lime-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-lime-300/15 to-lime-500/15 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Let&apos;s Begin Your{' '}
            <span className="bg-gradient-to-r from-lime-300 to-lime-200 dark:from-white dark:to-lime-300 bg-clip-text text-transparent">
              Legal Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Schedule a consultation to discuss your legal needs with our expert
            team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-500">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="your names"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="+250 7** *** ***"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="youremail@domain.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Legal Consultation</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="litigation">Litigation</option>
                  <option value="family">Family Law</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Tell us about your legal needs..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-white to-lime-300  dark:from-white dark:to-lime-300 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending Message…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-500">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Contact
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group bg-gradient-to-r from-white to-lime-300 dark:from-white dark:to-lime-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="bg-white/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                Call Now
              </button>

              <button className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg transform hover:scale-105">
                <div className="bg-gradient-to-r from-lime-600/10 to-lime-600/10 dark:from-lime-300/20 dark:to-lime-300/20 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-lime-600 dark:text-lime-300" />
                </div>
                Email Us
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="bg-gradient-to-r from-lime-600/10 to-lime-600/10 dark:from-lime-300/20 dark:to-lime-300/20 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-lime-600 dark:text-lime-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Phone Numbers
                  </h4>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    +250 788 388 652
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="bg-gradient-to-r from-lime-600/10 to-lime-600/10 dark:from-lime-300/20 dark:to-lime-300/20 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-lime-600 dark:text-lime-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Email Addresses
                  </h4>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    info@hesedadvocates.com
                  </p>
                  {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                    consultation@hesedadvocates.com
                  </p> */}
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="bg-gradient-to-r from-lime-600/10 to-lime-600/10 dark:from-lime-300/20 dark:to-lime-300/20 rounded-lg p-3">
                  <MapPin className="w-5 h-5 text-lime-600 dark:text-lime-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Office Location
                  </h4>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Kigali City Tower
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    KN 2 St, Kigali
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nyarugenge, Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="bg-gradient-to-r from-lime-600/10 to-lime-600/10 dark:from-lime-300/20 dark:to-lime-300/20 rounded-lg p-3">
                  <Clock className="w-5 h-5 text-lime-600 dark:text-lime-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Office Hours
                  </h4>
                  <p className="text-sm text-gray-900 dark:text-white">
                    Monday – Friday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Sunday: Closed (Emergency cases only)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map - Full Width Below Other Cards */}
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-500">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Find Our Office
          </h3>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5178426169064!2d30.05827367251363!3d-1.945767549056219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4223449e947%3A0x886c287774e11fe5!2sKigali%20City%20Tower%2C%20KN%202%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1751452384022!5m2!1sen!2srw"
              width="100%"
              height="400"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
            {/* Map Overlay with Address */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime-600 dark:text-lime-300" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Hesed Advocates Ltd
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Kigali City Tower
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/rx6y9jDHRBJoYQpW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-300 hover:text-lime-700 dark:hover:text-lime-300 font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View in Google Maps
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
