import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import { ReactNode } from "react";
import { SecondFooter } from "../components/secondFooter";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />

      {/* Content goes here */}
      <div>{props.children}</div>

      <Footer />
      <SecondFooter/>
    </div>
  );
};

export default MainLayout;
