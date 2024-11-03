import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoreWiseList,
} from "../LocalStorage/AddDbData";

function DetailsBook() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const findBook = data.find((book) => book.bookId === id);
  const {
    bookId: currentId,
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
  } = findBook;

  const [change, setChange] = useState(false);
  const handleAddButon = () => {
    setChange(true);
  };

  const combainReadFunction = () => {
    addToStoredReadList(id);
    handleAddButon();
  };

  const combainWiseListFuction = () => {
    addToStoreWiseList(id);
  };
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 items-center my-5 mx-4 shadow-xl md:mx-auto rounded-lg">
      <figure className="col-span-1 p-2 mx-auto ">
        <img
          src={image}
          className="lg:h-auto h-[300px] md:h-[500px]"
          alt="Movie"
        />
      </figure>
      <div className="m-4 col-span-2">
        <h2 className="card-title mb-2">{bookName}</h2>
        <p className="mb-2">{author}</p>
        <div className="border-b-2 py-2 "></div>
        <p className="border-b-2 py-2">{category}</p>
        <p className="my-4">
          <span className="font-bold">Review:</span> {review}
        </p>
        <div className="flex justify-start items-center gap-5 border-b-2 pb-4">
          <span className="font-bold text-green-400">#Tags</span>

          {tags.map((t, i) => {
            return (
              <button
                className=" border-2 px-4 py-2 rounded-2xl text-green-500"
                key={i}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="py-4 md:w-[70%] border-b-2 ">
          <div className="grid grid-cols-2  items-center py-2">
            <h3 className="text-gray-500 ">Number Of Pages: </h3>
            <h3>{totalPages}</h3>
          </div>
          <div className="grid grid-cols-2 items-center py-2">
            <h3 className="text-gray-500 ">Publisher: </h3>
            <h3>{publisher}</h3>
          </div>
          <div className="grid grid-cols-2 items-center py-2">
            <h3 className="text-gray-500 "> Year Of Publishing: </h3>
            <h3>{yearOfPublishing}</h3>
          </div>
          <div className="grid grid-cols-2 items-center py-2">
            <h3 className="text-gray-500  ">Rating: </h3>
            <h3>{rating}</h3>
          </div>
        </div>
        <div className="flex gap-4 pt-4 items-center">
          <button
            onClick={() => combainReadFunction()}
            className="btn bg-transparent border-2 border-green-400"
          >
            {change ? "Already Added" : "Mark as Read"}
          </button>
          <button
            onClick={() => combainWiseListFuction()}
            className="btn btn-primary"
          >
            Add WiseList
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsBook;
