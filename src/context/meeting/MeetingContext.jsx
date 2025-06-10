import { createContext, useEffect, useState } from "react";
import getMeeting from "../../api/meeting/getMeeting";
import { useAuth } from "../auth/AuthContext";

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const { user } = useAuth();
  const [meeting, setMeeting] = useState(null);
  const [meetingLoading, setMeetingLoading] = useState(false);

  useEffect(() => {
    const fetchMeetingData = async () => {
      setMeetingLoading(true);
      const meetingData = await getMeeting();
      if (meetingData) {
        setMeeting(meetingData);
        setMeetingLoading(false);
      }
    };
    fetchMeetingData();
  }, [user]);

  return (
    <MeetingContext.Provider value={{ meeting, meetingLoading }}>
      {children}
    </MeetingContext.Provider>
  );
};

export default MeetingContext;
