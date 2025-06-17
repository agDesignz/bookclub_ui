import { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.svg";
import getAllBooks from "../../api/book/getAllBooks";

const BookListModal = ({ changeModalState, addBook }) => {
  const [books, setBooks] = useState(null);

  const handleBookSelect = (book) => {
    addBook(book);
    changeModalState();
  };

  const fetchBooks = async () => {
    const bookData = await getAllBooks();
    if (bookData) {
      setBooks(bookData);
    } else {
      setBooks(null);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="book-modal book-modal--select">
      <button className="book-modal__close-btn" onClick={changeModalState}>
        <img src={closeIcon} alt="close" className="w-full h-full block" />
      </button>
      {books &&
        books.map((book) => (
          <div
            key={book.id}
            className="grid gap-4 p-2 md:items-start grid-cols-[max-content_1fr] cursor-pointer hover:bg-lemon-600 hover:text-blue-200 transition-colors duration-200"
            onClick={() => handleBookSelect(book)}
          >
            <img
              className="book-card__book-img max-w-14"
              src={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
              alt={`cover of ${book.title}`}
            />
            <div className="grid gap-2 content-between">
              <h3 className="font-aleg tracking-wider font-medium text-xl sm:text-3xl md:text-4xl">
                {book.title}
              </h3>
              <h4 className="font-aleg tracking-wider italic text-xl">
                {book.author}
              </h4>
            </div>
          </div>
        ))}
    </section>
  );
};
export default BookListModal;
