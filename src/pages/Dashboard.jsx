import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaHeadset,
  FaTrophy,
  FaChartLine,
  FaPlayCircle,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer1 from "../components/Footer1/Footer1";
import { useAuth } from "../context/AuthContext";
import { IMAGES } from "../config/images";

const WIDGETS = [
  {
    icon: FaBookOpen,
    title: "My courses",
    desc: "Resume where you left off",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: FaHeadset,
    title: "Expert call",
    desc: "Your session is scheduled",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: FaTrophy,
    title: "Achievements",
    desc: "3 badges unlocked",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: FaChartLine,
    title: "Progress",
    desc: "Track weekly goals",
    color: "from-blue-500 to-cyan-600",
  },
];

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-slate-50 to-white min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-slate-900 text-white p-8 sm:p-10">
                <img
                  src={IMAGES.learner3}
                  alt=""
                  className="absolute right-0 bottom-0 w-48 h-48 object-cover opacity-40 rounded-tl-3xl"
                />
                <p className="text-emerald-200 text-sm font-bold uppercase tracking-wide">
                  Member dashboard
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold mt-2 relative z-10">
                  Welcome back, {user?.name?.split(" ")[0]}
                </h1>
                <p className="mt-3 text-emerald-100/90 max-w-md relative z-10">
                  Your account is active. Explore programs and continue your
                  learning journey.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition"
                  >
                    <FaPlayCircle /> Browse programs
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 border border-white/40 font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition"
                  >
                    Homepage
                  </Link>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {WIDGETS.map(({ icon: Icon, title, desc, color }) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-3`}
                    >
                      <Icon />
                    </div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Your profile</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-slate-400">Name</dt>
                    <dd className="font-semibold text-slate-800">{user?.name}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400">Email</dt>
                    <dd className="font-semibold text-slate-800">{user?.email}</dd>
                  </div>
                  {user?.phone && (
                    <div>
                      <dt className="text-slate-400">Phone</dt>
                      <dd className="font-semibold text-slate-800">{user.phone}</dd>
                    </div>
                  )}
                </dl>
                <button
                  type="button"
                  onClick={logout}
                  className="mt-6 w-full py-2.5 text-red-600 font-semibold border border-red-200 rounded-xl hover:bg-red-50 transition"
                >
                  Sign out
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img
                  src={IMAGES.tech}
                  alt="Recommended program"
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs font-bold text-green-600 uppercase">
                    Recommended
                  </p>
                  <p className="font-bold text-slate-900 mt-1">
                    AI & Machine Learning
                  </p>
                  <Link
                    to="/programs"
                    className="text-sm text-green-600 font-semibold mt-2 inline-block hover:underline"
                  >
                    View program →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}

export default Dashboard;
