import { useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import BookSuggestion from "./BookSuggestion";

const BookshelfModal = ({
  book,
  showModal,
  resetModal,
  userData,
  setBook,
  handleBookDelete,
}) => {
  const [adding, setAdding] = useState(false);

  const addSuggestion = () => {
    setAdding(true);
  };

  return (
    <section
      className={`book-modal book-modal--bookshelf overflow-auto items-start ${
        showModal ? "book-modal--show" : "book-modal--hide"
      }`}
    >
      <button className="book-modal__close-btn" onClick={resetModal}>
        <img src={closeIcon} alt="close" className="w-full h-full block" />
      </button>
      <div className="book-card grid-cols-1 max-w-[800px] my-14">
        <div className="book-card__content-text">
          {book?.username && (
            <h4 className="book-card__book-username">
              Selected by {book.username}
            </h4>
          )}
          {book?.suggestion && (
            <p className="text-md sm:text-lg md:text-xl italic my-2">
              - {book.suggestion}
            </p>
          )}
          {book?.description && (
            <p className="book-card__text book-card__text--sm">
              {book.description}
            </p>
          )}
        </div>
        {book?.id && userData?.id === book.user_id && (
          <>
            {adding ? (
              <BookSuggestion
                setAdding={setAdding}
                book={book}
                setBook={setBook}
              />
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <button className="form__button" onClick={addSuggestion}>
                  Add suggestion
                </button>
                <button
                  className="form__button btn-error rounded-full"
                  onClick={() => handleBookDelete(book?.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default BookshelfModal;
