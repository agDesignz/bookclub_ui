import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/auth/AuthContext";

const AdminRoute = () => {
  const { userData, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  return userData?.is_admin ? <Outlet /> : <Navigate to="/" />;
};
export default AdminRoute;
