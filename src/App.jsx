import React from "react";
import Router from "./Components/Router/Router";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
