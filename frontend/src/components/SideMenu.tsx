import { X, Home, ShoppingBag, Wrench, Mail, Monitor, Printer, Network, Shield, Laptop, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
}

function SideMenu({ isOpen, onClose, onLoginClick }: SideMenuProps) {
  const { isAuthenticated, user, isAdmin } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Inicio', href: '#inicio' },
    { icon: ShoppingBag, label: 'Tienda', href: '#tienda' },
    { icon: Laptop, label: 'Laptops', href: '#laptops' },
    { icon: Monitor, label: 'PC Escritorio', href: '#pc-escritorio' },
    { icon: Printer, label: 'Impresoras', href: '#impresoras' },
    { icon: Network, label: 'Redes', href: '#redes' },
    { icon: Shield, label: 'Antivirus', href: '#antivirus' },
    { icon: Wrench, label: 'Servicios Técnicos', href: '#servicios' },
    { icon: Mail, label: 'Contacto', href: '#contacto' },
  ];

  const handleLoginClick = () => {
    onClose();
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-cyan-500/20 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
                CS
              </div>
              <div>
                <div className="text-white font-bold text-lg">CompuSoftNet</div>
                <div className="text-cyan-400 text-xs">Tu aliado tecnológico</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Usuario Info (Si está autenticado) */}
          {isAuthenticated && user && (
            <div className="p-4 mx-4 mt-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {user.nombre1.charAt(0)}{user.apellido1.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">
                    {user.nombre1} {user.apellido1}
                  </div>
                  <div className="text-cyan-400 text-xs capitalize">
                    {isAdmin && '👑 '}
                    {user.rol}
                  </div>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-600/20 border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                  style={{
                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  <item.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>

          <div className="p-6 border-t border-slate-700/50">
            {!isAuthenticated && (
              <button 
                onClick={handleLoginClick}
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 font-medium flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default SideMenu;