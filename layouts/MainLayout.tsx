import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />

      {/* Content goes here */}
      <div>{props.children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
