import React from "react";
import MainLayout from "../layouts/MainLayout";
import { UserProfile } from "../components/userProfile";

const MyAccount = () => {
  return (
    <MainLayout authRequired>
      <UserProfile />
    </MainLayout>
  );
};
export default MyAccount;
