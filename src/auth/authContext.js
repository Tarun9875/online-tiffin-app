// src/auth/authContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { loginAdmin, logout as logoutService, getCurrentUser, getToken } from "./authService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentUser() || null);
  const [token, setToken] = useState(() => getToken() || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getCurrentUser());
    setToken(getToken());
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await loginAdmin(email, password); // mock frontend login
    if (response?.data?.user && response?.data?.token) {
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
    }
    return response;
  };

  // ✅ setAuth function provided
  const setAuth = ({ user, token }) => {
    if (user) setUser(user);
    if (token) setToken(token);

    if (user) localStorage.setItem("user", JSON.stringify(user));
    if (token) localStorage.setItem("token", token);
  };

  const logout = () => {
    logoutService();
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
