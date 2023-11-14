import "../globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MenuProvider, useMenu } from "../providers/MenuContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { menu, setMenu } = useMenu();
  return (
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <div>
          <Header />
          <div className="flex overflow-hidden bg-white ">
            <Sidebar />
            <div
              id="main-content"
              className="relative flex flex-col w-full h-full min-h-screen overflow-y-auto bg-gray-50 lg:ml-64"
            >
              <main className="flex-1">
                <div className="px-4 pt-6 mt-16 ">
                  <Component {...pageProps} />
                </div>
              </main>
              <footer className="p-4 mx-4 my-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <p className="my-2 text-center text-gray-500">
                  Last updated: 2023-11-14 08:58:41 UTC
                </p>
                <p className="my-2 text-center text-gray-500">
                  &copy; 2023-2023 Made with love by AtomEistee (
                  <a
                    target="_blank"
                    href="https://dmitrykulakov.vercel.app/"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Dmitry Kulakov
                  </a>
                  )
                </p>
              </footer>
            </div>
          </div>
        </div>
      </MenuProvider>
    </QueryClientProvider>
  );
}
