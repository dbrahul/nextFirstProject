import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const AuthContext = createContext<{
  user: null;
  login: (userData: any) => void;
  logout: () => void;
} | null>(null);

import { ReactNode } from 'react';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else if (router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router]);

  const login = (userData: any) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
