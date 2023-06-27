import { IUserData } from '@/interfaces/services';
import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';


interface AuthContextProps {
  userData: IUserData | null;
  login: (user: IUserData) => void;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextProps>({
  userData: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider  = ({ children }:{
  children: React.ReactNode
}) => {
  const router = useRouter()
  const [userData, setUserData] = useState<IUserData | null>(null);

  const login = (user: IUserData) => {
    setUserData(user);
  };

  const logout = () => {
    setUserData(null);
    router.push("/login");
    localStorage.removeItem("psg_auth_token");
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
