import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight, X, User, MapPin, Phone, CreditCard, Building } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

interface LoginPageProps {
  onClose: () => void;
}

function LoginPage({ onClose }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();

  // Estados para Login
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Estados para Registro
  const [registerData, setRegisterData] = useState({
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    cedula: '',
    correo: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    clave: ''
  });

  // ==================== HANDLE LOGIN ====================
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await login(loginData.email, loginData.password);
      setSuccess('¡Inicio de sesión exitoso!');
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  // ==================== HANDLE REGISTER ====================
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // Validaciones
    if (registerData.cedula.length !== 10) {
      setError('La cédula debe tener 10 dígitos');
      setIsLoading(false);
      return;
    }

    if (registerData.telefono.length !== 10) {
      setError('El teléfono debe tener 10 dígitos');
      setIsLoading(false);
      return;
    }

    if (registerData.clave.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    try {
      await register(registerData);
      setSuccess('¡Registro exitoso! Redirigiendo...');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar usuario');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-background">
        <div className="auth-glow-1"></div>
        <div className="auth-glow-2"></div>
      </div>

      <div className="auth-container">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 border border-slate-600 z-50"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/50 mb-4">
            <div className="text-white font-bold text-3xl">CS</div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">CompuSoftNet</h1>
          <p className="text-slate-400 text-base sm:text-lg">Panel de Administración</p>
        </div>

        {/* TABS */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'login'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-slate-400 hover:text-white'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'register'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'bg-slate-800/50 text-slate-400 hover:text-white'
            }`}
          >
            Registrarse
          </button>
        </div>

        <div className="auth-card">
          {/* ==================== FORMULARIO LOGIN ==================== */}
          {activeTab === 'login' && (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Usuario o Email
                </label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <Mail className="form-icon" />
                    <input
                      id="email"
                      type="text"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder="admin"
                      className="form-input"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <Lock className="form-icon" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      placeholder="••••••••"
                      className="form-input"
                      disabled={isLoading}
                      required
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

              {error && <div className="alert alert-error">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button type="submit" disabled={isLoading} className="btn-primary">
                <span>{isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</span>
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>

              <div className="text-center pt-4 border-t border-slate-700/50">
                <p className="text-slate-400 text-sm">
                  Datos de prueba: <span className="text-cyan-400 font-medium">admin / admin123</span>
                </p>
              </div>
            </form>
          )}

          {/* ==================== FORMULARIO REGISTRO ==================== */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {/* Nombres */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Primer Nombre *</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <User className="form-icon" />
                      <input
                        type="text"
                        value={registerData.nombre1}
                        onChange={(e) => setRegisterData({ ...registerData, nombre1: e.target.value })}
                        placeholder="Juan"
                        className="form-input"
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Segundo Nombre</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <User className="form-icon" />
                      <input
                        type="text"
                        value={registerData.nombre2}
                        onChange={(e) => setRegisterData({ ...registerData, nombre2: e.target.value })}
                        placeholder="Carlos"
                        className="form-input"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Apellidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Primer Apellido *</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <User className="form-icon" />
                      <input
                        type="text"
                        value={registerData.apellido1}
                        onChange={(e) => setRegisterData({ ...registerData, apellido1: e.target.value })}
                        placeholder="Pérez"
                        className="form-input"
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Segundo Apellido</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <User className="form-icon" />
                      <input
                        type="text"
                        value={registerData.apellido2}
                        onChange={(e) => setRegisterData({ ...registerData, apellido2: e.target.value })}
                        placeholder="García"
                        className="form-input"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cédula y Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Cédula *</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <CreditCard className="form-icon" />
                      <input
                        type="text"
                        value={registerData.cedula}
                        onChange={(e) => setRegisterData({ ...registerData, cedula: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="1234567890"
                        className="form-input"
                        disabled={isLoading}
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Teléfono *</label>
                  <div className="form-input-wrapper">
                    <div className="form-input-glow"></div>
                    <div className="form-input-container">
                      <Phone className="form-icon" />
                      <input
                        type="tel"
                        value={registerData.telefono}
                        onChange={(e) => setRegisterData({ ...registerData, telefono: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="0999999999"
                        className="form-input"
                        disabled={isLoading}
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Correo Electrónico *</label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <Mail className="form-icon" />
                    <input
                      type="email"
                      value={registerData.correo}
                      onChange={(e) => setRegisterData({ ...registerData, correo: e.target.value })}
                      placeholder="usuario@ejemplo.com"
                      className="form-input"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dirección y Ciudad */}
              <div className="form-group">
                <label className="form-label">Dirección *</label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <MapPin className="form-icon" />
                    <input
                      type="text"
                      value={registerData.direccion}
                      onChange={(e) => setRegisterData({ ...registerData, direccion: e.target.value })}
                      placeholder="Av. Principal 123"
                      className="form-input"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Ciudad *</label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <Building className="form-icon" />
                    <input
                      type="text"
                      value={registerData.ciudad}
                      onChange={(e) => setRegisterData({ ...registerData, ciudad: e.target.value })}
                      placeholder="Quito"
                      className="form-input"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contraseña */}
              <div className="form-group">
                <label className="form-label">Contraseña *</label>
                <div className="form-input-wrapper">
                  <div className="form-input-glow"></div>
                  <div className="form-input-container">
                    <Lock className="form-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={registerData.clave}
                      onChange={(e) => setRegisterData({ ...registerData, clave: e.target.value })}
                      placeholder="••••••••"
                      className="form-input"
                      disabled={isLoading}
                      minLength={6}
                      required
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

              {error && <div className="alert alert-error">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button type="submit" disabled={isLoading} className="btn-primary">
                <span>{isLoading ? 'Registrando...' : 'Crear Cuenta'}</span>
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>

              <p className="text-center text-slate-400 text-xs pt-2">
                Al registrarte, aceptas nuestros términos y condiciones
              </p>
            </form>
          )}
        </div>

        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>© 2025 CompuSoftNet. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;