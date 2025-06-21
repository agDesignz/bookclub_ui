import { useEffect, useState } from "react";
import { useAuth } from "../context/auth/AuthContext";
import getAllBooks from "../api/book/getAllBooks";
import deleteBook from "../api/book/deleteBook";
import BookCard from "../components/book/BookCard";
import BookshelfModal from "../components/book/BookshelfModal";

const Bookshelf = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const resetModal = () => {
    setShowModal(false);
    setModalData(null);
  };
  const removeBook = (id) => {
    try {
      deleteBook(id);
      setBooks(books.filter((bk) => bk.id !== id));
    } catch (error) {
      console.log(error);
    }
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
    <section className="grid lg:grid-cols-2 gap-5">
      {books &&
        books.map((book) => (
          <BookCard
            setModalData={setModalData}
            setShowModal={setShowModal}
            book={book}
            key={book.id}
            user={user}
            removeBook={() => removeBook(book.id)}
          />
        ))}
      <BookshelfModal
        modalData={modalData}
        showModal={showModal}
        resetModal={resetModal}
        userData={user}
      />
    </section>
  );
};
export default Bookshelf;
