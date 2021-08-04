import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";

const Shop = () => {
  return (
    <MainLayout>
      <ShopBanner/>
      The shop goes here
      <Suppliers/>
    </MainLayout>
  );
};

export default Shop;
