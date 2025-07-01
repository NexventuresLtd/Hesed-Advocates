import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainHomeLayout';
import HomePage from '../features/HomePage';
import AboutPage from '../features/AboutPage';
import OurTeamSection from '../components/HomePage/TeamSEction';
import ServicesComponent from '../features/ServicesPage';
import Contact from '../components/AboutUSPage/Contact';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="team" element={<OurTeamSection />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesComponent />} />
        <Route path="contact" element={<Contact/>} />
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  );
};
