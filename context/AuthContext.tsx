"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AuthContextType = {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const savedLoginState = localStorage.getItem("isLogin");
    if (savedLoginState) {
      setIsLogin(JSON.parse(savedLoginState));
    }
    const handleBeforeUnload = () => {
      setIsLogin(false);
      localStorage.removeItem("isLogin");
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsLogin(false);
        localStorage.removeItem("isLogin");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const login = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
