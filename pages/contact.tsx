import MainLayout from "../layouts/MainLayout";
import { Contact } from "../components/contact";
import { Message } from "../components/message";
//import { Map } from "../components/map";
import { Login } from "../components/login";

// import Background from "../components/background";

const contact = () => {
  return (
    <MainLayout>
      <div>
        <Contact />
        <Message />

        {/* <Map /> */}
      </div>
    </MainLayout>
  );
};

export default contact;
