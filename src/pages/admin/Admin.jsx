import MeetingForm from "../../components/admin/MeetingForm";
import UserList from "../../components/admin/UserList";

const Admin = () => {
  return (
    <section className="md:my-auto grid gap-8 lg:grid-cols-2">
      <div className="grid gap-4 md-gap-8">
        <MeetingForm />
      </div>
      <div className="grid gap-4 md-gap-8">
        <UserList />
      </div>
    </section>
  );
};
export default Admin;
