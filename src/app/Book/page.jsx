import BookCard from "@/Component/BookCard";
import React from "react";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000//booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div className="container mx-auto my-18 px-10 lg:px-18 ">
      <div className="flex justify-between items-center ">
        <div className="  pb-10 ">
          <h1 className="text-3xl font-semibold ">All Books There </h1>
          <p className="text-base-content/70 mt-2 text-sm sm:text-base max-w-md mx-auto">
            Explore our handpicked collection of books to find your next great
            read.
          </p>
          </div>
          <div className="text-center bg-blue-100  rounded-2xl">

          <h1 className="text-black w-25">Total Books</h1>
          <p className="font-bold">{books.length}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
