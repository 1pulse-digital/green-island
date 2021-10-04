import MainLayout from "../layouts/MainLayout";
import { Contact as ContactComponent } from "../components/contact";
import { Message } from "../components/message";
import { Map } from "../components/map";

const Contact = () => {
  return (
    <MainLayout>
      <div>
        <ContactComponent />
        <Message />
        <Map />
      </div>
    </MainLayout>
  );
};

export default Contact;
