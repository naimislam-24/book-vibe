import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";
import { IBook } from "@/app/types/Books.type";
import Image from "next/image";

interface IBookDetailPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  return data;
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  ) as IBook;

  console.log("Hello", book);

  return (
    // ************************************************************s

    // <section className="container mx-auto mt-12">
    //   <div className="card lg:card-side bg-base-100 shadow-sm">
    //     <figure>
    //       <Image
    //         src={book.image}
    //         alt={book.bookName}
    //         width={500}
    //         height={300}
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{book.bookName}</h2>
    //       <p>{book.category}</p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Listen</button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="container mx-auto mt-12">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200 overflow-hidden">
        <figure className="lg:w-1/2 h-200">
          <Image
            src={book.image}
            alt={book.bookName}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body lg:w-1/2">
          {/* Book Name */}
          <h2 className="card-title text-3xl font-bold">{book.bookName}</h2>

          {/* Author */}
          <p className="text-gray-500">
            By <span className="font-semibold">{book.author}</span>
          </p>

          {/* Category & Rating */}
          <div className="flex items-center gap-4 mt-2">
            <span className="badge badge-primary">{book.category}</span>

            <span className="font-semibold">⭐ {book.rating}</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-3">
            {book.tags.map((tag, index) => (
              <span key={index} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 leading-relaxed mt-3">{book.review}</p>

          {/* Book Information */}
          <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
            <p>
              <span className="font-bold">Pages:</span> {book.totalPages}
            </p>

            <p>
              <span className="font-bold">Publisher:</span> {book.publisher}
            </p>

            <p>
              <span className="font-bold">Published:</span>{" "}
              {book.yearOfPublishing}
            </p>

            <p>
              <span className="font-bold">Book ID:</span> {book.bookId}
            </p>
          </div>

          {/* Button */}
          <div className="card-actions mt-4">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;
