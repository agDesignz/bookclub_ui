const BookCard = ({ book }) => {
  return (
    <div className="book-card book-card--book book-card--bookshelf">
      <img
        className="book-card__book-img row-span-full sm:w-auto"
        src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
        alt={`cover of ${book.title}`}
      />
      <div className="book-card__content-text">
        <h3 className="book-card__book-title">{book.title}</h3>
        <h4 className="book-card__book-author">{book.author}</h4>
      </div>
      <div className="db-details">
        <h4 className="book-card__book-username">
          Selected by {book.username}:
        </h4>
        <p className="book-card__book-suggestion">{book.suggestion}</p>
      </div>
    </div>
  );
};
export default BookCard;
