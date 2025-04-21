import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoreBook = storedBookData.map((id) => parseInt(id));
    console.log(convertedStoreBook);
    const myReadList = data.filter((book) =>
      convertedStoreBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I have read {readList.length}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-4">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
