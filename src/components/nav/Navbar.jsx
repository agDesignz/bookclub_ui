import { Link } from "react-router";
import { useAuth } from "../../context/auth/AuthContext";
import Dropdown from "./Dropdown";
import Logo_1 from "../icons/Logo_1";

const Navbar = () => {
  const { user, userData, logOut } = useAuth();

  return (
    <nav className="navbar justify-between bg-transparent px-0">
      <Link
        to="/"
        className="text-[100%] xs:text-3xl font-mont flex items-center"
        aria-description="Logo and link to homepage"
      >
        <Logo_1 className="h-20" />
      </Link>
      {user ? (
        <div className="flex gap-4 items-center">
          <Dropdown
            username={user?.user_metadata?.username}
            logOut={logOut}
            isAdmin={userData.is_admin}
          />
        </div>
      ) : (
        <Link to="/profile">Sign-In</Link>
      )}
    </nav>
  );
};
export default Navbar;
