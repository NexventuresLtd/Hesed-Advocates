import React, { useState, useEffect } from "react";
import {
  X,
  Award,
  Briefcase,
  Users,
  Globe,
  BookOpen,
  Calendar,
  Sparkles,
  Star,
  Mail,
} from "lucide-react";

// --------------------------------------
// Types
// --------------------------------------

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  email: string;
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
  signature?: string;
};

// --------------------------------------
// Floating Animation Component
// --------------------------------------
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-300/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-300/20 rounded-full animate-float-fast"></div>
      <div className="absolute top-60 right-40 w-5 h-5 bg-green-400/20 rounded-full animate-float-slow delay-300"></div>
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-medium delay-500"></div>

      {/* Geometric shapes */}
      <div className="absolute top-32 left-1/3 w-8 h-8 border border-green-300/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-48 right-1/4 w-6 h-6 border border-blue-300/20 rotate-12 animate-pulse"></div>
    </div>
  );
};

// --------------------------------------
// Component
// --------------------------------------

const OurTeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Team data
  const teamMembers: TeamMember[] = [
    {
      name: "Alain Didier Muhizi",
      role: "Managing Partner",
      bio: "Legal & Policy Expert | Business Reformer | Strategic Advisor",
      img: "/Alain_Didier.png",
      signature: "/mysignaturewhite.png",
      email: "muhizi@hesedadvocates.com",
      bgLight:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description:
        "Mr. Alain Didier Muhizi is a legal and policy expert with over 10 years of experience advancing business‑friendly reforms in Rwanda. He has contributed to the development and revision of several key laws—most notably in the areas of labor, company, procurement, tax, and insolvency. In addition to legal practice, Alain offers strategic content development, event organization, moderation, and graphic design, delivering integrated, results‑driven solutions to institutions, businesses, and development partners.",
      achievements: [
        "The removal of automatic contract renewal in labor law",
        "The introduction of optional Articles of Association under the company law",
        "An increase in the procurement threshold for works from 500 million RWF to 2 billion RWF",
        "The reduction of EBM fines from a fixed 20 million RWF to 10 times the VAT due",
        "The reduction of land‑plot tax from 300 RWF/m² to 80 RWF/m²",
      ],
      background:
        "As former Head of Policy Analysis and National Expert for Public‑Private Dialogue at the Private Sector Federation, Alain led high‑level consultations and served as Rwanda's private‑sector focal point in international and regional organizations including ECCAS, OACPS, and CBHI.",
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
        "Trade missions to Mozambique, São Tomé, USA, Germany, Singapore, Indonesia, and China",
      ],
    },
    {
      name: "Alain Fabrice Mwiseneza",
      role: "Executive Partner",
      bio: "Intellectual Property Expert | Certified Private Notary | Strategic Legal Advisor",
      email: "mwiseneza@hesedadvocates.com",
      img: "/Alain_Fabrice.png",
      bgLight:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description:
        "Mr. Alain Fabrice Mwiseneza is the Executive Partner at Hesed Advocates Ltd with over a decade of experience in Intellectual Property law and notarial services. He has worked extensively on matters related to trademarks, patents, and copyrights.",
      achievements: [
        "Led IP‑portfolio management for major corporations",
        "Secured and managed intellectual‑property rights in Rwanda and beyond",
        "Extensive experience in trademark, patent, and copyright law",
        "Certified Private‑Notary services",
      ],
      background:
        "He previously served in the Intellectual Property Department at the Rwanda Development Board (RDB) and practiced with CFL Advocates, gaining valuable experience across both public and private legal systems.",
      expertise: [
        "Intellectual Property Law",
        "Trademark Registration",
        "Patent Protection",
        "Copyright Law",
        "Notarial Services",
        "IP Strategy",
      ],
      interests: ["Technology Innovation", "IP Research", "Legal Writing"],
      events: [],
    },
    {
      name: "(Adv.) Jean Felix INGENZI",
      role: "Senior Partner",
      bio: "Senior Litigation Counsel | Commercial & Employment Law Expert | Strategic Legal Advisor",
      email: "ingenzi@hesedadvocates.com",
      img: "/Felix.jpeg",
      bgLight:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description:
        "With over a decade of legal practice, Me INGENZI serves as Senior Partner at Hesed Advocates Ltd, where he leads the firm's litigation and dispute‑resolution practice. His experience covers a broad range of matters, including commercial disputes, employment claims, contract enforcement, and intellectual‑property litigation.",
      achievements: [
        "Successfully handled complex commercial disputes",
        "Expert in employment law and contract enforcement",
        "Extensive experience in IP litigation",
        "Strategic handling of high‑stakes cases",
      ],
      background:
        "He is known for his strategic handling of complex legal matters, merging legal precision with a practical understanding of commercial realities. He regularly advises businesses on risk mitigation, regulatory compliance, and dispute prevention.",
      expertise: [
        "Litigation & Disputes",
        "Commercial Law",
        "Employment Law",
        "Contract Enforcement",
        "Risk Mitigation",
        "Regulatory Compliance",
      ],
      interests: [
        "Legal Research",
        "Commercial Strategy",
        "Dispute Resolution",
      ],
      events: [],
      memberships: ["Rwanda Bar Association", "East African Law Society"],
    },
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.2); }
        }
        @keyframes slide-in-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        
        .parallax-element {
          transform: translate3d(0, 0, 0);
          transition: transform 0.1s ease-out;
        }
      `,
        }}
      />

      {/* Main Section */}
      <section
        id="team"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-green-950 transition-all duration-500 overflow-hidden"
      >
        {/* Animated background elements */}
        <FloatingElements />

        {/* Dynamic gradient overlay */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          }}
        />

        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent dark:via-green-400/5" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 m-auto">
          <div className="text-center mb-16 animate-slide-in-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-shimmer"></div>
                <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
              </div>
              <span className="text-sm font-medium tracking-widest text-green-600 dark:text-green-400 uppercase relative">
                Meet The Experts
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              </span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-shimmer"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white bg-clip-text text-transparent pb-6">
              Our Distinguished Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Legal professionals combining decades of experience with
              innovative approaches
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center mt-8 gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <Star className="w-4 h-4 text-green-500 animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                role="button"
                onClick={() => openModal(member)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[600px] cursor-pointer transform hover:scale-[1.02]"
              >
                {/* Gradient background */}
                <div className="absolute inset-0">
                  <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
                  <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-green-100 via-white to-green-200" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent dark:from-gray-900/80" />

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                {/* Portrait */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-80 rounded-lg border-4 border-white dark:border-gray-800 overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-gray-800">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-center mt-52">
                    <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-200 dark:text-green-300 text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200">
                      <span>View Profile</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `mailto:${member.email}`;
                      }}
                      className="inline-flex items-center ml-4 gap-2 px-4 py-2 bg-green-600/40 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-green-600/70 transition-colors duration-200"
                    >
                      <span>Contact</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Portrait */}
            <div className="w-1/3 relative">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-green-500/70 backdrop-blur-sm rounded-full text-white hover:bg-green-500/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Content */}
            <div className="w-2/3 overflow-y-auto max-h-[90vh]">
              <div className="p-8 space-y-8">
                {/* Header */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedMember.name}
                  </h2>
                  <p className="text-lg text-green-300 dark:text-green-300 font-medium">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* About */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-green-300 dark:text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      About
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>

                {/* Background */}
                {selectedMember.background && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Background
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedMember.background}
                    </p>
                  </div>
                )}

                {/* Expertise */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-green-300 dark:text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Areas of Expertise
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-green-300 dark:text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedMember.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-green-300 dark:bg-green-300 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Events */}
                {selectedMember.events.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Events & Forums
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedMember.events.map((event, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-green-300 dark:bg-green-300 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {event}
                          </span>
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
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Professional Memberships
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedMember.memberships.map((m, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Contact */}
                {selectedMember.email && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="w-5 h-5 text-green-300 dark:text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Contact
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="text-green-600 dark:text-green-300 hover:underline"
                      >
                        {selectedMember.email}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeamSection;
