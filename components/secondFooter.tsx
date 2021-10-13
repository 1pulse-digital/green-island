import Link from "next/link";

export interface SecondFooterProps {
}

export const SecondFooter = (props: SecondFooterProps) => {
  return (
    <div
      className="grid items-center p-8 border-t lg:grid-cols-2 lg:px-20 border-white-800 bg-primary">
      <div className="whitespace-nowrap text-center sm:text-left grid sm:flex sm:grid-flow-col text-sm text-white sm:divide-x gap-2">
        <span className={""}>©{new Date().getFullYear()} Perfect Health Practice</span>
        <Link href={"/privacyPolicy"}>
          <a rel={"noopener"} target={"_blank"} className={"sm:pl-2 duration-300 hover:text-secondary"}>
            Privacy Policy
          </a>
        </Link>
        <Link href={"/termsAndConditions"}>
          <a rel={"noopener"} target={"_blank"} className={"sm:pl-2 duration-300 hover:text-secondary"}>
            Terms and Conditions
          </a>
        </Link>
      </div>

      <div className="grid text-centre text-right text-sm text-white gap-2 mt-8 lg:mt-0">
        <Link href={"https://1pulse.co.za/"}>
          <a rel={"noopener"} target={"_blank"} className={"duration-300 hover:text-secondary"}>
            Website Development and Design by <em className={"font-semibold whitespace-nowrap"}>1Pulse Digital</em>
          </a>
        </Link>

        <Link href={"https://www.instagram.com/danedrevinphoto/"}>
          <a rel={"noopener"} target={"_blank"} className={"duration-300 hover:text-secondary"}>
            Photography by <em className={"font-semibold whitespace-nowrap"}>Dane Drevin</em>
          </a>
        </Link>
      </div>
    </div>
  );
};
