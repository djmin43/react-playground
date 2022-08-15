import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IJusoQueryProps {
  children: JSX.Element;
  keys?: IQueryKeys;
}

interface IQueryKeys {
  confmKey: string;
  currentPage: number;
  countPerPage: number;
  keyword: string;
  resultType: "xml" | "json";
}
const jusoEndpoint = "https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do";

function JusoQuery({
  children,
  keys = {
    confmKey: "devU01TX0FVVEgyMDIyMDgxNTE3NTIwNDExMjg4MjY=",
    currentPage: 1,
    countPerPage: 5,
    keyword: "운양동",
    resultType: "json",
  },
}: IJusoQueryProps) {
  const data = useJusoQuery(keys);
  console.log(data);
  return children;
}

function useJusoQuery(keys: IQueryKeys) {
  const { data } = useQuery(["juso", keys], () => getJuso(keys));
  return data?.data;
}

function getJuso(keys: IQueryKeys) {
  try {
    const res = axios.get(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?$confmKey=${keys.confmKey}&currentPage=${keys.currentPage}&countPerPage=${keys.countPerPage}&keyword=${keys.keyword}&resultType=${keys.resultType}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default JusoQuery;
