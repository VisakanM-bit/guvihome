import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

function AdminRoute({ children }) {
  const { isAdminAuthenticated } = useAdminAuth();
  const location = useLocation();

  if (!isAdminAuthenticated) {
    return <Navigate to="/" replace state={{ adminLogin: true, from: location.pathname }} />;
  }

  return children;
}

export default AdminRoute;
