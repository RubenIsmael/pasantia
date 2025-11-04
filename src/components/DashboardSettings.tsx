import { Save, Lock, Bell, Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function DashboardSettings() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Configuración</h2>
        <p className="text-slate-400 mt-1">Gestiona la configuración de tu cuenta y empresa</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              Información de la Cuenta
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nombre Completo</label>
                <input type="text" defaultValue="Administrador CompuSoftNet" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input type="email" defaultValue="admin@compusoftnet.com.ec" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Teléfono</label>
                <input type="tel" defaultValue="+593 98 885 2325" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-cyan-400" />
              Cambiar Contraseña
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Contraseña Actual</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none pr-10" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nueva Contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Confirmar Contraseña</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 transition-colors duration-300 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Bell className="w-6 h-6 text-cyan-400" />
              Notificaciones
            </h3>
            <div className="space-y-4">
              {['Nuevos pedidos', 'Productos agotados', 'Reportes diarios', 'Alertas de seguridad'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-slate-900/50 border border-slate-600 checked:bg-gradient-to-r checked:from-cyan-500 checked:to-blue-600 cursor-pointer appearance-none" />
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            <span>Guardar Cambios</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Información de la Empresa</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-slate-400">Razón Social</div>
                <div className="text-white font-semibold">CompuSoftNet CIA LTDA</div>
              </div>
              <div>
                <div className="text-slate-400">RUC</div>
                <div className="text-white font-semibold">1792584750001</div>
              </div>
              <div>
                <div className="text-slate-400">Teléfono</div>
                <div className="text-white font-semibold">+593 98 885 2325</div>
              </div>
              <div>
                <div className="text-slate-400">Email</div>
                <div className="text-white font-semibold">info@compusoftnet.com.ec</div>
              </div>
              <div>
                <div className="text-slate-400">Ubicación</div>
                <div className="text-white font-semibold">Santo Domingo, Ecuador</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Estadísticas</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-slate-400">Miembro desde</div>
                <div className="text-white font-semibold">15 Enero 2025</div>
              </div>
              <div>
                <div className="text-slate-400">Última actualización</div>
                <div className="text-white font-semibold">Hoy</div>
              </div>
              <div>
                <div className="text-slate-400">Versión del Sistema</div>
                <div className="text-white font-semibold">1.0.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSettings;
