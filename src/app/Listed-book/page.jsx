"use client";
import React, { useContext } from "react";
import { BookContexts } from "@/Context/BooksContexts";
import ListedCard from "@/Component/BookDetails/listedCard";

const ListedPage = () => {
  const { readBooks, wishlist } = useContext(BookContexts);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 ">
      <h1 className="text-3xl font-bold bg-amber-100 container  text-center rounded-3xl py-4 my-8">
        All Books There
      </h1>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0
            ? readBooks.map((book,index) => (
                <ListedCard key={`${book.bookId}-${index}`} book={book}></ListedCard>
              ))
            : "Not Found The Read Book"}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wish List (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          {wishlist.length > 0
            ? wishlist.map((book,index) => <ListedCard key= {index} book={book}></ListedCard>
              )
            : "Not To Yet The Wishlist"}
        </div>
      </div>
    </div>
  );
};

export default ListedPage;
