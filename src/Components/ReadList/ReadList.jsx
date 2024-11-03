import React from "react";

function ReadList({ readList }) {
  const {
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = readList;
  return (
    <div className="card shadow-xl my-4 grid md:grid-cols-3 mx-auto gap-4 ">
      <div className="col-span-1">
        <img
          src={image}
          className="h-[300px] py-2 rounded-2xl mx-auto "
          alt=""
        />
      </div>
      <div className="col-span-2 ml-4 card-body">
        <h2 className="font-bold text-2xl my-2">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex  items-center gap-3">
          <span className="font-bold">Tag</span>
          {tags.map((t, i) => {
            return (
              <button
                key={i}
                className="badge badge-outline p-3 text-green-700 "
              >
                {t}
              </button>
            );
          })}
          <button className="text-gray-500">
            Year Of Publishing: {yearOfPublishing}
          </button>
        </div>
        <div className="flex gap-4 md:w-[50%] py-3 text-gray-500">
          <p>Publisher: {publisher}</p>
          <p>Pages: {totalPages}</p>
        </div>
        <div className="flex gap-4">
          <button className="border-2 py-2 px-4 rounded-full border-green-600 ">
            category: {category}
          </button>
          <button className="border-2 py-2 px-4 rounded-full border-green-600 ">
            Rating: {rating}
          </button>
          <button className="border-2 py-2 px-4 rounded-full border-green-600 ">
            View Details
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ReadList;
