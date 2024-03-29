import React, { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SecondFooter } from "../components/secondFooter";
import Head from "next/head";
import { useAuthContext } from "../contexts/authContext";
import { RoleName } from "../types/user";
import Link from "next/link";

export interface MainLayoutProps {
  children: ReactNode;
  authRequired?: boolean;
  roleRequired?: RoleName;
}

const MainLayout = (props: MainLayoutProps) => {
  const { user } = useAuthContext();
  let accessAllowed;

  if (props.roleRequired) {
    accessAllowed = user?.role.name === props.roleRequired;
  } else {
    accessAllowed = Boolean(user || !props.authRequired);
  }

  return (
    <div className={"flex flex-col min-h-screen"}>
      <Head>
        <title>Perfect Health Practice</title>
        <meta
          name="description"
          content="Live a natural, healthy and organic life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {!accessAllowed && (
        <>
          <div className={"py-20 text-center"}>
            You need to be logged in to view this page
          </div>
          <Link href="/login">
            <a
              className={
                "py-20 text-center hover:text-secondary hover:underline"
              }>
              Go to login page
            </a>
          </Link>
        </>
      )}
      {accessAllowed && (
        <div className={"flex flex-col flex-grow"}>{props.children}</div>
      )}

      <Footer />
      <SecondFooter />
    </div>
  );
};

export default MainLayout;
