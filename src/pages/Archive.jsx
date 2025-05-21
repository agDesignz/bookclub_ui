import { useEffect } from "react";
import getAllMeetings from "../api/meeting/getAllMeetings";

const Archive = () => {
  useEffect(() => {
    const fetchMeetings = async () => {
      await getAllMeetings();
    };
    fetchMeetings();
  }, []);
  return <div>Archive</div>;
};
export default Archive;
