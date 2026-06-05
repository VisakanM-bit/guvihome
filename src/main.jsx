import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { AdminAuthProvider } from "./context/AdminAuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AdminRoute from "./components/ProtectedRoute/AdminRoute"
import ScrollToHash from "./components/ScrollToHash/ScrollToHash"
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker"
import FloatingWhatsapp from "./components/FloatingWhatsapp/FloatingWhatsapp"
import App from "./App"
import Programs from "./pages/Programs"
import CourseDetail from "./pages/CourseDetail"
import { PremiumAboutEdtechPage, PremiumCareerPage, PremiumInternshipPage, PremiumProjectPage } from "./pages/PremiumDetailPages"
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/AdminDashboard"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AdminAuthProvider>
        <ScrollToHash />
        <AnalyticsTracker />
        <FloatingWhatsapp />
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<CourseDetail />} />
        <Route path="/internships" element={<Navigate to="/internships/human-resource-internship" replace />} />
        <Route path="/internships/:slug" element={<PremiumInternshipPage />} />
        <Route path="/practice-hub" element={<Navigate to="/projects/industry-project-lab" replace />} />
        <Route path="/projects/:slug" element={<PremiumProjectPage />} />
        <Route path="/placement-assistance" element={<PremiumCareerPage pageKey="placement" />} />
        <Route path="/mentorship" element={<PremiumCareerPage pageKey="mentorship" />} />
        <Route path="/career-services" element={<PremiumCareerPage pageKey="careerServices" />} />
        <Route path="/about-edtech" element={<PremiumAboutEdtechPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<PrivacyPolicy />} />
        <Route path="/auth" element={<Navigate to="/?auth=login" replace />} />
        <Route path="/login" element={<Navigate to="/?auth=login" replace />} />
        <Route path="/signup" element={<Navigate to="/?auth=signup" replace />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        </Routes>
      </AdminAuthProvider>
    </AuthProvider>
  </BrowserRouter>
)
