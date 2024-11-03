import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaticPages from "../StaticPages/StaticPages";
import Home from "../Home/Home";
import Books from "../Books/Books";
import ErrorPage from "../ErrorPage/Error";
import DetailsBook from "../DetailsBook/DetailsBook";
import GrapPages from "../GrapPages/GrapPages";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StaticPages></StaticPages>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
          loader: () => fetch("/booksData.json"),
        },
        {
          path: "/detailBook/:bookId",
          element: <DetailsBook />,
          loader: () => fetch("/booksData.json"),
        },
        {
          path: "/read",
          element: <GrapPages />,
          loader: () => fetch("/booksData.json"),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
