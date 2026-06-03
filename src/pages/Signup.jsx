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
      navigate("/", { replace: true });
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
      subtitle="Start learning with mentors & placement support"
    >
      <form onSubmit={handleSubmit} className="space-y-3">
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
          <p className="text-red-600 text-xs font-medium bg-red-50 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:brightness-105 disabled:opacity-60 text-white text-sm font-bold py-3 rounded-xl shadow-md transition"
        >
          {loading ? "Creating account..." : "Create account & continue"}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500 mt-4">
        Have an account?{" "}
        <Link to="/login" className="text-emerald-600 font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}

const inputClass =
  "w-full border border-slate-200 rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15";

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
        {children}
      </div>
    </div>
  );
}

export default Signup;
