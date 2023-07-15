"use client";
import React, { useId, useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "@/firebase/config";

const BookForm = () => {
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");

  const randomId = useId();

  const submitBook = async () => {
    const res = await set(ref(database, "books/"), {
      id: randomId,
      name,
      isbn,
    });
    console.log(res);
  };
  return (
    <div>
      <h2>Book Form</h2>
      <form>
        <div>
          <span>이름</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>isbn</span>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
      </form>
      <button onClick={submitBook}>submit request</button>
    </div>
  );
};

export default BookForm;
