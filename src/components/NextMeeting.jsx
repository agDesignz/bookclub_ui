import { useContext } from "react";
import MeetingContext from "../context/meeting/MeetingContext";
import CalendarIcon from "./icons/CalendarIcon";

const NextMeeting = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);

  return (
    <section className="db-card">
      <h2 className="db-card__main-heading">Next Meeting</h2>
      <div className="db-card__meeting-line">
        <CalendarIcon fill="none" size="48" />
        <p>{meeting?.date || "TBA"}</p>
        <p>{meeting?.time || "TBA"}</p>
      </div>
      <div className="rounded-md bg-violet-900 p-2">
        <p className="">{meeting?.location || "TBA"}</p>
      </div>
      {/* {isAdmin && (
          <Link className="btn btn-outline grow h-auto min-h-10" to="/admin">
            Update or Create Meeting
          </Link>
        )} */}
    </section>
  );
};
export default NextMeeting;
