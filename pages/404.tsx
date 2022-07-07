import { Button } from "../components/button";
import MainLayout from "../layouts/MainLayout";

const Custom404 = () => {
  return (
    <MainLayout>
      <div className={" "}>
        <div className={"md:py-48 sm:py-36 sm:h-48 md:h-auto"}>
          <p
            className={
              "grid-cols justify-items-center text-center py-10 text-9xl"
            }>
            404
          </p>
          <p
            className={"grid-cols  justify-items-center text-center text-2xl "}>
            The requested page cannot be found!!!
          </p>

          <div className="flex justify-center items-center py-20">
            <a href="/orders">
              <Button color={"primary"}>Browse products</Button>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Custom404;
