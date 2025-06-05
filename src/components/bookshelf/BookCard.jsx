const BookCard = ({ book }) => {
  return (
    <div className="db-card db-card--book db-card--bookshelf">
      <img
        className="db-card__book-img row-span-full sm:w-auto"
        src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
        alt={`cover of ${book.title}`}
      />
      <div className="db-card__content-text">
        <h3 className="db-card__book-title">{book.title}</h3>
        <h4 className="db-card__book-author">{book.author}</h4>
      </div>
      <div className="db-card__suggestion">
        <h4 className="db-card__book-username">Selected by {book.username}:</h4>
        <p className="db-card__book-suggestion">{book.suggestion}</p>
      </div>
    </div>
  );
};
export default BookCard;
