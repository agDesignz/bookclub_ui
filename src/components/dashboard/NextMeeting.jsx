import { useContext, useEffect, useState } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";
import locationIcon from "../../assets/icons/location.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import clockIcon from "../../assets/icons/clock.svg";
import formatTime from "../../utils/formatTime";

const NextMeeting = () => {
  const { nextMeeting, meetingLoading } = useContext(MeetingContext);
  const [displayTime, setDisplayTime] = useState(null);

  useEffect(() => {
    if (nextMeeting?.time) setDisplayTime(formatTime(nextMeeting?.time));
  }, [nextMeeting]);

  if (meetingLoading) {
    return <span className="loading loading-bars loading-xl"></span>;
  } else {
    return (
      <section className="book-card book-card--dashboard min-[350px]:grid-cols-[1fr_1fr]">
        <h2 className="book-card__main-heading">Next Meeting</h2>
        {nextMeeting ? (
          <>
            <div className="book-card__meeting-line">
              <img
                src={calendarIcon}
                alt="calendar icon"
                className="book-card__meeting-icon"
              />
              <p>{nextMeeting?.date || "TBA"}</p>
            </div>
            <div className="book-card__meeting-line">
              <img
                src={clockIcon}
                alt="time icon"
                className="book-card__meeting-icon"
              />
              <p>{displayTime || "TBA"}</p>
            </div>
            <div className="book-card__meeting-line col-span-full">
              <img
                src={locationIcon}
                alt="location icon"
                className="book-card__meeting-icon"
              />
              <p>{nextMeeting?.location || "TBA"}</p>
            </div>
          </>
        ) : (
          <div className="book-card__meeting-line col-span-full justify-center">
            <p>No Meeting Data</p>
          </div>
        )}
      </section>
    );
  }
};
export default NextMeeting;
