import { IBook } from "@/app/types/Books.type";
import BookCard from "../shared/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksdata = await getBooks();
  //   console.log("Books Data", booksdata);

  return (
    // <section className="container mx-auto mt-20">
    //   <h2 className="text-2xl font-bold text-accent">Books</h2>
    //   <div className="grid grid-cols-3 gap-4">
    //     {booksdata.map((book: IBook, ind: number) => (
    //       <BookCard key={ind} book={book} />
    //     ))}
    //   </div>
    // </section>
    <section className="container mx-auto mt-20">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {booksdata.slice(0, 5).map((book: IBook, ind: number) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
