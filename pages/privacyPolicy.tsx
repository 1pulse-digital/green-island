import React from "react";
import { PrivacyPolicy } from "../components/privacyPolicy";
import MainLayout from "../layouts/MainLayout";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div>
        <PrivacyPolicy />
      </div>
    </MainLayout>
  );
};
export default ErrorPage;
