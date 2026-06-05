import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/?auth=login"
        replace
        state={{ authPrompt: "login", from: location.pathname }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
