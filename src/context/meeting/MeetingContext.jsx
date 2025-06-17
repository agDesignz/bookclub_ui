import { createContext, useEffect, useState } from "react";
import getMeeting from "../../api/meeting/getMeeting";
import insertMeeting from "../../api/meeting/insertMeeting";
import { useAuth } from "../auth/AuthContext";
import updateMeeting from "../../api/meeting/updateMeeting";
import deleteMeeting from "../../api/meeting/deleteMeeting";

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const { user } = useAuth();
  const [meeting, setMeeting] = useState(null);
  const [meetingLoading, setMeetingLoading] = useState(false);

  // Consolidate the following into a reducer ???
  const fetchMeetingData = async () => {
    setMeetingLoading(true);
    const meetingData = await getMeeting();
    if (meetingData) {
      // console.log("meetingData:", meetingData);
      setMeeting(meetingData);
      setMeetingLoading(false);
    }
  };

  const createMeeting = async (input) => {
    const newMeeting = await insertMeeting(input);
    if (newMeeting) {
      // console.log("newMeeting:", newMeeting);
      setMeeting(newMeeting[0]);
      return newMeeting;
    }
  };

  const changeMeeting = async (input) => {
    const newMeeting = await updateMeeting(input);
    if (newMeeting) {
      setMeeting(newMeeting[0]);
      return newMeeting;
    }
  };

  const deleteCurrentMeeting = async (id) => {
    const result = await deleteMeeting(id);
    if (result === "success") {
      fetchMeetingData();
    }
  };

  // End reducer functions //

  useEffect(() => {
    fetchMeetingData();
  }, [user]);

  return (
    <MeetingContext.Provider
      value={{
        meeting,
        fetchMeetingData,
        createMeeting,
        changeMeeting,
        deleteCurrentMeeting,
        meetingLoading,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export default MeetingContext;
