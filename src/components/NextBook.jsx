import { useContext } from "react";
import MeetingContext from "../context/meeting/MeetingContext";

const NextBook = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);
  return (
    <section className="db-card db-card--book">
      <h2 className="db-card__main-heading">Current Book</h2>
      <img
        className="db-card__book-img"
        src={`https://covers.openlibrary.org/b/id/${meeting?.book_id?.cover}-M.jpg`}
        alt={`cover of ${meeting?.book_id?.title}`}
      />
      <div className="db-card__content-text">
        <h3 className="db-card__book-title">
          {meeting?.book_id?.title || "TBA"}
        </h3>
        <h4 className="db-card__book-author">{meeting?.book_id?.author}</h4>
      </div>
    </section>
  );
};
export default NextBook;
