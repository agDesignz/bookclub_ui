import { createContext, useEffect, useState } from "react";
import getAllBooks from "../../api/book/getAllBooks";
import deleteBook from "../../api/book/deleteBook";
import updateBookSuggestion from "../../api/book/updateBookSuggestion";
import insertBook from "../../api/book/insertBook";
import updateBookStatus from "../../api/book/updateBookStatus";
import getBookshelfBooks from "../../api/book/getBookshelfBooks";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    const bookData = await getBookshelfBooks();
    if (bookData) {
      setBooks(bookData);
    } else {
      setBooks(null);
    }
  };

  const removeBook = (id) => {
    try {
      deleteBook(id);
      setBooks(books.filter((bk) => bk.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async (book, id) => {
    try {
      const result = await insertBook(book, id);
      console.log("addBook result", result);
      if (result.length) {
        fetchBooks();
        return result[0];
      }
    } catch (error) {
      console.log("addBook error:", error);
    }
  };

  const addSuggestion = async (suggestion, id) => {
    try {
      const result = await updateBookSuggestion(suggestion, id);
      console.log("result from BooksContext:", result);
      if (result.length) {
        setBooks(books.map((bk) => (bk.id === id ? result[0] : bk)));
        return result[0];
      } else {
        console.log("No change:", result);
        return "no change";
      }
    } catch (error) {
      console.log("addSuggestion Error:", error);
    }
  };

  const archiveBook = async (book_id, read) => {
    const result = await updateBookStatus(book_id, read);
    if (result) {
      read === true && setBooks(books.filter((book) => book.id !== id));
      read === false && setBooks({ ...books, result });
    } else {
      console.log("Ruh-roh!", result);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        addSuggestion,
        archiveBook,
        removeBook,
        insertBook,
        addBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
