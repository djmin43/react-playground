import axios from "axios";
import { baseUrl } from "../constants/end-point.ts";
import { Member } from "../App.tsx";
import { Reservation } from "../types";

export const getList = () => {
  return axios
    .get<Reservation[]>(`${baseUrl}/reservation/list`)
    .then((res) => res.data);
};

export const createNewMember = (member: Member) => {
  return axios
    .post<string>(`${baseUrl}/reservation`, member)
    .then((res) => res.data);
};
