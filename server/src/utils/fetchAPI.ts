import axios from "axios";
// import { ApiData } from "../types/api";
export default async function fetchAPI<ResponseType>(url: string) {
  const res = await axios.get(`https://queslar.com/api${url}`);
  const data = res.data;
  return data as ResponseType;
}
