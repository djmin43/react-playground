import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function FullStack() {
  const { data, isLoading } = useQuery(["test"], () => fetchTest);

  const fetchTest = async (): Promise<any> => {
    const response = await axios.get("/api/full-stack/test");
    console.log(response);
    return response.data;
  };

  if (isLoading) return "loading!";

  if (data) return "data is here!";

  return (
    <div>
      <h1>full stack</h1>
    </div>
  );
}

export default FullStack;
