import MainLayout from "../layouts/MainLayout";
import { Register } from "../components/register";

// TODO: This must be called Register (The file must be renamed as well)
// TODO: This will require an update to all links pointing to this page
const Reg = () => {
  return (
    <MainLayout>
      <div>
        <Register />
      </div>
    </MainLayout>
  );
};

export default Reg;
