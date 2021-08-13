//import MainLayout from "../layouts/MainLayout";
import { Login } from "../components/login";
// import Background from "../components/background";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const Logins = () => {
  return (
    //<MainLayout>
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Login />
      </div>
      <Footer />
    </div>
    //</MainLayout>
  );
};

export default Logins;
