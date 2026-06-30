import { useState, useEffect } from "react";

const BookCover = ({ coverData }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!coverData.cover) {
    return <p>Image not available</p>;
  }

  return (
    <div className="relative w-20 h-32 object-cover">
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-bars loading-xl"></span>
        </span>
      )}

      {hasError ? (
        <div className="absolute inset-0 w-full h-full rounded bg-lemon-300 flex items-center justify-center">
          <p className="text-center text-blue-400">Image not available</p>
        </div>
      ) : (
        <img
          className={`w-full ${loading ? "invisible" : "visible"}`}
          src={coverData.cover}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setHasError(true);
          }}
          alt={`cover of ${coverData?.title || "book"}`}
        />
      )}
    </div>
  );
};

export default BookCover;
