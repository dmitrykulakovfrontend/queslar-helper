import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineMenu, HiUserGroup } from "react-icons/hi";
import { SiReadthedocs } from "react-icons/si";
import { useRouter } from "next/router";
import { google } from "googleapis";
import { DataTable } from "components/PlayersTable/DataTable";
import { columns } from "components/PlayersTable/playerColumns";
import { Player } from "types/googleSheet";
export async function getServerSideProps({}) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = `Progress_ALL!A18:AP500`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  const headers: string[] = response.data.values ? response.data.values[0] : [];

  const values: string[][] = response.data.values?.slice(1) || [];

  // Combine headers and values into an array of objects
  const arrayOfObjects = values.map((valueArray) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header == "" ? index : header] = valueArray[index] ?? null;
    });
    return obj;
  });

  return {
    props: {
      data: arrayOfObjects,
    },
  };
}
export default function Dashboard({ data }: { data: Player[] }) {
  return (
    <div className="">
      {/* <button
        className="absolute z-50 flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 rounded-lg top-1 left-1 hover:bg-gray-100 group"
        onClick={test}
      >
        get data
      </button> */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
