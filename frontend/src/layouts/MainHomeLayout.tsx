import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Navbar from '../components/Navbar/Navbar';
export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};
