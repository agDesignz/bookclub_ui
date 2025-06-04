import { Link } from "react-router";
import NextBook from "./NextBook";
import NextMeeting from "./NextMeeting";
import getAllBooks from "../../api/book/getAllBooks";

const Dashboard = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4 md-gap-8">
        <NextBook />
        <NextMeeting />
      </div>
      <div className="flex flex-col gap-4 md-gap-8">
        <Link to="/bookshelf">Bookshelf</Link>
      </div>
    </section>
  );
};
export default Dashboard;
