import { useContext } from "react";
import MeetingContext from "../context/MeetingContext";

const NextMeeting = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);

  return (
    <section className="grid md:items-start gap-4 w-full grid-cols-[max-content_1fr]">
      <div className="flex flex-col gap-2 items-stretch text-center">
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
      </div>
    </section>
  );
};
export default NextMeeting;
