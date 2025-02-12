import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the context

const ProtectedRoute = () => {
  const { user } = useAuth();
  console.log("####",user);

  return !user ? (
    <>
      <h3>Header</h3>
      <Outlet />

      <h3>Footer</h3>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
