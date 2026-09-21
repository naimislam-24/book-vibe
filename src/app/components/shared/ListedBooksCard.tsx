import { IBook } from "@/app/types/Books.type";
import Image from "next/image";
import Link from "next/link";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div className="mt-10 card lg:card-side bg-base-100 shadow-md border border-gray-200 p-4">
      {/* Book Image */}
      <figure className="lg:w-560">
        <Image
          width={300}
          height={300}
          src={book.image}
          alt={book.bookName}
          className="w-full h-64 object-cover rounded-xl"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>

        <p className="text-gray-600">
          By <span className="font-semibold">{book.author}</span>
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="badge badge-outline">{book.category}</span>

          {book.tags.map((tag: string) => (
            <span key={tag} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-600 mt-2 line-clamp-3">{book.review}</p>

        <div className="flex flex-wrap gap-4 mt-3">
          <span>
            ⭐ <strong>{book.rating}</strong>
          </span>

          <span>📖 {book.totalPages} Pages</span>

          <span>📅 {book.yearOfPublishing}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-primary rounded-2xl"
          >
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
