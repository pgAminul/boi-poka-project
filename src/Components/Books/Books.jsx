import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList, getStoreWiseList } from "../LocalStorage/AddDbData";
import ReadList from "../ReadList/ReadList";
import WiseList from "../WiseList/WiseList";
import "../../App.css";
function Books() {
  const [read, setRead] = useState([]);
  const [wise, setWise] = useState([]);
  const dataLoad = useLoaderData();

  useEffect(() => {
    const allBooks = getStoreReadList();
    const storedListInt = allBooks.map((id) => parseInt(id));

    const readBookList = dataLoad.filter((book) =>
      storedListInt.includes(book.bookId)
    );
    setRead(readBookList);
  }, []);

  useEffect(() => {
    const WiseList = getStoreWiseList();
    const WiseStoredIdConvertToInt = WiseList.map((id) => parseInt(id));

    const wiseBookList = dataLoad.filter((book) =>
      WiseStoredIdConvertToInt.includes(book.bookId)
    );
    setWise(wiseBookList);
  }, []);

  const [sort, setSort] = useState("");
  const handleSortList = (typeSort) => {
    setSort(typeSort);
    if (typeSort === "Pages") {
      const sortedRead = [...read].sort((a, b) => a.totalPages - b.totalPages);
      setRead(sortedRead);
      const sortedWise = [...wise].sort((a, b) => a.totalPages - b.totalPages);
      setWise(sortedWise);
    } else if (typeSort === "Rating") {
      const sortedRead = [...read].sort((a, b) => a.rating - b.rating);
      setRead(sortedRead);
      const sortedWise = [...wise].sort((a, b) => a.rating - b.rating);
      setWise(sortedWise);
    }
  };
  return (
    <div className="my-3">
      {read.length === 0 ? (
        <div className="ListBooks">
          <p className="py-3 font-bold text mt-5 mb-2 text-4xl  ">
            Empty page! You didn't Add Any Books
          </p>
          <p className="text-red-600 font-bold">
            Please Add Books From Your Library
          </p>
          <NavLink to={"/"} className={`btn my-3 btn-error`}>
            Go To Library{" "}
          </NavLink>
        </div>
      ) : (
        <>
          <h2 className="text-center font-bold text-3xl my-5 bg-gray-300 py-3 rounded-lg ">
            Books
          </h2>
          <div className="mx-auto text-center py-4">
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-black hover:bg-black  w-56 text-white"
              >
                {sort ? `Sort by ${sort}` : "Sort By"}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li onClick={() => handleSortList("Rating")}>
                  <a>Rating</a>
                </li>
                <li onClick={() => handleSortList("Pages")}>
                  <a>Pages</a>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="py-3 font-bold">Total Book: {read.length}</h2>
          <Tabs>
            <TabList>
              <Tab>Read</Tab>
              <Tab>Waitlist</Tab>
            </TabList>

            <TabPanel>
              <div>
                {read.map((r, i) => (
                  <ReadList readList={r} key={i} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              {wise.map((b, i) => (
                <WiseList key={i} wiseListBook={b} />
              ))}
            </TabPanel>
          </Tabs>
        </>
      )}
    </div>
  );
}

export default Books;
