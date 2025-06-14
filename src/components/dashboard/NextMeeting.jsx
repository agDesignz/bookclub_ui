import { useContext, useEffect, useState } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";
import locationIcon from "../../assets/icons/location.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import formatTime from "../../utils/formatTime";

const NextMeeting = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);
  const [displayTime, setDisplayTime] = useState(null);

  useEffect(() => {
    console.log("received meeting:", meeting);
    if (meeting) setDisplayTime(formatTime(meeting?.time));
  }, [meeting]);

  if (meetingLoading) {
    return <span className="loading loading-bars loading-xl"></span>;
  } else {
    return (
      <section className="book-card">
        <h2 className="book-card__main-heading">Next Meeting</h2>
        <div className="book-card__meeting-line">
          <img
            src={calendarIcon}
            alt="calendar icon"
            className="book-card__meeting-icon"
          />
          <p>{meeting?.date || "TBA"}</p>
          <p>{displayTime || "TBA"}</p>
        </div>
        <div className="book-card__meeting-line">
          <img
            src={locationIcon}
            alt="location icon"
            className="book-card__meeting-icon"
          />
          <p>{meeting?.location || "TBA"}</p>
        </div>
      </section>
    );
  }
};
export default NextMeeting;
