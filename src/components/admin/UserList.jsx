import { useEffect } from "react";
import { useState } from "react";
import getAllProfiles from "../../api/profile/getAllProfiles";

const UserList = () => {
  const [profilesLoading, setProfilesLoading] = useState(null);
  const [profileData, setProfileData] = useState(null);

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
            className="flex justify-between h-full p-5 bg-blue-400"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6">
                  {profile.username}
                </p>
                <p className="mt-1 truncate text-xs leading-5">
                  {profile.email}
                </p>
              </div>
            </div>
            <div className="flex min-w-0 gap-4">
              {profile.is_approved ? (
                <p>Approved</p>
              ) : (
                <button>Approve User</button>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};
export default UserList;
