import BookCover from "../book/BookCover";

const ArchiveBox = ({ meeting }) => {
  return (
    <div className="book-card ">
      <h2 className="col-span-full">{meeting.date}</h2>
      <BookCover
        coverData={{
          cover: meeting.book_id.cover,
          title: meeting.book_id.title,
        }}
      />
      <div className="book-card__content-text">
        <h2 className="book-card__book-title">{meeting.book_id.title}</h2>
        <h3 className="book-card__book-author">{meeting.book_id.author}</h3>
      </div>
    </div>
  );
};
export default ArchiveBox;
