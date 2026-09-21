"use client";
import { BooksContext } from "@/context/BooksContext";
// import { BooksContext } from "@/app/context/BooksContext";
import { IBook } from "@/app/types/Books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlist = () => {
    console.log("Read Book", book);

    setWishlist([...wishlist, book]);
    toast.success(`You have read ${book.bookName}`);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleWishlist()}>
      Wishlist
    </button>
  );
};

export default WishListButton;
