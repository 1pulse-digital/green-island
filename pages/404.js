import { Button } from "../components/button";
export default function Custom404() {
  return (
    <div className={"bg-gray-100 h-[700px]"}>
      <div className={"   h-[100px] py-32   "}>
        <p
          className={
            "grid-cols justify-items-center text-center py-10 text-9xl"
          }>
          404
        </p>
        <p className={"grid-cols  justify-items-center text-center text-2xl "}>
          The requested page cannot be found!!!{" "}
        </p>

        <div className="flex justify-center items-center py-20">
          <a href="/shop">
            <Button color={"primary"}>Continue Shopping</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
