import React, { useState, useEffect, useRef } from "react";
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
  ChevronRight,
  Linkedin,
  Twitter,
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
  linkedin?: string;
  twitter?: string;
};

// --------------------------------------
// Floating Animation Component
// --------------------------------------
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-lime-300/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-300/20 rounded-full animate-float-fast"></div>
      <div className="absolute top-60 right-40 w-5 h-5 bg-lime-300/20 rounded-full animate-float-slow delay-300"></div>
      <div className="absolute bottom-40 right-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-medium delay-500"></div>

      {/* Geometric shapes */}
      <div className="absolute top-32 left-1/3 w-8 h-8 border border-lime-300/20 rotate-45 animate-spin-slow"></div>
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
  const [activeTab, setActiveTab] = useState("about");
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Handle modal overflow
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedMember]);

  // Team data
  const teamMembers: TeamMember[] = [
    {
      name: "Alain Didier Muhizi",
      role: "Managing Partner",
      bio: "Legal & Policy Expert | Business Reformer | Strategic Advisor",
      img: "/Alain_Didier.png",
      signature: "/mysignaturewhite.png",
      email: "muhizi@hesedadvocates.com",
      linkedin: "http://linkedin.com/in/alain-didier-muhizi",
      // twitter: "https://twitter.com",
      bgLight:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=60",
      bgDark:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=640&q=60",
      experience: "10+ years",
      description:
        "Mr. Alain Didier Muhizi is a legal and policy expert with over 10 years of experience advancing business‑friendly reforms in Rwanda. He has contributed to the development and revision of several key laws—most notably in the areas of labor, company, procurement, tax, and insolvency. In addition to legal practice, Alain offers strategic content development, event organization, moderation, and graphic design, delivering integrated, results‑driven solutions to institutions, businesses, and development partners.",
      achievements: [
        "VAT Law: Replaced fixed EBM fines (RWF 5–20M) with a proportional model (10× VAT due), boosting SME compliance",
	"Tax Policy: Prevented introduction of a 1% turnover-based Medium Alternative Tax on loss-declaring businesses",
	"Property Tax: Merged land & commercial property taxes; cut commercial property tax from 1% to 0.2–0.5%, later fixed at 0.3%",
	"Land Law: Reduced land tax from RWF 300/m² to 80/m²",
	"Labor Law: Removed automatic renewal of fixed-term contracts",
	"Procurement Law: Introduced proportionate penalties—1-year ban and 5% fine instead of 5–7-year bans",
	"M.O Procurement: Raised thresholds from RWF 500M to 2B for goods/works, and from RWF 50M to 100M for services",
	"Real Property Valuation: Secured a 75% minimum price rule and capped auctions at 3 sessions, replacing indefinite sales with no threshold",
	"Judicial Reform: Introduced Small Claims Procedure for disputes under RWF 5M—no legal representation required",
	"Trade Facilitation: Partnered with GS1 South Africa, enabling 130+ Rwandan businesses to register barcodes and access formal markets",
	"Insurance Recovery: Recovered RWF 107M in unpaid insurance claims for garage operators",
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
      // linkedin: "https://linkedin.com",
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
      linkedin: "https://linkedin.com",
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
    setActiveTab("about");
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!modalContentRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - modalContentRef.current.offsetLeft);
    setScrollLeft(modalContentRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !modalContentRef.current) return;
    e.preventDefault();
    const x = e.pageX - modalContentRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    modalContentRef.current.scrollLeft = scrollLeft - walk;
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        
        .parallax-element {
          transform: translate3d(0, 0, 0);
          transition: transform 0.1s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />

      {/* Main Section */}
      <section
        id="team"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-lime-30 dark:from-gray-950 dark:via-gray-900 dark:to-lime-350 transition-all duration-500 overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-300/5 to-transparent dark:via-lime-300/5" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-11/12 mx-auto">
          <div className="text-center mb-16 animate-slide-in-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent animate-shimmer"></div>
                <Sparkles className="w-4 h-4 text-lime-300 animate-pulse" />
              </div>
              <span className="text-sm font-medium tracking-widest text-lime-300 dark:text-lime-300 uppercase relative">
                Meet The Experts
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
              </span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-lime-300 animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent animate-shimmer"></div>
                <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-lime-300 to-gray-900 dark:from-white dark:via-lime-300 dark:to-white bg-clip-text text-transparent pb-6">
              Our Distinguished Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Legal professionals combining decades of experience with
              innovative approaches
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center mt-8 gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
              <Star className="w-4 h-4 text-lime-300 animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
            </div>
          </div>

          {/* Team Introduction */}
          <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Hesed Advocates Ltd, our strength lies in the depth of our expertise and the diversity of our legal insight. Our team is composed of seasoned legal professionals with a proven track record in Intellectual Property, Litigation, Notarial Services, and Strategic Legal & Policy Advisory.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We are not just lawyers, we are trusted advisors, negotiators, reformers, and problem-solvers. With over 30 years of combined experience, our partners bring together technical excellence, strategic thinking, and active listening to deliver legal solutions that are both effective and client-centered.
              </p>
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
                  <div className="dark:hidden absolute inset-0 bg-gray-100" />
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-4 h-4 text-white" />
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
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary dark:text-lime-300 text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:dark:bg-white/20 hover:bg-black/60 transition-colors duration-200">
                        <span>View Profile</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${member.email}`;
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600/60 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-lime-600/80 transition-colors duration-200"
                      >
                        <span>Contact</span>
                        <Mail className="w-4 h-4" />
                      </button>
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-lime-300/70 backdrop-blur-sm rounded-full text-white hover:bg-lime-300/30 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Portrait */}
            <div className="w-full lg:w-1/3 relative bg-gray-100 dark:bg-gray-800">
              <div className="h-64 lg:h-full w-full relative">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedMember.name}
                  </h2>
                  <p className="text-lime-300 font-medium">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex justify-center gap-4">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-lime-300 dark:hover:bg-lime-300/30 transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-500/30 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                {selectedMember.twitter && (
                  <a
                    href={selectedMember.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-400 dark:hover:bg-blue-400/30 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-2/3 overflow-y-auto max-h-[90vh] scrollbar-hide">
              {/* Tabs */}
              <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex overflow-x-auto scrollbar-hide"
                  ref={modalContentRef}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                >
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "about" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setActiveTab("expertise")}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "expertise" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                  >
                    Expertise
                  </button>
                  <button
                    onClick={() => setActiveTab("achievements")}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "achievements" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                  >
                    Achievements
                  </button>
                  {selectedMember.events.length > 0 && (
                    <button
                      onClick={() => setActiveTab("events")}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "events" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                    >
                      Events
                    </button>
                  )}
                  {selectedMember.memberships && (
                    <button
                      onClick={() => setActiveTab("memberships")}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "memberships" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                    >
                      Memberships
                    </button>
                  )}
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === "contact" ? "text-lime-600 dark:text-lime-300 border-b-2 border-lime-600 dark:border-lime-300" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Tab content */}
              <div className="p-8 space-y-8">
                {/* About tab */}
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-lime-300" />
                        Professional Overview
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedMember.description}
                      </p>
                    </div>

                    {selectedMember.background && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-lime-300" />
                          Background
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {selectedMember.background}
                        </p>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-lime-300" />
                        Experience
                      </h3>
                      <div className="bg-lime-50 dark:bg-lime-900/20 rounded-lg p-4 inline-block">
                        <span className="text-lime-700 dark:text-lime-300 font-medium">
                          {selectedMember.experience} of professional experience
                        </span>
                      </div>
                    </div>

                    {selectedMember.interests && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-lime-300" />
                          Personal Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Expertise tab */}
                {activeTab === "expertise" && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-lime-300" />
                      Areas of Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedMember.expertise.map((skill, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start gap-3"
                        >
                          <div className="bg-lime-100 dark:bg-lime-900/30 p-2 rounded-full">
                            <ChevronRight className="w-4 h-4 text-lime-600 dark:text-lime-300" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements tab */}
                {activeTab === "achievements" && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5 text-lime-300" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-4">
                      {selectedMember.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg"
                        >
                          <div className="bg-lime-100 dark:bg-lime-900/30 p-1 rounded-full mt-1 flex-shrink-0">
                            <Star className="w-3 h-3 text-lime-600 dark:text-lime-300" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {ach}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Events tab */}
                {activeTab === "events" && selectedMember.events.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-lime-300" />
                      Events & Forums
                    </h3>
                    <ul className="space-y-4">
                      {selectedMember.events.map((event, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg"
                        >
                          <div className="bg-lime-100 dark:bg-lime-900/30 p-1 rounded-full mt-1 flex-shrink-0">
                            <ChevronRight className="w-3 h-3 text-lime-600 dark:text-lime-300" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {event}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Memberships tab */}
                {activeTab === "memberships" && selectedMember.memberships && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-lime-300" />
                      Professional Memberships
                    </h3>
                    <ul className="space-y-4">
                      {selectedMember.memberships.map((m, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg"
                        >
                          <div className="bg-lime-100 dark:bg-lime-900/30 p-1 rounded-full mt-1 flex-shrink-0">
                            <ChevronRight className="w-3 h-3 text-lime-600 dark:text-lime-300" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {m}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact tab */}
                {activeTab === "contact" && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-lime-300" />
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          Email
                        </h4>
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="text-lime-600 dark:text-lime-300 hover:underline"
                        >
                          {selectedMember.email}
                        </a>
                      </div>

                      {(selectedMember.linkedin || selectedMember.twitter) && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                            Social Profiles
                          </h4>
                          <div className="flex gap-4">
                            {selectedMember.linkedin && (
                              <a
                                href={selectedMember.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                              </a>
                            )}
                            {selectedMember.twitter && (
                              <a
                                href={selectedMember.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                              >
                                <Twitter className="w-5 h-5" />
                                <span>Twitter</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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