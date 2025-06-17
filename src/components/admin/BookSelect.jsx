import { useState } from "react";
import BookListModal from "./BookListModal";

const BookSelect = ({ book, formOpen, addBook }) => {
  const [showModal, setShowModal] = useState(false);

  const changeModalState = async (e) => {
    e && e.preventDefault();
    setShowModal((prevState) => !prevState);
  };
  return (
    <div className="grid gap-4 my-2 md:items-start grid-cols-[max-content_1fr] col-span-full">
      <button
        disabled={!formOpen}
        onClick={changeModalState}
        className={`btn btn-outline btn-accent rounded-xl ${
          book.id ? "h-full" : "col-span-full h-20"
        }`}
      >
        Change Book
      </button>
      {book.id && (
        <div className="grid gap-2 content-between">
          <h3 className="font-aleg tracking-wider font-medium text-xl sm:text-3xl md:text-4xl">
            {book.title}
          </h3>
          <h4 className="font-aleg tracking-wider italic text-xl">
            {book.author}
          </h4>
        </div>
      )}
      {showModal && (
        <BookListModal changeModalState={changeModalState} addBook={addBook} />
      )}
    </div>
  );

  // return (
  //   <div className="grid gap-4 my-2 md:items-start grid-cols-[max-content_1fr] col-span-full">
  //     {book.id ? (
  //       <>
  //         <button className="btn btn-outline btn-accent rounded-xl h-full">
  //           Change Book
  //         </button>
  //         <div className="grid gap-2 content-between">
  //           <h3 className="font-aleg tracking-wider font-medium text-xl sm:text-3xl md:text-4xl">
  //             {book.title}
  //           </h3>
  //           <h4 className="font-aleg tracking-wider italic text-xl">
  //             {book.author}
  //           </h4>
  //         </div>
  //       </>
  //     ) : (
  //       <button className="btn btn-outline btn-accent btn-xl rounded-xl col-span-full h-20">
  //         Select Book
  //       </button>
  //     )}
  //   </div>
  // );
};
export default BookSelect;
