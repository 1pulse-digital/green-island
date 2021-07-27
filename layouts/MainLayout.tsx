import { Footer } from "../components/footer";
//import { Navbar } from "../components/navbar";
import Navbar2 from "../components/navbar2";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />

      {/* Content goes here */}
      <div> {props.children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
