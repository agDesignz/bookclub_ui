import { useEffect } from "react";
import { useState } from "react";
import getAllProfiles from "../../api/profile/getAllProfiles";
import updateProfileApproved from "../../api/profile/updateProfileApproved";

const UserList = () => {
  const [profilesLoading, setProfilesLoading] = useState(null);
  const [profileData, setProfileData] = useState(null);

  // const handleDelete = (user) => {
  //   const confirmation = confirm("Delete?");
  //   if (confirmation) {
  //     console.log("user deleted:", user);
  //   } else {
  //     console.log("delete canceled");
  //   }
  // };

  const approveUser = async (profile) => {
    const confirmation = confirm(`Approve ${profile.username}?`);
    if (confirmation) {
      const result = await updateProfileApproved(profile.id);
      console.log("result:", result);
    } else {
      console.log("not approving");
      return;
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setProfilesLoading(true);
      const result = await getAllProfiles();
      if (result) {
        setProfileData(result);
        console.log("userList result:", result);
        setProfilesLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return profilesLoading ? (
    <div>UserList</div>
  ) : (
    <ul className="book-card p-0 border-none overflow-hidden gap-2">
      {profileData &&
        profileData.map((profile) => (
          <li
            key={profile.id}
            className="grid grid-cols-[1fr_auto] items-center h-full p-5 bg-gradient-to-tr from-lemon-400 to-lemon-500 text-blue-200 font-open text-xl md:text-2xl"
          >
            <div>
              <h3>{profile.username}</h3>
              <h3 className="truncate mt-1">{profile.email}</h3>
            </div>
            <div className="grid gap-2">
              {profile.is_approved ? (
                <h3>Approved</h3>
              ) : (
                <button
                  className="btn btn-soft btn-success rounded-full"
                  onClick={() => approveUser(profile)}
                >
                  Approve User
                </button>
              )}
              {/* <button
                className="btn btn-soft btn-error rounded-full"
                onClick={() => handleDelete(profile)}
              >
                Delete User
              </button> */}
            </div>
          </li>
        ))}
    </ul>
  );
};
export default UserList;
