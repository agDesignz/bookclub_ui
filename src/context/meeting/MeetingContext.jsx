import { createContext, useEffect, useState } from "react";
import getMeeting from "../../api/meeting/getMeeting";
import insertMeeting from "../../api/meeting/getMeeting";
import { useAuth } from "../auth/AuthContext";

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const { user } = useAuth();
  const [meeting, setMeeting] = useState(null);
  const [meetingLoading, setMeetingLoading] = useState(false);

  const fetchMeetingData = async () => {
    setMeetingLoading(true);
    const meetingData = await getMeeting();
    if (meetingData) {
      setMeeting(meetingData);
      setMeetingLoading(false);
    }
  };

  const createMeeting = async (input) => {
    const newMeeting = await insertMeeting(input);
    if (newMeeting) console.log("New Meeting Success!");
  };

  useEffect(() => {
    fetchMeetingData();
  }, [user]);

  return (
    <MeetingContext.Provider
      value={{ meeting, fetchMeetingData, createMeeting, meetingLoading }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export default MeetingContext;
