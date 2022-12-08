export default async function fetchData() {
  return await fetch(
    "https://queslar.com/api/player/full/96f4b9e966e3ad4576ae5260a4f2c562463c9ee1201319b729bcacc37e069563"
  ).then((res: Response) => res.json());
}
