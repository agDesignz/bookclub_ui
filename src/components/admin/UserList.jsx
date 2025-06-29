import { useEffect } from "react";
import { useState } from "react";
import getAllProfiles from "../../api/profile/getAllProfiles";
import updateProfileApproved from "../../api/profile/updateProfileApproved";

const UserList = () => {
  const [profilesLoading, setProfilesLoading] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const fetchUsers = async () => {
    setProfilesLoading(true);
    const result = await getAllProfiles();
    if (result) {
      setProfileData(result);
      setProfilesLoading(false);
    }
  };
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
      result === "success" &&
        setProfileData((prevState) =>
          prevState.map((user) =>
            user.id === profile.id ? { ...user, is_approved: true } : user
          )
        );
    } else {
      console.log("not approving");
      return;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return profilesLoading ? (
    <div>UserList</div>
  ) : (
    <ul className="book-card grid-cols-1 p-0 border-none overflow-hidden gap-2">
      {profileData &&
        profileData.map((profile) => (
          <li
            key={profile.id}
            className="grid grid-cols-[1fr_auto] gap-y-1 gap-x-4 items-center h-full p-4 bg-gradient-to-tr from-lemon-400 to-lemon-500 text-blue-200 font-open text-base md:text-2xl"
          >
            <h3>{profile.username}</h3>

            {profile.is_approved ? (
              <h3>Approved</h3>
            ) : (
              <button
                className="btn btn-soft btn-success btn-sm md:btn-md rounded-full"
                onClick={() => approveUser(profile)}
              >
                Approve
              </button>
            )}
            {/* <button
                className="btn btn-soft btn-error rounded-full"
                onClick={() => handleDelete(profile)}
                >
                Delete User
                </button> */}
            <h3 className="col-span-full mt-1">{profile.email}</h3>
          </li>
        ))}
    </ul>
  );
};
export default UserList;
