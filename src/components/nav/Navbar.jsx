import { Link } from "react-router";
import { useAuth } from "../../context/auth/AuthContext";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user, logOut } = useAuth();
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
