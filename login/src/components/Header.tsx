import { Menu, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
}

function Header({ onMenuToggle }: HeaderProps) {
  const { login, isAuthenticated } = useAuth();

  const handleLoginClick = async () => {
    if (!isAuthenticated) {
      await login('admin', 'admin123');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                0
              </span>
            </button>
            <button
              onClick={handleLoginClick}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 font-medium"
            >
              <User className="w-5 h-5" />
              <span>Iniciar Sesión</span>
            </button>
            <button
              onClick={handleLoginClick}
              className="sm:hidden p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
