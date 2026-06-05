/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ADMIN_SESSION_KEY } from "../config/sheets";
import { signInAdmin, signOutSupabase } from "../services/supabaseApi";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(ADMIN_SESSION_KEY) || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (admin) {
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(admin));
    } else {
      localStorage.removeItem(ADMIN_SESSION_KEY);
    }
  }, [admin]);

  const loginAdmin = async ({ email, password }) => {
    const account = await signInAdmin({ email, password });
    setAdmin(account);
    return account;
  };

  const logoutAdmin = async () => {
    try {
      await signOutSupabase();
    } catch {
      /* complete local logout regardless */
    }
    setAdmin(null);
  };

  const value = useMemo(
    () => ({
      admin,
      isAdminAuthenticated: Boolean(admin),
      loginAdmin,
      logoutAdmin,
    }),
    [admin]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
