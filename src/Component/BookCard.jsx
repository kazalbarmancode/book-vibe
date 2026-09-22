import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className="card bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      <div className="bg-base-200 rounded-xl py-8 flex items-center justify-center mb-6">
        <div className="relative w-36 h-52 shadow-md hover:scale-105 transition-transform duration-300">
          <Image
            src={image}
            alt={bookName}
            fill
            sizes="(max-width: 768px) 100vw, 144px"
            className="object-cover rounded-md"
            priority={false}
          />
        </div>
      </div>

      <div className="space-y-4 flex-1 flex flex-col justify-between">
        
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="badge badge-success bg-green-100 text-green-700 border-none font-medium px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold text-base-content line-clamp-1 mb-1">
            {bookName}
          </h2>
          <p className="text-sm text-base-content/70 font-medium">
            By : {author}
          </p>
        </div>

        <div className="border-t border-dashed border-base-300 my-2"></div>

        <div className="flex items-center justify-between text-sm text-base-content/80 font-medium">
          <span>{category}</span>

          <div className="flex items-center gap-1">
            <span>{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-warning text-warning"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <Link 
          href={`/Book/${bookId}`}
          className="btn btn-sm btn-outline btn-success w-full mt-2"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default BookCard;