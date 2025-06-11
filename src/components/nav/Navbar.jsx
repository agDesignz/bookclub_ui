import { Link } from "react-router";
import { useAuth } from "../../context/auth/AuthContext";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

const Navbar = () => {
  const { user, userData, logOut } = useAuth();

  // useEffect(() => {
  //   console.log("user:", user); // Supabase core user
  //   console.log("userData", userData); // Custom claim from JWT
  // }, [user]);
  return (
    <nav className="navbar justify-between bg-transparent px-0">
      <Link
        to="/"
        className="text-xl font-mont"
        aria-description="Logo and link to homepage"
      >
        Bookclub App
      </Link>
      {user ? (
        <div className="flex gap-4 items-center">
          <h3 className="text-lg">{user?.user_metadata?.username}</h3>
          <Dropdown logOut={logOut} isAdmin={userData.is_admin} />
        </div>
      ) : (
        <Link to="/profile">Sign-In</Link>
      )}
    </nav>
  );
};
export default Navbar;
