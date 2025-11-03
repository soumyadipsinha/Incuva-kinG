import { createContext, useContext, useMemo, useState, useEffect } from "react";
import api from "@/services/api";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type AuthContextValue = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, phone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (firstName: string, lastName: string, email: string, phone: string, password: string) => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("incuva_token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await api.get('/api/auth/profile');
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error('Auth check error:', error);
      localStorage.removeItem("incuva_token");
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, phone: string, password: string) => {
    try {
      const response = await api.post('/api/auth/login', {
        email,
        phone,
        password,
      });

      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem("incuva_token", response.data.token);
      }

      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (firstName: string, lastName: string, email: string, phone: string, password: string) => {
    try {
      const response = await api.post('/api/auth/signup', {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem("incuva_token", response.data.token);
      }

      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem("incuva_token");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({ isAuthenticated, user, login, logout, signup, loading }),
    [isAuthenticated, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


