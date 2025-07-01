import BookCover from "../book/BookCover";
import closeIcon from "../../assets/icons/close.svg";
import insertBook from "../../api/book/insertBook";
import { useState } from "react";

const SearchModal = ({ modalData, showModal, resetModal, userData }) => {
  const [adding, setAdding] = useState(false);
  const [suggestion, setSuggestion] = useState(null);

  const handleUpdateBookData = (e) => {
    setSuggestion(e.target.value);
  };

  const handleAddBook = async () => {
    const bookData = { ...modalData, suggestion };
    const result = await insertBook(bookData, userData.id);
    if (result === "success") {
      resetModal();
    }
    console.log("bookData:", bookData);
  };

  const handleCancel = () => {
    setSuggestion(null);
    setAdding(false);
  };

  const handleClose = () => {
    setAdding(false);
    setSuggestion(null);
    resetModal();
  };

  return (
    <section
      className={`book-modal book-modal--search ${
        showModal ? "book-modal--show" : "book-modal--hide"
      }`}
    >
      <div className={`book-modal__card ${adding && "md:max-w-[600px]"}`}>
        <button className="book-modal__close-btn" onClick={handleClose}>
          <img src={closeIcon} alt="close" className="w-full h-full block" />
        </button>
        {!adding ? (
          <>
            <div className="book-modal__main-info">
              <div className="max-w-20 flex justify-center items-center">
                <BookCover
                  coverData={{
                    cover: modalData?.cover,
                    title: modalData?.title,
                  }}
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
            <div className="">
              {userData && (
                <button
                  className="btn--outline"
                  onClick={() => setAdding(true)}
                >
                  Add to shelf
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="w-full grid grid-cols-2 gap-4">
            <textarea
              name="suggestion"
              placeholder="Add your suggestion (optional)"
              className="textarea textarea-lg w-full min-h-32 bg-lemon-800 text-blue-200 rounded-lg col-span-full"
              onChange={handleUpdateBookData}
            ></textarea>
            <button className="form__button btn-error" onClick={handleCancel}>
              cancel
            </button>
            <button className="form__button" onClick={handleAddBook}>
              Add
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default SearchModal;
