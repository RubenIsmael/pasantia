import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-slate-700 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <DashboardPage />;
  }

  return (
    <>
      <LoginPage />
      <div className="hidden">
        <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Hero />
        <FeaturedProducts />
        <Services />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
