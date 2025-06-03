import UserIcon from "../icons/UserIcon";

const Dropdown = ({ logOut }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <UserIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-1 w-32 p-2 mt-4 gap-4 shadow-sm"
      >
        <li>
          <button className="btn btn-primary" onClick={logOut}>
            Sign Out
          </button>
        </li>
        <li>
          <button className="btn btn-soft btn-error" onClick={logOut}>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
