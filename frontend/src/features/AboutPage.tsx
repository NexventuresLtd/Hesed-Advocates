import AboutSection from "../components/AboutUSPage/AboutUsMessage";
import ProcessSection from "../components/AboutUSPage/AboutUsProccess";
import CTASection from "../components/AboutUSPage/Contact";
import ServicesSection from "../components/AboutUSPage/CoreService";
import Hero from "../components/AboutUSPage/MainHEroAbout";
import ClientsSection from "../components/AboutUSPage/WhoWeServer";

const AboutPage = () => {
    return <>
        <Hero />
        <AboutSection/>
        <ServicesSection/>
        <ClientsSection/>
        <ProcessSection/>
        <CTASection/>
    </>;
};

export default AboutPage;
