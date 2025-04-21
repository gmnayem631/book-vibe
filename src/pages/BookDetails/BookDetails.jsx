import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBookData = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBookData;

  const handleMarkAsRead = (id) => {
    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });

    toast("Wow so easy!");

    addToStoreDB(id);
  };
  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <ToastContainer />

      <button
        className="btn btn-active btn-accent m-2"
        onClick={() => handleMarkAsRead(id)}
      >
        Mark aas Read
      </button>
      <button className="btn btn-active btn-info m-2">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
