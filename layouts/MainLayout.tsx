import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { ReactNode } from "react";
import { SecondFooter } from "../components/secondFooter";
import Head from "next/head";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className={"flex flex-col min-h-screen bg-indigo-400"}>
      <Head>
        <title>Perfect Health Practice</title>
        <meta name="description" content="Live a natural, healthy and organic life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"z-30"}>
        <Navbar />
      </div>


      <div className={"flex-grow"}>{props.children}</div>

      <Footer />
      <SecondFooter />
    </div>
  );
};

export default MainLayout;
