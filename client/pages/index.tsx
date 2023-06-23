import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { useRouter } from "next/router";
import { apiUrl } from "../constants";

type Props = {};
//
function Index({}: Props) {
  const [apiKey, setApiKey] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const player = localStorage.getItem("player");
    if (player) {
      router.push("/dashboard");
    }
  }, [router]);
  async function handleApiKey() {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/players/${apiKey}`, {
        method: "POST",
      });
      console.log(res);
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      setIsLoading(false);
      localStorage.setItem("player", JSON.stringify({ apiKey }));
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      setIsLoading(false);
      setApiKey("");
    }
  }
  console.log({ isError, isLoading });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <span className="text-2xl font-bold leading-none text-center text-gray-900 sm:text-3xl">
        Welcome to Roman Empire website!
      </span>
      {}
      {isLoading ? (
        <span className="text-2xl font-bold leading-none text-center text-gray-900 sm:text-3xl">
          Loading...
        </span>
      ) : isError ? (
        <span className="text-xl font-bold leading-none text-gray-900 sm:text-1xl">
          You have entered incorrect api key or queslar server are not
          responding.
        </span>
      ) : (
        ""
      )}
      <Input
        label="Api key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter api key"
      />
      <button
        onClick={handleApiKey}
        className="flex items-center px-4 py-2 text-base font-normal text-gray-900 transition-all bg-white rounded-lg hover:bg-gray-100 group"
      >
        <span className="flex-1 whitespace-nowrap">Proceed</span>
      </button>
    </div>
  );
}

export default Index;
