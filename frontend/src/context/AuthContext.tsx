import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser } from '../api/authApi';
import type { User, RegisterData, AuthContextType } from '../types/user.types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        setIsAdmin(parsedUser.rol === 'admin');
      } catch (error) {
        console.error('Error al cargar usuario:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // ==================== LOGIN ====================
  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser({ email, password });

      if (response.success && response.user) {
        setUser(response.user);
        setIsAuthenticated(true);
        setIsAdmin(response.user.rol === 'admin');
        
        // Guardar en localStorage
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        throw new Error(response.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      throw error;
    }
  };

  // ==================== REGISTRO ====================
  const register = async (data: RegisterData) => {
    try {
      const response = await registerUser(data);

      if (response.success && response.user) {
        // Automáticamente iniciar sesión después del registro
        setUser(response.user);
        setIsAuthenticated(true);
        setIsAdmin(false); // Los nuevos usuarios siempre son 'usuario'
        
        // Guardar en localStorage
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        throw new Error(response.message || 'Error al registrar usuario');
      }
    } catch (error) {
      throw error;
    }
  };

  // ==================== LOGOUT ====================
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}