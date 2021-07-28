import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

import running from "../images/running.jpeg";

// Custom components

// Blog Hero Banner

export const AboutPage = () => {
  return (
    <div className={"hidden sm:grid  grid-cols-2 h-[700px] bg-gray-50 "}>
      {/* Left column */}
      <div className={"grid ml-20 content-center w-full px-10"}>
        <h1 className={"text-5xl pb-4 font-bold"}>Where it all began…</h1>
      </div>

      {/* Right column */}
      <div className={"relative grid content-center"}>
        <div className={"absolute top-0 bottom-0 right-0 left-28"}>
          <Image layout="fill" objectFit="cover" src={running} />
        </div>
      </div>
    </div>
  );
};

const MobileBanner = () => {
  return (
    <div className={"sm:hidden grid h-[450px] bg-white"}>
      <div className={"relative grid content-center"}>
        <div className={"absolute top-0 bottom-0 right-0 left-40"}>
          <Image layout="fill" objectFit="cover" src={running} />
        </div>
      </div>

      <div className={"grid ml-10 mr-10 content-center "}>
        <h1 className={"text-5xl pb-4"}>Where it all began…</h1>
      </div>
    </div>
  );
};
