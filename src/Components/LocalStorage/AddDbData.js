import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getStoreReadList = () => {
  const storedData = localStorage.getItem("books");
  if (storedData) {
    const storedListBook = JSON.parse(storedData);
    return storedListBook;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    toast.error("Books Already Exsisted");

    return false;
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("books", storedListStr);
  }
};

const getStoreWiseList = () => {
  const wiseDataStore = localStorage.getItem("wise-list");
  if (wiseDataStore) {
    const wiseData = JSON.parse(wiseDataStore);
    return wiseData;
  } else {
    return [];
  }
};

const addToStoreWiseList = (id) => {
  const soredList = getStoreWiseList();
  if (soredList.includes(id)) {
    toast.error("Book already Listed to WiseList");
    return false;
  } else {
    soredList.push(id);
    const wiseListInt = JSON.stringify(soredList);
    localStorage.setItem("wise-list", wiseListInt);
  }
};
export {
  addToStoredReadList,
  getStoreReadList,
  addToStoreWiseList,
  getStoreWiseList,
};
