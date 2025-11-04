import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/50 mb-6">
            <div className="text-white font-bold text-3xl">CS</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">CompuSoftNet</h1>
          <p className="text-slate-400 text-lg">Panel de Administración</p>
        </div>

        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                Usuario o Email
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-slate-900/50 rounded-xl border border-slate-600 focus-within:border-cyan-500 transition-all duration-300">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin"
                    className="w-full bg-transparent pl-12 pr-4 py-3 text-white placeholder-slate-500 outline-none text-base"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                Contraseña
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-slate-900/50 rounded-xl border border-slate-600 focus-within:border-cyan-500 transition-all duration-300 flex items-center">
                  <Lock className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="admin123"
                    className="flex-1 bg-transparent pl-12 pr-12 py-3 text-white placeholder-slate-500 outline-none text-base"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-300 text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-slate-900/50 border border-slate-600 checked:bg-gradient-to-r checked:from-cyan-500 checked:to-blue-600 cursor-pointer appearance-none"
                  disabled={isLoading}
                />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  Recuérdame
                </span>
              </label>
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10">{isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</span>
              {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <p className="text-center text-slate-400 text-sm">
              Datos de prueba:
              <br />
              <span className="text-cyan-400 font-medium">Usuario: admin</span>
              <br />
              <span className="text-cyan-400 font-medium">Contraseña: admin123</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>© 2025 CompuSoftNet. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
