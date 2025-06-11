import { useState } from "react";

const BookCard = ({ book, user, removeBook }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleBookDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      removeBook();
      setIsDeleting(false);
    }, 500);
  };

  return (
    <div
      className={`book-card book-card--book book-card--bookshelf transition-opacity duration-500 ${
        isDeleting ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        className="book-card__book-img row-span-full sm:w-auto"
        src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
        alt={`cover of ${book.title}`}
      />
      <div className="book-card__content-text">
        <h3 className="book-card__book-title">{book.title}</h3>
        <h4 className="book-card__book-author">{book.author}</h4>
      </div>
      <div className="book-card__details">
        <h4 className="book-card__book-username">
          Selected by {book.username}
        </h4>
        {book.suggestion ? (
          <p className="book-card__book-suggestion mx-2">{book.suggestion}</p>
        ) : (
          user?.id === book.user_id && (
            <button className="btn--outline">Add comment</button>
          )
        )}

        {user?.id === book.user_id && (
          <div className="flex flex-col justify-end">
            <button className="btn--outline" onClick={handleBookDelete}>
              Remove From Shelf
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookCard;
