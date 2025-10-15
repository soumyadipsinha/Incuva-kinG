import { createContext, useContext, useMemo, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem("incuva_auth") === "true";
    } catch {
      return false;
    }
  });

  const login = () => {
    localStorage.setItem("incuva_auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("incuva_auth");
    setIsAuthenticated(false);
  };

  const value = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


