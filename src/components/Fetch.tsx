import { useState, useEffect } from "react";
import { Book } from "../types/Book";
import SingleBook from "./SingleBook";

const Fetch = () => {
  // fetch teh books from the restaurant APIs
  // put them into a state variable
  // map the books into our return statement to show them in the UI

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/food-books");
      if (response.ok) {
        const booksArray = await response.json();
        setBooks(booksArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Books Fetching</h2>
      {books.map((book, i) => (
        <SingleBook key={i} book={book} />
      ))}
    </div>
  );
};
export default Fetch;
