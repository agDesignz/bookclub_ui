import { Link } from "react-router";

const Header = () => {
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
          <Link to="/profile">Sign-In</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
