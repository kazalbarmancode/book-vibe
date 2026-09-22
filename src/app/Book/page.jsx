import BookCard from "@/Component/BookCard";
import React from "react";

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
        {books.map((book, index) => (
          <BookCard key={`${book.bookId}-${index}`} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
