import { useContext } from "react";
import MeetingContext from "../../context/meeting/MeetingContext";

const NextBook = () => {
  const { meeting, meetingLoading } = useContext(MeetingContext);
  return (
    <section className="book-card book-card--book">
      <h2 className="book-card__main-heading">Current Book</h2>
      <img
        className="book-card__book-img"
        src={`https://covers.openlibrary.org/b/id/${meeting?.book_id?.cover}-M.jpg`}
        alt={`cover of ${meeting?.book_id?.title}`}
      />
      <div className="book-card__content-text">
        <h3 className="book-card__book-title">
          {meeting?.book_id?.title || "TBA"}
        </h3>
        <h4 className="book-card__book-author">{meeting?.book_id?.author}</h4>
      </div>
    </section>
  );
};
export default NextBook;
