import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-40 my-14 sm:px-20 md:px-22">
        <div className="h-full col-span-12 p-4 text-center bg-white dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark lg:col-span-4 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-8 rounded-2xl shadow-custom-light dark:shadow-custom-dark" style={{height: "85vh"}}>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
