import { useEffect, useState } from "react";
import getAllBooks from "../api/book/getAllBooks";
import BookCard from "../components/book/BookCard";

const Bookshelf = () => {
  const [books, setBooks] = useState(null);

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
      {books && books.map((book) => <BookCard book={book} key={book.id} />)}
    </section>
  );
};
export default Bookshelf;
