import { Link } from "react-router-dom";
import "../../App.css";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/booksData.json";
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="mainHomePage">
        <div className="homeBgColor  flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-white text-center">
            Books to freshen up your bookshelf
          </h2>
          <button className="btn btn-primary my-5">
            <Link to={"/books"}>View The List</Link>
          </button>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-3xl font-bold text-center py-4">Books</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {data.map((d, i) => (
            <Book key={i} book={d}></Book>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
