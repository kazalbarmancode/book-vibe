import React from "react";
import BookCard from "../BookCard";

const getBooks = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";
    console.log("Fetching from URL:", `${baseUrl}/booksData.json`);

    const res = await fetch(`${baseUrl}/booksData.json`);

    if (!res.ok) {
      console.log("Fetch failed with status:", res.status);
      return [];
    }

    const data = await res.json();
    console.log("Data fetched successfully! Total items:", data.length);
    return data;
  } catch (error) {
    console.error("FETCH ERROR DETAIL:", error);
    return [];
  }
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div className="container mx-auto my-18 px-10 lg:px-18 ">
      <div className="text-center  pb-10 ">
        <h1 className="text-3xl font-semibold "> Books </h1>
        <p className="text-base-content/70 mt-2 text-sm sm:text-base max-w-md mx-auto">
          Explore our handpicked collection of books to find your next great
          read.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
