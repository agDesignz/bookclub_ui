import Auth from "../components/auth/Auth";
import ProfileDetails from "../components/profile/ProfileDetails";
import { useAuth } from "../context/auth/AuthContext";

const Profile = () => {
  const { session } = useAuth();
  return (
    <section className="profile h-full md:my-auto">
      {session ? (
        <div className="grid md:grid-cols-2">
          <ProfileDetails user={session.user} />
        </div>
      ) : (
        <Auth />
      )}
    </section>
  );
};
export default Profile;
