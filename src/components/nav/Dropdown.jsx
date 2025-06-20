import UserIcon from "../icons/UserIcon";
import { Link, useNavigate } from "react-router";

const Dropdown = ({ logOut, isAdmin }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="tn">
        <UserIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-50 w-32 p-2 mt-4 gap-4 shadow-sm bg-gradient-to-tr from-blue-400 to-blue-500"
      >
        {isAdmin && (
          <li>
            <Link to="/admin" className="btn btn-ghost btn-warning">
              Admin
            </Link>
          </li>
        )}
        <li>
          <button className="btn btn-ghost btn-error" onClick={handleLogout}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
