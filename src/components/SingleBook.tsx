import { Book } from "../types/Book";

interface SingleBookProps {
  book: Book;
}

const SingleBook = ({ book }: SingleBookProps) => {
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <p>{book.price}€</p>
    </div>
  );
};

export default SingleBook;
