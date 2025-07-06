import BookCover from "../book/BookCover";

const ArchiveBox = ({ meeting }) => {
  return (
    <div className="book-card ">
      <img
        className="book-card__book-img max-w-24"
        src={`https://covers.openlibrary.org/b/id/${meeting.book_id.cover}-M.jpg`}
        alt={`cover of ${meeting.book_id.title}`}
      />
      <div className="book-card__content-text">
        <h2 className="book-card__book-title">{meeting.book_id.title}</h2>
        <h3 className="book-card__book-author">{meeting.book_id.author}</h3>
        <h3 className="col-span-full">{meeting.date}</h3>
      </div>
    </div>
  );
};
export default ArchiveBox;
