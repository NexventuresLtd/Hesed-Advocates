import React, { useState } from 'react';
import { X, Award, Briefcase, Users, Globe, BookOpen, Calendar } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  img: string;
  bgLight: string;
  bgDark: string;
  experience: string;
  description: string;
  achievements: string[];
  background?: string;
  expertise: string[];
  interests: string[];
  events: string[];
  memberships?: string[];
};

const OurTeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Alain Didier Muhizi",
      role: "Managing Partner",
      bio: "Legal & Policy Expert | Business Reformer | Strategic Advisor",
      img: "/Alain_Didier.png",
      bgLight: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description: "Mr. Alain Didier Muhizi is a legal and policy expert with over 10 years of experience advancing business-friendly reforms in Rwanda. He has contributed to the development and revision of several key laws, most notably in the areas of labor, company, procurement, tax, and insolvency. In addition to legal practice, Alain offers strategic content development, event organization, moderation, and graphic design, delivering integrated, results-driven solutions to institutions, businesses, and development partners.",
      achievements: [
        "The removal of automatic contract renewal in labor law",
        "The introduction of optional Articles of Association under the company law",
        "An increase in the procurement threshold for works from 500 million RWF to 2 billion RWF",
        "The reduction of EBM fines from a fixed 20 million RWF to 10 times the VAT due",
        "The reduction of land plot tax from 300 RWF/m² to 80 RWF/m²"
      ],
      background: "As former Head of Policy Analysis and National Expert for Public-Private Dialogue at the Private Sector Federation, Alain led high-level consultations and served as Rwanda's private sector focal point in international and regional organizations including ECCAS, OACPS, and CBHI.",
      expertise: [
        "Legal & Policy Analysis",
        "Business Reform",
        "Strategic Advisory",
        "Stakeholder Engagement",
        "International Relations",
        "Content Development",
        "Event Organization",
        "Graphic Design",
        "Regulatory & Legislative Reform",
        "Event Design & Moderation",
        "Communication & Branding Strategy",
      ],
      interests: ["Reading", "Long walks in nature", "Tennis"],
      events: [
        "Golden Business Forum",
        "Rwanda–Tanzania Business Forum",
        "Rwanda–Kenya Business Forums",
        "Trade missions to Mozambique, São Tomé, USA, Germany, Singapore, Indonesia, and China"
      ]
    },
    {
      name: "Alain Fabrice Mwiseneza",
      role: "Executive Partner",
      bio: "Intellectual Property Expert | Certified Private Notary | Strategic Legal Advisor",
      img: "/Alain_Fabrice.png",
      bgLight: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description: "Mr. Alain Fabrice Mwiseneza is the Executive Partner at Hesed Advocates Ltd, with over a decade of experience in Intellectual Property law and notarial services. He has worked extensively on matters related to trademarks, patents, and copyrights.",
      achievements: [
        "Led IP portfolio management for major corporations",
        "Secured and managed intellectual property rights in Rwanda and beyond",
        "Extensive experience in trademark, patent, and copyright law",
        "Certified Private Notary services"
      ],
      background: "He previously served in the Intellectual Property Department at the Rwanda Development Board (RDB) and practiced with CFL Advocates, gaining valuable experience across both public and private legal systems.",
      expertise: [
        "Intellectual Property Law",
        "Trademark Registration",
        "Patent Protection",
        "Copyright Law",
        "Notarial Services",
        "IP Strategy"
      ],
      interests: ["Technology Innovation", "IP Research", "Legal Writing"],
      events: []
    },
    {
      name: "(Adv.) Jean Felix INGENZI",
      role: "Senior Partner",
      bio: "Senior Litigation Counsel | Commercial & Employment Law Expert | Strategic Legal Advisor",
      img: "/Felix.jpeg",
      bgLight: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description: "With over a decade of legal practice, Me INGENZI serves as Senior Partner at Hesed Advocates Ltd, where he leads the firm's litigation and dispute resolution practice. His experience covers a broad range of matters, including commercial disputes, employment claims, contract enforcement, and intellectual property litigation.",
      achievements: [
        "Successfully handled complex commercial disputes",
        "Expert in employment law and contract enforcement",
        "Extensive experience in IP litigation",
        "Strategic handling of high-stakes cases"
      ],
      background: "He is known for his strategic handling of complex legal matters, merging legal precision with a practical understanding of commercial realities. He regularly advises businesses on risk mitigation, regulatory compliance, and dispute prevention.",
      expertise: [
        "Litigation & Disputes",
        "Commercial Law",
        "Employment Law",
        "Contract Enforcement",
        "Risk Mitigation",
        "Regulatory Compliance"
      ],
      interests: ["Legal Research", "Commercial Strategy", "Dispute Resolution"],
      events: [],
      memberships: ["Rwanda Bar Association", "East African Law Society"]
    }
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 transition-colors duration-300" id='team'>
        {/* Background pattern/texture - different for light/dark */}
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-500/20"></div>
          <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-50/50"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gray-200 dark:bg-gray-800 transition-colors duration-300"></div>
              <span className="text-sm font-medium tracking-widest text-primary dark:text-primary-400 uppercase transition-colors duration-300">
                Meet The Experts
              </span>
              <div className="w-12 h-px bg-gray-200 dark:bg-gray-800 transition-colors duration-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Our Distinguished Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Legal professionals combining decades of experience with innovative approaches
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                onClick={() => openModal(member)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[600px] cursor-pointer transform hover:scale-[1.02]"
              >
                {/* Background gradient instead of office images */}
                <div className="absolute inset-0">
                  <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
                  <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-green-300 via-green-500 to-green-600"></div>
                </div>
                
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Large rectangular profile image */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-80 rounded-lg border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800 overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text content positioned lower due to larger rectangular image */}
                  <div className="text-center mt-52">
                    <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-1 transition-colors duration-300">{member.name}</h3>
                    <p className="text-green-200 dark:text-green-300 text-sm font-medium mb-4 transition-colors duration-300">{member.role}</p>
                    <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">{member.bio}</p>
                    
                    {/* View More Button */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
                      <span>View Profile</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side - Large Image */}
            <div className="w-1/3 relative">
              <div className="h-full">
                <img 
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-green-500/70 backdrop-blur-sm rounded-full text-white hover:bg-green-500/30 cursor-pointer transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Right side - Content */}
            <div className="w-2/3 overflow-y-auto max-h-[90vh]">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedMember.name}</h2>
                  <p className="text-lg text-green-300 dark:text-green-300 font-medium mb-2">{selectedMember.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{selectedMember.bio}</p>
                </div>

                <div className="space-y-8">
                  {/* About */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedMember.description}</p>
                    {selectedMember.name === "Alain Didier Muhizi" && (
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                        As Managing Partner at Hesed Advocates Ltd, Mr. Muhizi balances professional leadership with personal interests, including reading, long walks in nature, and a strong enthusiasm for tennis.
                      </p>
                    )}
                  </div>

                  {/* Background */}
                  {selectedMember.background && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-green-300 dark:text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Background</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedMember.background}</p>
                    </div>
                  )}

                  {/* Expertise */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Areas of Expertise</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Achievements</h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-300 dark:bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Events & Forums */}
                  {selectedMember.events && selectedMember.events.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-green-300 dark:text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Events & Forums</h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedMember.events.map((event: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-green-300 dark:bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Memberships */}
                  {selectedMember.memberships && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-5 h-5 text-green-300 dark:text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Memberships</h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedMember.memberships.map((membership: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{membership}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeamSection;