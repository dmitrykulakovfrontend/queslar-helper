import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineMenu, HiUserGroup } from "react-icons/hi";
import { SiReadthedocs } from "react-icons/si";
import { useRouter } from "next/router";
import { google } from "googleapis";
// export async function getServerSideProps({}) {
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });
//   const range = `Progress_ALL!A18:AP118`;

//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.SHEET_ID,
//     range,
//   });

//   console.log(response.data);
//   console.log(response.data.values[0]);

//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }
export default function Dashboard() {
  async function test() {
    const sheetId = "1dzx8QSiBQFcUOQTPa_uI64OCGQqESWtrq6EwqOVngZw";
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = "user-data";
    const query = encodeURIComponent("Select *");
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    const data: {}[] = [];
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        console.log({ rep });
        //Remove additional text and extract only JSON:
        // const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        // console.log(jsonData);
        // const colz: any[] = [];
        // const tr = document.createElement("tr");
        //Extract column labels
        // jsonData.table.cols.forEach((heading: { label: any }) => {
        //   if (heading.label) {
        //     let column = heading.label;
        //     colz.push(column);
        //     const th = document.createElement("th");
        //     th.innerText = column;
        //     tr.appendChild(th);
        //   }
        // });
        //extract row data:
        // jsonData.table.rows.forEach((rowData) => {
        //   const row = {};
        //   colz.forEach((ele, ind) => {
        //     row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
        //   });
        //   data.push(row);
        // });
        // processRows(data);
      });
  }
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  useEffect(() => {
    const player = localStorage.getItem("player");
    if (!player) {
      router.push("/");
    } else {
      setApiKey(JSON.parse(player).apiKey);
    }
  }, [router]);
  return (
    <div>
      {/* <button
        className="absolute z-50 flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 rounded-lg top-1 left-1 hover:bg-gray-100 group"
        onClick={test}
      >
        get data
      </button> */}
    </div>
  );
}
