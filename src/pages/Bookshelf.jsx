import { useEffect, useState } from "react";
import { useAuth } from "../context/auth/AuthContext";
import getAllBooks from "../api/book/getAllBooks";
import deleteBook from "../api/book/deleteBook";
import BookCard from "../components/book/BookCard";

const Bookshelf = () => {
  const { user } = useAuth();

  const [books, setBooks] = useState(null);

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
    <section className="grid xl:grid-cols-2 gap-4 md:gap-8">
      {books &&
        books.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            user={user}
            removeBook={() => removeBook(book.id)}
          />
        ))}
    </section>
  );
};
export default Bookshelf;
