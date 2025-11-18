import { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const { isAuthenticated, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Cerrar menú al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen || showLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, showLogin]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Si es admin autenticado, mostrar Dashboard completo */}
      {isAuthenticated && isAdmin ? (
        <DashboardPage />
      ) : (
        /* Si es usuario normal o no autenticado, mostrar Landing Page */
        <>
          {/* Header */}
          <Header 
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
            onLoginClick={() => setShowLogin(true)}
          />

          {/* Menú Lateral */}
          <SideMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)}
            onLoginClick={() => setShowLogin(true)}
          />

          {/* Modal de Login/Registro */}
          {showLogin && (
            <LoginPage onClose={() => setShowLogin(false)} />
          )}

          {/* Contenido Principal */}
          <main className="pt-16">
            <Hero />
            <Services />
            <FeaturedProducts />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;