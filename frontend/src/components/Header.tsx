import { useState } from 'react';
import { Menu, ShoppingCart, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/header.css';

interface HeaderProps {
  onMenuToggle: () => void;
  onLoginClick: () => void;
}

function Header({ onMenuToggle, onLoginClick }: HeaderProps) {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const [cartCount] = useState(0);

  const getUserInitials = () => {
    if (!user) return '?';
    const initials = `${user.nombre1.charAt(0)}${user.apellido1.charAt(0)}`;
    return initials.toUpperCase();
  };

  const getFullName = () => {
    if (!user) return '';
    return `${user.nombre1} ${user.apellido1}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Menú */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
                CS
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">CompuSoftNet</div>
                <div className="text-cyan-400 text-xs">Tecnología & Innovación</div>
              </div>
            </div>
          </div>

          {/* Sección de Usuario y Acciones */}
          <div className="flex items-center gap-3">
            {isAuthenticated && user ? (
              <>
                {/* Carrito (Solo para usuarios no-admin) */}
                {!isAdmin && (
                  <button 
                    className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative"
                    aria-label="Carrito de compras"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                      {cartCount}
                    </span>
                  </button>
                )}

                {/* Información del Usuario */}
                <div className="hidden sm:flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {getUserInitials()}
                  </div>
                  <div className="text-right">
                    <div className="text-white text-sm font-medium">{getFullName()}</div>
                    <div className="text-cyan-400 text-xs capitalize flex items-center gap-1">
                      {isAdmin && <Shield className="w-3 h-3" />}
                      {user.rol}
                    </div>
                  </div>
                </div>

                {/* Badge Admin (Mobile) */}
                {isAdmin && (
                  <div className="sm:hidden px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg text-xs font-bold text-white flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Admin
                  </div>
                )}

                {/* Botón Logout */}
                <button 
                  onClick={logout}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Cerrar Sesión</span>
                </button>
                <button 
                  onClick={logout}
                  className="sm:hidden p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300"
                  aria-label="Cerrar sesión"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              /* Botón Login cuando NO está autenticado */
              <>
                <button 
                  onClick={onLoginClick}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 font-medium"
                >
                  <User className="w-5 h-5" />
                  <span>Iniciar Sesión</span>
                </button>
                <button 
                  onClick={onLoginClick}
                  className="sm:hidden p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  aria-label="Iniciar sesión"
                >
                  <User className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;