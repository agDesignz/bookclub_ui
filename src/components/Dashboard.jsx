import NextBook from "./NextBook";
import NextMeeting from "./NextMeeting";

const Dashboard = () => {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <NextBook />
      <NextMeeting />
    </section>
  );
};
export default Dashboard;
