import { Routes, Route, useLocation } from 'react-router-dom';
import StartupAnimation from "./Components/StartupAnimationFastBite";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Public Pages
import Home from './Components/Home/Home';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import ContactPage from './Pages/Navbar/ContactPage';
import AboutPage from './Pages/Navbar/AboutPage';
import LogoutPage from './Pages/Auth/LogoutPage';
import FoodMenu from './Pages/Navbar/FoodMenu';
import MegaMenuPage from './Pages/Navbar/MegaMenuPage';
import ItemDetails from './Data/ItemDetails';
import MegaMenuDetailPage from './Data/MegaMenuDetailPage';
import HelpPage from './Pages/Footer/HelpPage';
import OurTeamPage from './Pages/Footer/OurTeamPage';
import FAQPage from './Pages/Footer/FAQPage';
import ServicesPage from './Pages/Footer/ServicesPage';
import OrderNow from './Components/Home/OrderNow';

// Dashboard Routes
import DashboardRoutes from './Components/ProtectedRoute/DashboardRoutes';

function App() {
  const location = useLocation();

  // Hide Navbar & Footer on dashboard routes
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <StartupAnimation>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='/food-menu' element={<FoodMenu />} />
        <Route path='/mega-menu' element={<MegaMenuPage />} /> 
        <Route path='/item/:id' element={<ItemDetails />} /> 
        <Route path='/menu-item/:id' element={<MegaMenuDetailPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/team' element={<OurTeamPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/ordernow' element={<OrderNow />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>

      {!hideLayout && <Footer />}
    </StartupAnimation>
  );
}

export default App;
