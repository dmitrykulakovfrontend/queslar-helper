import axios from "axios";
import { ApiData } from "../types/api";
export default async function fetchData(api: string) {
  const res = await axios.get<ApiData>(
    `https://queslar.com/api/player/full/${api}`
  );
  const data = res.data;
  return data;
}
