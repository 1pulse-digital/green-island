import React, { useState } from "react";
import { Input } from "./input";
import Button from "./button";

export const Message = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={" sm:grid  grid-cols-2 h-[700px]  w-full  font-karla   "}>
      {/* Left column */}
      <div
        className={"grid content-center   bg-gray-50  lg:px-24  text-primary text-lg pl-4 md:px-5  md:py-8  "}>
        <h2 className={"font-bold"}>Contact details</h2>
        <p className={"text-md"}>
          <a className={"hover:text-secondary"} href="tel:+27-11-706-2786">Tel: +27 11 706 2786</a>
          <br />
          <a className={"hover:text-secondary"} href="tel:+27-82-293-8502">Tel: +27 82 293 8502</a>
        </p>
        <p className={"text-md mt-2"}>
          <a
            className={"hover:text-secondary"}
            href="mailto: reception@perfecthealthpractice.com"
          >
            reception@perfecthealthpractice.com
          </a>
          <br />
          <a
            className={"hover:text-secondary"}
            href="mailto: accounts@perfecthealthpractice.com">
            accounts@perfecthealthpractice.com
          </a>
        </p>
        <h2 className={"mt-8 font-bold"}>Address</h2>
        <p className={"text-md "}>
          <span>33 Highland Avenue</span><br />
          <span>Bryanston Ext 8 </span><br />
          <span>Johannesburg</span><br />
          <span>Gauteng</span>
        </p>
        <h2 className={"font-bold mt-8"}>Operating hours</h2>
        <p className={"text-md"}>
          <span>Monday to Thursday 08:00 - 17:00</span><br />
          <span>Fridays 08:00 - 16:00</span><br />
          <span>Saturday 08:00- 13:00</span>
        </p>
        <p className={"mt-8"}>
          We reserve emergency slots each week which can be booked on Mondays.
          They are awarded on a first come first serve basis, and bookings open
          at 8am.
        </p>
        <br />
      </div>

      {/* Right column */}
      <div>
        <form className="grid relative space-x-3 w-full">
          <div className="py-10 px-12 mt-10 w-full max-w-2xl bg-white dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center dark:text-white text-primary">
              <h1 className={"text-1xl pb-4 font-bold text-left text-primary "}>
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 lg:col-span-1">
                <Input
                  id={"first-name"}
                  label={"First name "}
                  onChange={handleChange("firstName")}
                  value={values.firstName}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  id={"last-name"}
                  label={"Last name "}
                  onChange={handleChange("lastName")}
                  value={values.lastName}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <Input
                    id={"email"}
                    label={"Email"}
                    type={"email"}
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  id={"tel"}
                  label={"Tel"}
                  type={"tel"}
                  onChange={handleChange("tel")}
                  value={values.tel}
                />
              </div>
              <div className={"relative col-span-2"}>
                  <textarea
                    id={"message"}
                    rows={3}
                    name={"message"}
                    placeholder={"Message here"}
                    className="w-full h-full placeholder-transparent text-gray-900 disabled:text-gray-600 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary"
                    value={values.message}
                    onChange={handleChange("message")}
                  />
                <label
                  htmlFor={"message"}
                  className="absolute left-2 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-600 peer-focus:-top-5 peer-focus:text-sm"
                >
                  {"Message here"}
                </label>
              </div>
              <Button color={"primary"}>Submit</Button>
              {/* TODO: The below is a cool "squireish" button we can make a component laer*/}
              {/*<button*/}
              {/*  type="submit"*/}
              {/*  className="py-2 px-4 w-full text-base font-semibold text-center text-white rounded-lg shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-primary hover:bg-secondary">*/}
              {/*  Submit*/}
              {/*</button>*/}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
