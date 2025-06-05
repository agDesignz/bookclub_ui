import { Link } from "react-router";
import { useAuth } from "../../context/auth/AuthContext";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

const Navbar = () => {
  const { user, userData, logOut } = useAuth();

  useEffect(() => {
    // console.log("user:", user); // Supabase core user
    // console.log("userData", userData); // Custom claim from JWT
  }, [user]);
  return (
    <nav className="navbar justify-between bg-transparent px-0">
      <Link
        to="/"
        className="text-xl font-mont"
        aria-description="Logo and link to homepage"
      >
        Bookclub App
      </Link>
      {user ? <Dropdown logOut={logOut} /> : <Link to="/profile">Sign-In</Link>}
    </nav>
  );
};
export default Navbar;
