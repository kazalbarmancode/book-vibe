import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedCard = ({ book }) => {
  return (
    <div className="card w-full bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden my-6">
      <div className="p-6 md:p-8 flex  items-center">
        {/* Book Image Cover */}
        <div className="p-6  w-100  h-70 items-center justify-center relative mb-6">
          {book?.image ? (
            <Image
              src={book.image}
              alt={book.bookName || "Book cover"}
              fill
              className="object-contain p-2 hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-sm text-gray-400">No Image Available</div>
          )}
        </div>

        {/* Book Info Section */}
        <div className="w-full space-y-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-base-content mb-1">
              {book?.bookName}
            </h2>
            <p className="text-base font-semibold text-base-content/70">
              By : {book?.author}
            </p>
          </div>

          <div className="border-t border-base-200 my-2"></div>

          {/* Tags & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-sm">Tags:</span>
              {book?.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="badge badge-success bg-emerald-50 text-emerald-600 border-none font-semibold px-3 py-2 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {book?.category && (
              <span className="badge badge-lg bg-blue-50 text-blue-600 border-none font-medium">
                {book.category}
              </span>
            )}
          </div>

          {/* Details Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-base-200/50 p-4 rounded-2xl text-xs sm:text-sm text-base-content/80">
            <div>
              <p className="text-base-content/60">Publisher</p>
              <p className="font-bold truncate">{book?.publisher || "N/A"}</p>
            </div>
            <div>
              <p className="text-base-content/60">Pages</p>
              <p className="font-bold">{book?.totalPages || "N/A"}</p>
            </div>
            <div>
              <p className="text-base-content/60">Year</p>
              <p className="font-bold">{book?.yearOfPublishing || "N/A"}</p>
            </div>
            <div>
              <p className="text-base-content/60">Rating</p>
              <p className="font-bold text-amber-600">
                ⭐ {book?.rating || "N/A"}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            <Link
              href={`/Book/${book?.bookId}`}
              className="btn btn-success text-white rounded-full px-8 w-full sm:w-auto"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
