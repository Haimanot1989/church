import React from "react";
import BookCard from "./BookCard";
import books from "./data/books.json";

const Books = () => {
  return (
    <div className="album py-5 bg-light position-main">
      <div className="container">
        <div className="row">
          {books["books"] &&
            books["books"].map((book, index) => {
              console.log("itemNR", index);
              return <BookCard {...book} key={book.title} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Books;
