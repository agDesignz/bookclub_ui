import { useContext, useState } from "react";
import { useAuth } from "../context/auth/AuthContext";
import BookCard from "../components/book/BookCard";
import BookshelfModal from "../components/book/BookshelfModal";
import BooksContext from "../context/books/BooksContext";

const Bookshelf = () => {
  const { user } = useAuth();
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { books, removeBook } = useContext(BooksContext);

  const resetModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const handleBookDelete = (id) => {
    resetModal();
    setTimeout(() => {
      removeBook(id);
    }, 200);
  };

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
          />
        ))}
      <BookshelfModal
        book={modalData}
        setBook={setModalData}
        handleBookDelete={handleBookDelete}
        showModal={showModal}
        resetModal={resetModal}
        userData={user}
      />
    </section>
  );
};
export default Bookshelf;
