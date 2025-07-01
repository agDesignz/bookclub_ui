import { Link } from "react-router";
import NextBook from "../components/dashboard/NextBook";
import NextMeeting from "../components/dashboard/NextMeeting";
import SearchIcon from "../components/icons/SearchIcon";
import BookshelfIcon from "../components/icons/BookshelfIcon";

const Home = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2 min-h-[75%]">
      <div className="grid gap-1 sm:gap-4 md-gap-8">
        <NextBook />
        <NextMeeting />
      </div>
      <div className="grid gap-2 sm:gap-4 md-gap-8">
        <Link className="db-link db-link--search" to="/search">
          <SearchIcon stroke="#fefcf5" />
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
export default Home;
