"use client";
import { createContext, ReactNode, useState } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadeBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sharedData = {
    readBooks,
    setReadeBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
