"use client";
import { BooksContext } from "@/context/BooksContext";
import { useContext, useState } from "react";
import { IBook } from "../types/Books.type";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-20">
      <h2 className="bg-amber-100 rounded-2xl font-bold text-4xl px-6 py-20 text-center">
        Listed Books
      </h2>

      <div className="text-center mt-4">
        {" "}
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Runtime"
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publisher year</option>
        </select>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Reab Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
