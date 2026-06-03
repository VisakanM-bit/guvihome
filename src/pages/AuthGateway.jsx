import { Link, useSearchParams } from "react-router-dom";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { FaSignInAlt, FaUserPlus, FaShieldAlt } from "react-icons/fa";

function AuthGateway() {
  const [params] = useSearchParams();
  const fromExpert = params.get("from") === "expert";

  return (
    <AuthLayout
      badge={fromExpert ? "✓ Expert request saved" : null}
      title="Welcome back"
      subtitle={
        fromExpert
          ? "Sign in or create an account to continue."
          : "Choose how you'd like to continue."
      }
    >
      {fromExpert && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs leading-relaxed">
          <FaShieldAlt className="inline mr-1.5 text-emerald-600" />
          Your expert request is saved. Complete sign-in to access your dashboard.
        </div>
      )}

      <div className="space-y-2.5">
        <Link
          to="/login"
          className="flex items-center justify-center gap-2 w-full border-2 border-emerald-500 text-emerald-700 text-sm font-bold py-3 rounded-xl hover:bg-emerald-50 transition"
        >
          <FaSignInAlt className="text-sm" />
          I already have an account
        </Link>

        <Link
          to="/signup"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold py-3 rounded-xl shadow-md shadow-emerald-500/20 hover:brightness-105 transition"
        >
          <FaUserPlus className="text-sm" />
          Create a new account
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[11px] text-slate-500">
        <div className="py-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <p className="font-bold text-slate-800 text-sm">Free</p>
          Career consultation
        </div>
        <div className="py-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <p className="font-bold text-slate-800 text-sm">Live</p>
          Mentor sessions
        </div>
      </div>
    </AuthLayout>
  );
}

export default AuthGateway;
