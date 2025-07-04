import { createContext, useContext, useEffect, useState } from "react";
import getMeeting from "../../api/meeting/getMeeting";
import getAllMeetings from "../../api/meeting/getAllMeetings";
import insertMeeting from "../../api/meeting/insertMeeting";
import { useAuth } from "../auth/AuthContext";
import updateMeeting from "../../api/meeting/updateMeeting";
import deleteMeeting from "../../api/meeting/deleteMeeting";
import BooksContext from "../books/BooksContext";

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const { user } = useAuth();
  const [nextMeeting, setNextMeeting] = useState(null);
  const [meetingLoading, setMeetingLoading] = useState(false);
  const [allMeetings, setAllMeetings] = useState(null);
  const [allLoading, setAllLoading] = useState(false);
  const { archiveBook } = useContext(BooksContext);

  // Consolidate the following into a reducer ???
  const fetchNextMeetingData = async () => {
    setMeetingLoading(true);
    const meetingData = await getMeeting();
    // console.log("meetingData:", meetingData);
    if (meetingData) {
      setNextMeeting(meetingData);
    } else {
      setNextMeeting(null);
    }
    setMeetingLoading(false);
  };

  const fetchMeetingsData = async () => {
    setAllLoading(true);
    const allMeetingsData = await getAllMeetings();
    console.log("allMeetingsData:", allMeetingsData);
    if (allMeetingsData) {
      setAllMeetings(allMeetingsData);
    } else {
      setAllMeetings(null);
    }
    setAllLoading(false);
  };

  const createMeeting = async (input) => {
    const newMeeting = await insertMeeting(input);
    if (newMeeting) {
      // console.log("newMeeting:", newMeeting);
      input.book_id && archiveBook(input.book_id, true);
      setNextMeeting(newMeeting[0]);
      return newMeeting;
    }
  };

  const changeMeeting = async (input) => {
    const newMeeting = await updateMeeting(input);
    if (newMeeting) {
      setNextMeeting(newMeeting[0]);
      return newMeeting;
    }
  };

  const deleteCurrentMeeting = async (id) => {
    const result = await deleteMeeting(id);
    if (result === "success") {
      fetchNextMeetingData();
    }
  };

  // End reducer functions //

  useEffect(() => {
    fetchNextMeetingData();
  }, [user]);

  return (
    <MeetingContext.Provider
      value={{
        nextMeeting,
        allMeetings,
        allLoading,
        createMeeting,
        changeMeeting,
        deleteCurrentMeeting,
        meetingLoading,
        fetchMeetingsData,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export default MeetingContext;
