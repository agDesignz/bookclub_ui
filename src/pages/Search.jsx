import { useState, useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import fetchBookData from "../api/open-library/fetchBookData";
import SearchResults from "../components/search/SearchResults";

const Search = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const searchData = await fetchBookData(title, author, 1);
    setSearchResults(searchData);
    setLoading(false);
    console.log(searchResults);
  };

  const handlePageChange = async (newPage) => {
    setLoading(true);
    const searchData = await fetchBookData(title, author, newPage);
    setSearchResults(searchData);
    setPage(newPage);
    setLoading(false);
  };

  const clearInput = () => {
    setLoading(true);
    setTitle("");
    setAuthor("");
    setSearchResults({});
    setPage(1);
    setLoading(false);
  };

  useEffect(() => {
    scrollToTop();
  }, [page]);

  return (
    <section className="grid gap-8 md:gap-16 md:grid-cols-2 items-start">
      <form className="grid gap-4 grid-cols-2">
        <input
          type="text"
          placeholder="Search by Title"
          name="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form__input col-span-full"
        />
        <input
          type="text"
          placeholder="Search by Author"
          name="authorInput"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form__input col-span-full"
        />
        {/* <div className="flex justify-between gap-4"> */}
        <button className="form__button w-full" onClick={handleSearch}>
          Search
        </button>
        {(title || author) && (
          <button
            className="form__button btn-error w-full"
            onClick={clearInput}
          >
            Clear
          </button>
        )}
        {/* </div> */}
      </form>
      <div className="grid grid-cols-2 gap-3 basis-full">
        {loading ? (
          <span className="loading loading-bars loading-md m-auto"></span>
        ) : searchResults.books ? (
          <SearchResults
            searchResults={searchResults}
            handlePageChange={handlePageChange}
            page={page}
            clearInput={clearInput}
          />
        ) : (
          <h2 className="text-3xl">Find your next read...</h2>
        )}
      </div>
    </section>
  );
};
export default Search;
