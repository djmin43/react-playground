import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function FullStack() {
  const { data } = useQuery("test", () => fetchTest);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchTest = async (): Promise<any> => {
    return await axios.get("/api/full-stack/test");
  };

  return (
    <div>
      <h1>full stack</h1>
      hello world
    </div>
  );
}

export default FullStack;
