const BookCard = ({ book }) => {
  return (
    <>
      <h3>Title: {book.title}</h3>
      <h3>author: {book.author}</h3>
      <h3>description: {book.description}</h3>
      <h3>suggestion: {book.suggestion}</h3>
    </>
  );
};
export default BookCard;
