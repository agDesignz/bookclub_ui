import { useContext } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";

const NextBook = () => {
  const { nextMeeting, meetingLoading } = useContext(MeetingContext);

  return (
    <section className="book-card book-card--dashboard">
      <h2 className="book-card__main-heading">Current Book</h2>
      {meetingLoading ? (
        <div className="book-card__meeting-line col-span-full justify-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : nextMeeting ? (
        <>
          <img
            className="book-card__book-img"
            src={`https://covers.openlibrary.org/b/id/${nextMeeting?.book_id?.cover}-M.jpg`}
            alt={`cover of ${nextMeeting?.book_id?.title}`}
          />
          <div className="book-card__content-text">
            <h3 className="book-card__book-title">
              {nextMeeting?.book_id?.title || "TBA"}
            </h3>
            <h4 className="book-card__book-author">
              {nextMeeting?.book_id?.author}
            </h4>
          </div>
        </>
      ) : (
        <div className="book-card__meeting-line col-span-full justify-center">
          <p>No Book Selected</p>
        </div>
      )}
    </section>
  );
};
export default NextBook;
