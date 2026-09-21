"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/app/types/Books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadeBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("Read Book", book);

    setReadeBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;
