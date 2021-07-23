import MainLayout from "../layouts/MainLayout";
import { AboutPage } from "../components/aboutPage";

const about = () => {
  return (
    <MainLayout>
      <div>
        <AboutPage />
      </div>
    </MainLayout>
  );
};

export default about;
