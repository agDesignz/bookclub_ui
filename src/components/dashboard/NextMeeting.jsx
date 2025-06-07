import { useContext } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";
// import CalendarIcon from "../icons/CalendarIcon";
// import LocationIcon from "../icons/LocationIcon";
import locationIcon from "../../assets/icons/location.svg";
import calendarIcon from "../../assets/icons/calendar.svg";

const NextMeeting = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);

  return (
    <section className="book-card">
      <h2 className="book-card__main-heading">Next Meeting</h2>
      <div className="book-card__meeting-line">
        {/* <CalendarIcon fill="none" size="48" /> */}
        <img
          src={calendarIcon}
          alt="calendar icon"
          className="book-card__meeting-icon"
        />
        <p>{meeting?.date || "TBA"}</p>
        <p>{meeting?.time || "TBA"}</p>
      </div>
      <div className="book-card__meeting-line">
        {/* <LocationIcon fill="none" size="48" /> */}
        <img
          src={locationIcon}
          alt="location icon"
          className="book-card__meeting-icon"
        />
        <p>{meeting?.location || "TBA"}</p>
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
