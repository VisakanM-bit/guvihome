import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { consumePendingLead } from "../utils/expertLead";
import { FaEnvelope, FaLock } from "react-icons/fa";

const inputClass =
  "w-full rounded-2xl border border-slate-600 bg-[#1e2c40] pl-12 pr-4 py-4 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      consumePendingLead();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Sign In" subtitle="Enter your credentials to continue">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field icon={FaEnvelope} label="Email">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@email.com"
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
            placeholder="Password"
          />
        </Field>

        {error && (
          <p className="rounded-xl bg-red-500/10 px-3 py-2.5 text-xs font-bold text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 py-4 text-base font-black text-white shadow-xl shadow-blue-500/20 transition hover:from-blue-600 hover:to-blue-500 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-slate-400">
        New here?{" "}
        <Link to="/signup" className="font-bold text-blue-300 hover:underline">
          Create account
        </Link>
      </p>
    </AuthLayout>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
        {children}
      </div>
    </div>
  );
}

export default Login;
