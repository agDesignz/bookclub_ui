import { useContext, useEffect } from "react";
import MeetingContext from "../context/meeting/MeetingContext";
import ArchiveBox from "../components/archive/ArchiveBox";

const Archive = () => {
  const { allMeetings, allLoading, fetchMeetingsData } =
    useContext(MeetingContext);

  useEffect(() => {
    fetchMeetingsData();
  }, []);
  if (allLoading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  return (
    <section className="grid lg:grid-cols-2 gap-5">
      {allMeetings &&
        allMeetings.map((meeting) => (
          <ArchiveBox key={meeting.id} meeting={meeting} />
        ))}
    </section>
  );
};
export default Archive;
