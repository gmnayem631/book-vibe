import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBookData = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBookData;
  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>

      <button className="btn btn-active btn-accent m-2">Read</button>
      <button className="btn btn-active btn-info m-2">Wish List</button>
    </div>
  );
};

export default BookDetails;
