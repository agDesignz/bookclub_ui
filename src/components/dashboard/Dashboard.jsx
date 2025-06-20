import { Link } from "react-router";
import NextBook from "./NextBook";
import NextMeeting from "./NextMeeting";
import SearchIcon from "../icons/SearchIcon";
import BookshelfIcon from "../icons/BookshelfIcon";

const Dashboard = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="grid gap-4 md-gap-8">
        <NextBook />
        <NextMeeting />
      </div>
      <div className="grid gap-4 md-gap-8">
        <Link className="db-link db-link--search" to="/search">
          <SearchIcon />
          Search
        </Link>
        <Link className="db-link db-link--bookshelf" to="/bookshelf">
          <BookshelfIcon fill="#fefcf5" />
          Bookshelf
        </Link>
      </div>
    </section>
  );
};
export default Dashboard;
