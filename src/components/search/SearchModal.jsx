import BookCover from "../book/BookCover";
import closeIcon from "../../assets/icons/close.svg";
import CloseIcon from "../icons/CloseIcon";

const SearchModal = ({ modalData, showModal, resetModal }) => {
  return (
    <section
      className={`search-modal ${
        showModal ? "search-modal--show" : "search-modal--hide"
      }`}
    >
      <div className="search-modal__card">
        <button className="search-modal__close-btn" onClick={resetModal}>
          <img src={closeIcon} alt="close" className="w-full h-full block" />
        </button>
        <div className="search-modal__main-info">
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

        <p className="font-extralight">{modalData?.description}</p>
        <div className="book-card__controls">
          <button className="btn--outline">Add to shelf</button>
        </div>
      </div>
    </section>
  );
};
export default SearchModal;
