// Prevents logged-in users from accessing routes like login/signup
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  // If user is not authenticated, allow access to the route
  if (token === null) {
    return children;
  } else {
    // If authenticated, redirect to dashboard
    return <Navigate to="/dashboard/my-profile" />;
  }
}

export default OpenRoute;
