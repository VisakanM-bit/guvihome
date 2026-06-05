/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { SESSION_KEY, USERS_KEY } from "../config/sheets";
import {
  saveAccountSignup,
  logAccountLogin,
  verifyLoginWithSheet,
} from "../services/sheetsApi";
import { clearCareerPopupSeen } from "../utils/popupStorage";

const AuthContext = createContext(null);

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function findLocalUser(email, password) {
  const account = readUsers().find(
    (u) => u.email === email && u.password === password
  );
  if (!account) return null;
  return {
    name: account.name,
    email: account.email,
    phone: account.phone || "",
    password: account.password,
  };
}

function upsertLocalUser(account) {
  const users = readUsers().filter((u) => u.email !== account.email);
  users.push({
    name: account.name,
    email: account.email,
    phone: account.phone || "",
    password: account.password,
  });
  writeUsers(users);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  const signup = async ({ name, email, phone, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (users.some((u) => u.email === normalizedEmail)) {
      throw new Error("An account with this email already exists. Please sign in.");
    }

    const account = {
      name: name.trim(),
      email: normalizedEmail,
      phone: phone?.trim() || "",
      password,
    };

    try {
      await saveAccountSignup(account);
    } catch (err) {
      if (err.message?.includes("already exists")) {
        throw err;
      }
      console.warn("Could not reach Google Sheet; saving account locally.", err);
    }

    upsertLocalUser(account);
    setUser({
      name: account.name,
      email: account.email,
      phone: account.phone,
    });
    return account;
  };

  const login = async ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    let account = null;

    try {
      account = await verifyLoginWithSheet(normalizedEmail, password);
    } catch {
      /* Fall back to local accounts if the sheet cannot be reached. */
    }

    if (!account) {
      account = findLocalUser(normalizedEmail, password);
    }

    if (!account) {
      throw new Error(
        "Invalid email or password. If you just signed up, try again or check your credentials."
      );
    }

    upsertLocalUser({
      name: account.name,
      email: account.email,
      phone: account.phone || "",
      password,
    });

    try {
      await logAccountLogin(account);
    } catch {
      /* login should succeed even if sheet log fails */
    }

    setUser({
      name: account.name,
      email: account.email,
      phone: account.phone || "",
    });
    return account;
  };

  const logout = () => {
    clearCareerPopupSeen();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signup,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
