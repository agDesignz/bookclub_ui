import BookCover from "../book/BookCover";
import closeIcon from "../../assets/icons/close.svg";
import insertBook from "../../api/book/insertBook";

const SearchModal = ({ modalData, showModal, resetModal, userData }) => {
  const handleAddBook = async () => {
    const result = await insertBook(modalData, userData.id);
    if (result === "success") {
      resetModal();
    }
  };
  return (
    <section
      className={`book-modal book-modal--search ${
        showModal ? "book-modal--show" : "book-modal--hide"
      }`}
    >
      <div className="book-modal__card">
        <button className="book-modal__close-btn" onClick={resetModal}>
          <img src={closeIcon} alt="close" className="w-full h-full block" />
        </button>
        <div className="book-modal__main-info">
          <div className="max-w-20 flex justify-center items-center">
            <BookCover
              coverData={{ cover: modalData?.cover, title: modalData?.title }}
            />
          </div>
          <div className="book-card__content-text">
            <h3 className="book-card__book-title">{modalData?.title}</h3>
            <h4 className="book-card__book-author">{modalData?.author}</h4>
          </div>
        </div>

        <p className="font-light md:text-lg lg:text-xl">
          {modalData?.description}
        </p>
        <div className="book-card__controls">
          {userData && (
            <button className="btn--outline" onClick={handleAddBook}>
              Add to shelf
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default SearchModal;
