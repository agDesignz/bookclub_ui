import { useState } from "react";

const BookCard = ({ book, setShowModal, setModalData }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSeeDetails = (book) => {
    setModalData(book);
    setShowModal(true);
  };

  return (
    <div
      className={`book-card book-card--book-shelf transition-opacity duration-500 ${
        isDeleting ? "opacity-0" : "opacity-100"
      }`}
      onClick={() => handleSeeDetails(book)}
    >
      <img
        className="book-card__book-img"
        src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
        alt={`cover of ${book.title}`}
      />

      <div className="book-card__content-text">
        <h2 className="book-card__book-title">{book.title}</h2>
        <h3 className="book-card__book-author">{book.author}</h3>
        <h4 className="book-card__book-username">
          Selected by {book.username}
        </h4>
      </div>
    </div>
  );
};
export default BookCard;
