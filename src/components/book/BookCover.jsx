import { useState, useEffect } from "react";

const BookCover = ({ coverData }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  //   const imageSrc = coverData?.cover
  //     ? `https://covers.openlibrary.org/b/id/${coverData.cover}-M.jpg`
  //     : null;
  const getImage = (url) => {
    if (url) {
      setImageSrc(`https://covers.openlibrary.org/b/id/${url}-M.jpg`);
      setLoading(true);
      setHasError(false);
    } else {
      setLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    // Reset loading/error when coverData changes
    console.log("Cover data", coverData);
    console.log("Image source:", imageSrc);

    getImage(coverData.cover);
  }, [coverData]);

  if (!imageSrc) {
    return <p>Image not available</p>;
  }

  return (
    <div className="relative w-20 h-32 object-cover">
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-bars loading-xl"></span>
        </span>
      )}

      <img
        className={`w-full ${loading ? "invisible" : "visible"}`}
        src={imageSrc}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setHasError(true);
        }}
        alt={`cover of ${coverData?.title || "book"}`}
      />

      {hasError && (
        <div className="absolute inset-0 w-full h-full rounded bg-lemon-300 flex items-center justify-center">
          <p className="text-center text-blue-400">Image not available</p>
        </div>
      )}
    </div>
  );
};

export default BookCover;
