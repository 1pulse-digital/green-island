import React from "react";
import Image from "next/image";
import contacts from "../images/contacts.jpg";
import contact from "../images/contact.jpg";

export const Message = () => {
  return (
    <div className={" sm:grid  grid-cols-2 h-[700px]  w-full     "}>
      {/* Left column */}
      <div
        className={
          "grid  content-center   bg-gray-100  lg:px-12  text-lg pl-4 md:px-5  md:py-8  "
        }
      >
        <p className={"text-md lg:pr-48 md:pr-32 grid sm:pt-8 "}>
          33 Highland Avenue<br></br> Bryanston Ext 8 <br></br>Johannesburg,
          Gauteng
        </p>
        <br></br>
        <p className={"text-md lg:pr-48 md:pr-32"}>
          reception@perfecthealthpractice.com
          <br></br>accounts@perfecthealthpractice.com
        </p>
        <br></br>
        <p className={"text-md lg:pr-48 md:pr-32"}>
          Tel: +27 11 706 2786<br></br>
          Tel: +27 82 293 8502{" "}
        </p>
        <br></br>
        <p className={"text-md lg:pr-48 md:pr-32"}>
          Monday to Thursday 08:00 - 17:00 <br></br>
          <br></br>
          Fridays 08:00 - 16:00 <br></br>
          <br></br>
          Saturday 08:00- 13:00 <br></br>
          <br></br>
          We reserve emergency slots each week which can be booked on Mondays.
          They are awarded on a first come first serve basis, and bookings open
          at 8am.
        </p>
        <br></br>
      </div>

      {/* Right column */}
      <div>
        <form className="  grid flex w-full  space-x-3 relative ">
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white  dark:bg-gray-800 ">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
              <h1 className={"text-1xl pb-4 font-bold text-left "}>
                Send us a message
              </h1>
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    className="   flex-1 appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="  appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="  border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="Tel"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" for="name">
                  <textarea
                    className=" border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    id="comment"
                    placeholder="Message Here"
                    name="comment"
                    rows="5"
                    cols="40"
                  ></textarea>
                </label>
              </div>
              <div className=" text-right">
                <button
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={"  "}>
        <div className={" "}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.557930203964!2d28.003619614979353!3d-26.04801658350764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957411c227358d%3A0x7718f4d138de9d9a!2s33%20Highland%20Ave%2C%20Bryanston%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1627045925998!5m2!1sen!2sza"
            width="2000"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
