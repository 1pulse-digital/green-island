import React, { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { sendEvent } from "../lib/gtag";

export const Register = () => {
  const { register } = useAuthContext();
  const router = useRouter();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // validate the fields
    let valid = true;
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (values.firstName === "") {
      newErrors.firstName = "First Name is required";
      valid = false;
    }
    if (values.lastName === "") {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (values.email === "") {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (values.password === "") {
      newErrors.password = "Password is required";
      valid = false;
    }
    if (values.password !== values.passwordConfirmation) {
      newErrors.password = "Passwords don't match";
      valid = false;
    }
    setErrors(newErrors);

    if (valid) {
      try {
        await register(values.email, values.password);
        await router.replace("/");
        toast(`Welcome to The Perfect Health Practice!`, { icon: "🌿⚕️" });
        sendEvent({ action: "sign_up" });

      } catch (e) {
        toast.error(e, { icon: "😞️" });
      }
    }
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const newValues = { ...values, [field]: event.target.value };
    setValues(newValues);

    // password validation
    if (field === "passwordConfirmation" || errors.password) {
      // validate the password field
      if (newValues.password !== newValues.passwordConfirmation) {
        setErrors({ ...errors, password: "Passwords don't match" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  return (
    <div
      className={
        "grid grid-cols-2 w-full bg-gray-100 md:h-[800px] content-center font-karla px-16 text-primary "
      }>
      {/* Left column */}
      <div className={" px-10  grid-cols-2 "}>
        <h6 className={"text-4xl pb-8 grid   "}>Create an Account</h6>
        <div>
          <div className="grid grid-cols-2 gap-4 py-12 px-10 m-auto bg-white">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                First Name *
                <input
                  type="text"
                  id="contact-form-name"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                {errors.firstName &&
                  <span className="text-xs text-red-600">{errors.firstName}</span>
                }
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Password *
                <input
                  type="password"
                  id="contact-form-password"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                />
                {errors.password &&
                  <span className="text-xs text-red-600">{errors.password}</span>
                }
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Last Name *
                <input
                  type="text"
                  id="contact-form-lastnamel"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                {errors.lastName &&
                  <span className="text-xs text-red-600">{errors.lastName}</span>
                }
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Confirm Password *
                <input
                  type="password"
                  id="contact-form-confirmpassword"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                  value={values.passwordConfirmation}
                  name="passwordConfirmation"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Email *
                <input
                  type="email"
                  id="contact-form-email"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors.email &&
                  <span className="text-xs text-red-600">{errors.email}</span>
                }
              </div>
            </div>
          </div>

          {/* TODO: Should this box not also have a px-10 padding instead of 12 */}
          <div className={"bg-white py-4 px-12"}>
            <div className={"border border-gray-700 w-full py-2 px-4 "}>
              <p className={"text-opacity-100 font-bold"}>
                To create an account, please review our terms and conditions
                before you click on the "register" button below.{" "}
              </p>
              <p className="mt-1">
                By clicking on the "register" button you agree to you
                personal data being used in accordance with the privacy notice and
                cookie notice. We will use your personal data to manage your
                account, fulfill your order, and dispatch goods via our courier
                service. Your phone number is required for delivery contact from
                the courier.
              </p>
            </div>
          </div>
          {/* TODO: Add a link to the Terms & Conditions here, or maybe just a checkbox */}
          <div className="col-span-2 py-8 px-10 bg-white">
            {/* TODO: Is this the correct button? Should it not be the custom component button? */}
            <button
              type="submit"
              onClick={handleRegister}
              className="justify-items-start py-2 px-4 text-base font-semibold text-center text-black border shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none border-primary justify-items hover:bg-secondary"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className={" px-10  mr-10  text-lg py-20 "}>
        <div className={"bg-white py-10 px-10 "}>
          <p className={"font-bold text-2xl "}>
            Benefits of Creating an Account{" "}
          </p>
          <br />
          <p className={"font-bold"}>
            News and exclusive offers!<br />
          </p>
          Sign up to receive email updates on promotions, launches, gift ideas
          and more. <br />
          <br />
          <p className={"font-bold"}>
            {" "}
            Order History <br />
          </p>
          Receive important information about your order.<br />
          <br />
          <p className={"font-bold"}>
            Faster Checkout<br />
          </p>
          Save your billing and shipping information to make repeat purchases
          easier.
        </div>
      </div>
    </div>
  );
};
