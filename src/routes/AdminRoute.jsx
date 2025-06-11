import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/auth/AuthContext";

const AdminRoute = () => {
  const { userData, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner, or null
  }

  return userData?.is_admin ? <Outlet /> : <Navigate to="/" />;
};
export default AdminRoute;
