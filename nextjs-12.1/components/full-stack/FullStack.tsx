import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function FullStack() {
  const { data } = useQuery("test", () => fetchTest);

  const fetchTest = async (): Promise<any> => {
    const response = await axios.get("/api/full-stack/test");
    console.log(response);
    return response.data;
  };
  const hello = async () => {
    const response = await axios.get("/api/hello");
    console.log(response);
    return response.data;
  };

  return (
    <div>
      <h1>full stack</h1>
      hello world
    </div>
  );
}

export default FullStack;
