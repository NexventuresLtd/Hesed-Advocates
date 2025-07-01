import AboutUsSection from "../components/HomePage/AboutUsSection";
import Hero from "../components/HomePage/Hero";
import OurServicesSection from "../components/HomePage/ServicesSections";
import OurTeamSection from "../components/HomePage/TeamSEction";

const HomePage = () => {
    return <>
        <Hero />
        <AboutUsSection/>
        <OurTeamSection/>
        <OurServicesSection/>
    </>
};

export default HomePage;
