import "../globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MenuProvider, useMenu } from "../providers/MenuContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Inter } from "next/font/google";

import { cn } from "../@/lib/utils";
import { useRouter } from "next/router";
export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { menu, setMenu } = useMenu();
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <QueryClientProvider client={queryClient}>
        <div
          className={cn(
            "min-h-screen bg-background font-inter antialiased",
            inter.variable,
          )}
        >
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <div
          className={cn(
            "min-h-screen bg-background font-inter antialiased",
            inter.variable,
          )}
        >
          <Header />
          <div className="flex overflow-hidden bg-white ">
            <Sidebar />
            <div
              id="main-content"
              className="relative flex flex-col w-full h-full min-h-screen bg-gray-50 lg:ml-64"
            >
              <main className="flex-1 lg:w-[calc(100%_-_16rem)]">
                <div className="px-4 pt-6 mt-16">
                  <Component {...pageProps} />
                </div>
              </main>
              <footer className="p-4 lg:w-[calc(100%_-_16rem_-_2rem)] mx-4 my-4 bg-white rounded-lg shadow md:flex gap-2 md:items-center md:justify-between md:p-6">
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
