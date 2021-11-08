import React, { MouseEvent, useState } from "react";
import { Input } from "./input";
import Button from "./button";
import { toast } from "react-hot-toast";
import { submitContactForm } from "../lib/api";
import { useAuthContext } from "../contexts/authContext";

export const Message = () => {
  const { authToken } = useAuthContext();
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

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      // send the contact form
      e.preventDefault();
      e.stopPropagation();
      await submitContactForm(values, authToken);
      toast.success(`Your form has been submitted, thank you for getting in touch with us`, { icon: "🌿⚕" });
    } catch (e) {
      console.error(`Could not submit the form ${e}`);
      toast.error(`Something went wrong, we could not submit your form`, { icon: "😞️" });
    }
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
        </p>
        <p className={"text-md mt-2"}>
          <a
            className={"hover:text-secondary"}
            href="mailto: reception@perfecthealthpractice.com"
          >
            reception@perfecthealthpractice.com
          </a>
          <br />
          Read our
          <a
            className={"hover:text-secondary px-2"}
            href="http://localhost:3000/privacyPolicy">
            Privacy Policy
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
        <form className="relative grid w-full space-x-3">
          <div className="w-full max-w-2xl px-12 py-10 mt-10 bg-white dark:bg-gray-800">
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
              <Button onClick={handleSubmit} color={"primary"}>Submit</Button>
            </div>
          </div>
        </form>
        <div className={"px-12"}>
          <a href="https://robins-perfect-health.cliniko.com/bookings">
            <Button color={"primary"}>Book Appointment</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
