import { useState, useEffect, useRef } from "react";

const BookCover = ({ coverData }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  const handleImgLoad = () => {
    imgRef?.current.naturalWidth <= 5 && setHasError(true);
    setLoading(false);
  };

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
          ref={imgRef}
          className={`w-full ${loading ? "invisible" : "visible"}`}
          src={coverData.imageUrl}
          onLoad={handleImgLoad}
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
