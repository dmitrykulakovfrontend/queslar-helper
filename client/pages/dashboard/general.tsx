import { google } from "googleapis";
import { DataTable } from "components/PlayersTable/DataTable";
import { columns } from "components/PlayersTable/playerColumns";
import { Player } from "types/googleSheet";
export async function getServerSideProps({}) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
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
export default function General({ data }: { data: Player[] }) {
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
