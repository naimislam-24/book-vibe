import { IBook } from "@/app/types/Books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <figure className="px-4 pt-4">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={200}
          className="h-72 w-full object-cover rounded-lg"
        />
      </figure>
      <div className="card-body">
        <div className="flex text-sm text-gray-600 mt-2 gap-30">
          <span className="text-[#23BE04]">Young Adult</span>
          <span className="text-[#23BE04]">Identity</span>
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-sm text-gray-500">By : {book.author}</p>
        <div className="flex justify-between items-center mt-2">
          <span>{book.category}</span>

          <span className="font-semibold">{book.rating} ⭐</span>
        </div>
        <Link href={`/books/${book.bookId}`}>
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
