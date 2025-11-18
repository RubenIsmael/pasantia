import { useState } from 'react';
import { LogOut, User, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import DashboardSidebar from '../login/DashboardSidebar';
import DashboardOverview from '../login/DashboardOverview';
import DashboardProducts from '../login/DashboardProducts';
import DashboardOrders from '../login/DashboardOrders';
import DashboardCustomers from '../login/DashboardCustomers';
import DashboardSettings from '../login/DashboardSettings';

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, logout } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'products':
        return <DashboardProducts />;
      case 'orders':
        return <DashboardOrders />;
      case 'customers':
        return <DashboardCustomers />;
      case 'settings':
        return <DashboardSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  // Obtener nombre completo del usuario
  const getFullName = () => {
    if (!user) return 'Usuario';
    return `${user.nombre1} ${user.apellido1}`;
  };

  // Obtener iniciales del usuario
  const getUserInitials = () => {
    if (!user) return 'U';
    return `${user.nombre1.charAt(0)}${user.apellido1.charAt(0)}`.toUpperCase();
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
              <p className="text-slate-400 text-sm mt-1">
                Bienvenido, {getFullName()}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Info del Usuario */}
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {getUserInitials()}
                </div>
                <div className="text-right">
                  <div className="text-white text-sm font-medium">{getFullName()}</div>
                  <div className="text-cyan-400 text-xs capitalize flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    {user?.rol || 'admin'}
                  </div>
                </div>
              </div>
              
              {/* Botón Logout */}
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;