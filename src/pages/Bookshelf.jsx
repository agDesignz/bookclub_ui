import { useEffect, useState } from "react";
import getAllBooks from "../api/book/getAllBooks";

const Bookshelf = () => {
  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    const bookData = await getAllBooks();
    if (bookData) {
      console.log("bookData", bookData);
      setBooks(bookData);
    } else {
      setBooks(null);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <section className="grid md:grid-cols-2 gap-4 md:gap-8">
      BOOKSHELF
      {/* {books.length && books.map((book) =>)} */}
    </section>
  );
};
export default Bookshelf;
