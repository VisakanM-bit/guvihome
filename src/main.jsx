import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import ScrollToHash from "./components/ScrollToHash/ScrollToHash"
import App from "./App"
import Programs from "./pages/Programs"
import CourseDetail from "./pages/CourseDetail"
import Dashboard from "./pages/Dashboard"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<CourseDetail />} />
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
      </Routes>
    </AuthProvider>
  </BrowserRouter>
)
