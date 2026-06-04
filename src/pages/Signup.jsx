import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { consumePendingLead } from "../utils/expertLead";
import { PENDING_LEAD_KEY } from "../config/sheets";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function readPendingLead() {
  try {
    const raw = sessionStorage.getItem(PENDING_LEAD_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const pending = readPendingLead();
  const defaultName =
    pending?.name ||
    [pending?.firstName, pending?.lastName].filter(Boolean).join(" ");

  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(pending?.email || "");
  const [phone, setPhone] = useState(pending?.phone || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await signup({ name, email, phone, password });
      consumePendingLead();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      badge={pending ? "Pre-filled from your request" : null}
      title="Create account"
      subtitle="Create your Jawa EdTech account"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field icon={FaUser} label="Full name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={FaEnvelope} label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={FaPhone} label="Phone (optional)">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={FaLock} label="Password">
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field icon={FaLock} label="Confirm password">
          <input
            type="password"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputClass}
          />
        </Field>

        {error && (
          <p className="rounded-xl bg-red-500/10 px-3 py-2 text-xs font-bold text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 py-4 text-base font-black text-white shadow-xl shadow-blue-500/20 transition hover:from-blue-600 hover:to-blue-500 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account & continue"}
        </button>
      </form>

      <p className="mt-5 text-center text-xs text-slate-400">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-300 hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}

const inputClass =
  "w-full rounded-2xl border border-slate-600 bg-[#1e2c40] pl-12 pr-4 py-3.5 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20";

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xs" />
        {children}
      </div>
    </div>
  );
}

export default Signup;
