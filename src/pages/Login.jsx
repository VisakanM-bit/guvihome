import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { consumePendingLead } from "../utils/expertLead";
import { FaEnvelope, FaLock } from "react-icons/fa";

const inputClass =
  "w-full border border-slate-200 rounded-lg pl-10 pr-3 py-2.5 text-sm text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition";

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
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in"
      subtitle="Access your personalized learning dashboard"
    >
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              placeholder="••••••••"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-xs font-medium bg-red-50 px-3 py-2.5 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:opacity-60 text-white text-sm font-bold py-3 rounded-xl shadow-md shadow-emerald-500/20 transition"
        >
          {loading ? "Signing in..." : "Sign in & go to homepage"}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500 mt-5">
        New here?{" "}
        <Link to="/signup" className="text-emerald-600 font-bold hover:underline">
          Create account
        </Link>
      </p>
      <Link
        to="/auth"
        className="block text-center text-xs text-slate-400 hover:text-slate-600 mt-2"
      >
        ← Other options
      </Link>
    </AuthLayout>
  );
}

export default Login;
