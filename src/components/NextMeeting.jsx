import { useContext } from "react";
import MeetingContext from "../context/meeting/MeetingContext";

const NextMeeting = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);

  return (
    <section className="db-card">
      <h2 className="db-card__main-heading">Current Book</h2>
      <div className="rounded-md bg-sky-800 p-2">
        <p>{meeting?.date || "TBA"}</p>
      </div>
      <div className="rounded-md bg-amber-700 p-2">
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
