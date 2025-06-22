import closeIcon from "../../assets/icons/close.svg";

const BookshelfModal = ({
  modalData: book,
  showModal,
  resetModal,
  userData,
  handleBookDelete,
}) => {
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
          {book?.description && (
            <p className="book-card__text">{book.description}</p>
          )}
          {book?.username && (
            <h4 className="book-card__book-username my-2">
              Selected by {book.username}
            </h4>
          )}
          {book?.suggestion && (
            <p className="book-card__text italic">{book.suggestion}</p>
          )}
        </div>
        {book?.id && userData.id === book.user_id && (
          <div className="flex">
            <button
              className="btn btn-soft btn-error rounded-full"
              onClick={() => handleBookDelete(book?.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default BookshelfModal;
