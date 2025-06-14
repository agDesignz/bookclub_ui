import { Link } from "react-router";
import NextBook from "./NextBook";
import NextMeeting from "./NextMeeting";

const Dashboard = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="grid gap-4 md-gap-8">
        <NextBook />
        <NextMeeting />
      </div>
      <div className="grid gap-4 md-gap-8">
        <Link to="/bookshelf">Bookshelf</Link>
        <Link to="/search">Search</Link>
      </div>
    </section>
  );
};
export default Dashboard;
