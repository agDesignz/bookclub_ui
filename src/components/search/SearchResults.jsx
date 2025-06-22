import { useState } from "react";
import SearchModal from "./SearchModal";
import { useAuth } from "../../context/auth/AuthContext";

import fetchBookDescription from "../../api/open-library/fetchBookDescription";
// import BookInputManual from "./BookInputManual";

const SearchResults = ({ searchResults, handlePageChange, page }) => {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { books, numFound } = searchResults;
  const { user } = useAuth();

  const resetModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const getBook = async (idx, title, author, cover, key) => {
    const description = await fetchBookDescription(key);
    setModalData({
      idx,
      title,
      author,
      cover,
      description,
      key,
    });
    setShowModal(true);
    // document.getElementById("book_modal").showModal();
  };

  return (
    <>
      {searchResults.books.length ? (
        <>
          {books.map((book, idx) => (
            <button
              className="btn--outline"
              key={idx}
              onClick={() =>
                getBook(
                  idx,
                  book.title,
                  book.author_name,
                  book.cover_i,
                  book.key
                )
              }
            >
              <h2 className="text-xl">{book.title}</h2>
              <h3 className="text-xl font-extralight italic mt-1">
                {book.author_name[0]} <br />
                {book.author_name.length > 1 && "et al"}
              </h3>
            </button>
          ))}
          <div className="col-span-full flex justify-around mt-4 mb-16">
            <button
              className="btn btn-outline"
              disabled={page === 1} // Disable "Previous" button on the first page
              onClick={() => handlePageChange(page - 1)}
            >
              Previous 10
            </button>

            <button
              className="btn btn-outline"
              disabled={page * 10 > numFound}
              onClick={() => handlePageChange(page + 1)}
            >
              Next 10
            </button>
          </div>
          <SearchModal
            modalData={modalData}
            showModal={showModal}
            resetModal={resetModal}
            userData={user}
            // username={userData.username}
          />
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <p>No results found.</p>
          {/* <BookInputManual
            username={userData.username}
            setModalData={setModalData}
            clearInput={clearInput}
          /> */}
        </div>
      )}
    </>
  );
};
export default SearchResults;
