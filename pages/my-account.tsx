import React from "react";
import MainLayout from "../layouts/MainLayout";
import { UserProfile } from "../components/userProfile";

const MyAccount = () => {
  return (
    <MainLayout>
      <div>
        <UserProfile />
      </div>
    </MainLayout>
  );
};
export default MyAccount;
