import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Productos', icon: Package },
    { id: 'orders', label: 'Pedidos', icon: ShoppingCart },
    { id: 'customers', label: 'Clientes', icon: Users },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-cyan-500/20 z-40 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
                CS
              </div>
              <div>
                <div className="text-white font-bold">CompuSoftNet</div>
                <div className="text-cyan-400 text-xs">Admin Panel</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="p-6 border-t border-slate-700/50 space-y-3">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <div className="text-white font-medium text-sm mb-1">Usuario</div>
              <div className="text-cyan-400 text-xs">admin@compusoftnet.com</div>
            </div>
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;
