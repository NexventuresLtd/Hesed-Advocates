import { AboutUsCoreServices } from "./AboutUsCoreServices";
import AAboutUsText from "./ABoutUsText";

export const AboutUsWhatWeDo = () => {
    return (
        <section className=" bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Modern section header */}
            <div className="">
                <AAboutUsText />
                <div className="py-4"></div>

                <AboutUsCoreServices />

                {/* Modern feature card */}
                <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row gap-8 max-w-full md:max-w-11/12 m-auto">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Multidisciplinary Approach
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We combine legal expertise with strategic thinking to deliver comprehensive solutions.
                            </p>
                        </div>

                        <div className="md:w-2/3">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "30+ years combined experience",
                                    "Multilingual support (English, French, Kinyarwanda)",
                                    "Track record in national reforms and legal advocacy",
                                    "Strategic advice tailored to business needs"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                                                <span className="text-primary dark:text-primary-400 text-sm font-bold">0{index + 1}</span>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};