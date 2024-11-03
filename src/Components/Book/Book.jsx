import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookId, bookName, author, image, category, tags, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure>
        <img src={image} className="h-[300px]" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between">
          {tags.map((t, i) => {
            return (
              <div key={i} className="badge badge-outline">
                {t}
              </div>
            );
          })}
        </div>
        <h2 className="card-title py-2">{bookName}</h2>
        <p>{author}</p>
        <div className="border-b-2 border-dashed my-2"></div>

        <div className="flex justify-between items-center">
          <p>{category}</p>
          <div className="rating ">
            <p>{rating}</p>
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-base-300"
            />
          </div>
        </div>
      </div>
      <Link
        to={`/detailBook/${bookId}`}
        className="btn btn-error w-[80%] mx-auto my-3"
      >
        Show Details
      </Link>
    </div>
  );
}

export default Book;
