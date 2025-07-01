import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainHomeLayout';
import HomePage from '../features/HomePage';
import AboutPage from '../features/AboutPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};
