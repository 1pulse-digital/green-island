import React from "react";
import { Error_404 } from "../components/error_404";
import MainLayout from "../layouts/MainLayout";

const ErrorPage = () => {
  return (
    <MainLayout>
      <div>
        <Error_404 />
      </div>
    </MainLayout>
  );
};
export default ErrorPage;
