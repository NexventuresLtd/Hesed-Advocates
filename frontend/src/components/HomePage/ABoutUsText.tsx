export default function AAboutUsText() {
  return (
    <div className="relative py-16 lg:py-24 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Background image for title */}
      <div className="absolute inset-0 z-0 opacity-2 dark:opacity-20">
        <img 
          src="/slide (2).jpg"
          alt="Legal background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-full max-w-2xl mb-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white dark:bg-gray-950 text-xl font-bold tracking-wider text-primary dark:text-primary-300 uppercase">
                Legal Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Content with flex layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
          {/* Title with image background */}
          <div className="lg:w-1/2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[url('/law-texture.jpg')] bg-cover bg-center opacity-20 rounded-xl"></div>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-gray-100 to-gray-600 dark:to-gray-400 px-6 py-4">
                Bespoke Legal Strategies for Discerning Clients
              </h2>
            </div>
          </div>

          {/* Description content */}
          <div className="lg:w-1/2 space-y-8">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Hesed Advocates Ltd is a Rwanda-based law firm providing tailored legal solutions in Intellectual Property, Litigation, Private Notary Services, and Strategic Legal and Policy Advisory. 
            </p>

            {/* Luxury divider */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-24 h-px bg-gradient-to-r from-primary/70 dark:from-primary-300/70 via-primary/30 dark:via-primary-300/30 to-primary/70 dark:to-primary-300/70"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Founded by a team of experienced lawyers, we combine legal excellence with strategic insight to help clients protect their rights, resolve disputes, and navigate complex legal frameworks. We serve individuals, businesses, institutions, and associations with a commitment to clarity, professionalism, and results.

            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
    </div>
  )
}