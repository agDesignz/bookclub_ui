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
    <>
      {loading && (
        <span className="w-full h-full aspect-[3/5] flex items-center justify-center">
          <span className="loading loading-bars loading-xl"></span>
        </span>
      )}

      {hasError ? (
        <div className="w-full h-full rounded bg-lemon-300 flex items-center justify-center">
          <p className="text-center text-blue-400">
            Image
            <br />
            not
            <br />
            available
          </p>
        </div>
      ) : (
        <img
          ref={imgRef}
          className={`w-full h-full object-cover ${loading ? "invisible" : "visible"}`}
          src={coverData.imageUrl}
          onLoad={handleImgLoad}
          onError={() => {
            setLoading(false);
            setHasError(true);
          }}
          alt={`cover of ${coverData?.title || "book"}`}
        />
      )}
    </>
  );
};

export default BookCover;
