import Image from "next/image";
import hero from "../../images/perfect-health-banner.jpg";
import mobileHero from "../../images/perfect-health-mobile-banner.jpg";


import Link from "next/link";
import Button from "../button";
import { AlgoliaAutocomplete } from "../search/autocomplete";

const MobileBanner = () => {
  return (
    <div className={" grid h-full relative px-[50px] content-center"}>
      <div className={"absolute inset-0"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={mobileHero}
          alt="herbs in a bowl"
          placeholder={"blur"}
        />
      </div>

      <div className={"grid z-10 "}>
        <h1 className={"text-5xl text-primary font-normal font-karla"}>
          Perfect health is within your grasp.
        </h1>

        <p className={"text-xl mt-8 text-gray-600 font-light font-karla"}>
          <span className="inline bg-white/90">
            We empower our patients with the tools to heal themselves,
            and the knowledge to own their health.
          </span>
        </p>

        {/* Search box */}
        <div className="">
          <AlgoliaAutocomplete />
        </div>

        {/* Shop all button */}
        <div className="z-10 py-5 text-right justify-self-start">
          <Link href="/shop">
            <a>
              <Button color="primary">Shop all</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DesktopBanner = () => {
  return (
    <div
      className={
        "grid relative px-[50px] h-full lg:px-[100px] content-center "
      }>
      <div>
        <Image
          layout="fill"
          objectFit="cover"
          src={hero}
          alt="herbs in a bowl"
          placeholder={"blur"}
        />
        <div className={"grid z-10 relative"}>
          <h1 className={"text-5xl lg:text-7xl text-primary font-medium font-karla"}>
            Perfect health is<br />
            within your grasp.
          </h1>

          <p className={"text-2xl mt-8 text-gray-600 font-light font-karla "}>
            <span
              className={"bg-white/90 inline rounded"}>We empower our patients with the tools to heal themselves,</span>
            <br />
            <span className={"bg-white/90 inline rounded"}>and the knowledge to own their health.</span>
          </p>

          {/* Search box */}
          <div className="relative w-1/2 py-4 lg:w-1/3 2xl:w-1/4">
            <AlgoliaAutocomplete />
          </div>

          {/* Shop all button */}
          <div className="z-10 text-right justify-self-start">
            <Link href={"/shop"} passHref>
              {/*TODO: Use the Button component */}
              <button
                type="submit"
                className="px-8 py-2 text-base font-normal text-center text-white transition duration-200 ease-in rounded-full shadow-md sm:w-full hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-primary hover:bg-secondary focus:ring-secondary">
                Shop all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className={"h-[800px]"}>
      <div className="hidden h-full md:block">
        <DesktopBanner />
      </div>

      <div className={"md:hidden h-full"}>
        <MobileBanner />
      </div>
    </div>
  );
};
