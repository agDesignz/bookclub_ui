import { Link } from "react-router";
import { useAuth } from "../../context/auth/AuthContext";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <header>
      <div className="container">
        <nav className="navbar justify-between bg-transparent px-0">
          <Link
            to="/"
            className="text-xl font-mont"
            aria-description="Logo and link to homepage"
          >
            Bookclub App
          </Link>
          {user ? (
            <button className="btn btn-primary" onClick={logOut}>
              Sign Out
            </button>
          ) : (
            <Link to="/profile">Sign-In</Link>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
