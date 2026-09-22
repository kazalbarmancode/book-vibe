import React from 'react';
import Image from 'next/image';
import ReadBooks from '@/Component/BookDetails/ReadBooks';
import Wishlist from '@/Component/BookDetails/Wishlist';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  return res.json();
};

const page = async ({ params }) => {
  const { id } = await params;

  if (!id || id === 'undefined') {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Invalid Book ID! Please select a valid book from home page.
      </div>
    );
  }

  const bookData = await getBooks();
  
  const books = bookData.find((book) => String(book.bookId) === String(id));

  if (!books) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Book Not Found!
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = books;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 bg-base-200 rounded-3xl p-8 sm:p-12 flex items-center justify-center">
          <div className="relative w-52 h-80 sm:w-64 sm:h-96 shadow-2xl rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={bookName}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-base-content mb-2">
              {bookName}
            </h1>
            <p className="text-lg font-semibold text-base-content/70">
              By : {author}
            </p>
          </div>

          <div className="border-t border-base-200 my-3"></div>
          <p className="text-lg font-medium text-base-content/80">{category}</p>
          <div className="border-t border-base-200 my-3"></div>

          <p className="text-base-content/80 leading-relaxed text-sm sm:text-base">
            <span className="font-bold text-base-content">Review : </span>
            {review}
          </p>

          <div className="flex items-center gap-3 py-2">
            <span className="font-bold text-base-content">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-success bg-emerald-50 text-emerald-600 border-none font-semibold px-4 py-3 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-base-200 my-3"></div>

          <div className="space-y-3 text-sm sm:text-base max-w-md">
            <div className="grid grid-cols-2">
              <span className="text-base-content/70">Number of Pages:</span>
              <span className="font-bold text-base-content">{totalPages}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-base-content/70">Publisher:</span>
              <span className="font-bold text-base-content">{publisher}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-base-content/70">Year of Publishing:</span>
              <span className="font-bold text-base-content">{yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-base-content/70">Rating:</span>
              <span className="font-bold text-base-content">{rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <ReadBooks books={books}></ReadBooks>
            <Wishlist books={books}></Wishlist>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;