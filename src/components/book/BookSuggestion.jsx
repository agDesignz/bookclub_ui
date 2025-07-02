import { useContext, useState } from "react";
// import updateBookSuggestion from "../../api/book/updateBookSuggestion";
import BooksContext from "../../context/books/BooksContext";

const BookSuggestion = ({ setAdding, book, setBook, newBook = false }) => {
  const [suggestion, setSuggestion] = useState(null);
  const { addSuggestion } = useContext(BooksContext);

  const handleCancel = () => {
    setSuggestion(null);
    setAdding(false);
  };

  const handleUpdateBookData = (e) => {
    setSuggestion(e.target.value);
  };

  const handleUpdateBook = async () => {
    const result = await addSuggestion(suggestion, book.id);
    console.log(result);
    if (result) {
      setBook(result);
      setSuggestion(null);
      setAdding(false);
    }
  };

  //   const handleUpdateBook = async () => {
  //     console.log("updating");

  //     const result = await updateBookSuggestion(suggestion, book.id);
  //     if (result.length) {
  //     } else {
  //       console.log("something went wrong", result);
  //     }
  //   };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <textarea
        name="suggestion"
        placeholder="Add your suggestion (optional)"
        className="textarea textarea-lg w-full min-h-32 bg-lemon-800 text-blue-200 rounded-lg col-span-full"
        onChange={handleUpdateBookData}
      ></textarea>
      <button className="form__button" onClick={handleUpdateBook}>
        Add
      </button>
      <button className="form__button btn-error" onClick={handleCancel}>
        cancel
      </button>
    </div>
  );
};
export default BookSuggestion;
