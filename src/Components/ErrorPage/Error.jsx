import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const backPageFromErrorPage = () => {
    navigate(-1);
  };
  return (
    <div className=" text-center py-5">
      <h2 className="font-bold text-3xl py-2">404! Not Found</h2>
      <button
        className="btn btn-primary "
        onClick={() => backPageFromErrorPage()}
      >
        Go to Back Page
      </button>
    </div>
  );
}
