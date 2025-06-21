import closeIcon from "../../assets/icons/close.svg";

const BookshelfModal = ({
  modalData: book,
  showModal,
  resetModal,
  userData,
}) => {
  return (
    <section
      className={`book-modal book-modal--bookshelf ${
        showModal ? "book-modal--show" : "book-modal--hide"
      }`}
    >
      <button className="book-modal__close-btn" onClick={resetModal}>
        <img src={closeIcon} alt="close" className="w-full h-full block" />
      </button>
      <div className="book-card my-14">
        <div className="book-card__content-text">
          <p className="font-normal">{book.description}</p>
          <h4 className="book-card__book-username">
            Selected by {book.username}
          </h4>
          <p className="book-card__book-suggestion">{book.suggestion}</p>
        </div>
      </div>
    </section>
  );
};
export default BookshelfModal;
