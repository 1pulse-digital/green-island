import React from "react";

export const Message = () => {
  return (
    <div className={" sm:grid  grid-cols-2 h-[700px]  w-full  font-karla   "}>
      {/* Left column */}
      <div
        className={
          "grid content-center   bg-gray-50  lg:px-24  text-primary text-lg pl-4 md:px-5  md:py-8  "
        }>
        <p className={"text-md lg:pr-48 md:pr-32 grid sm:pt-8 "}>
          33 Highland Avenue<br /> Bryanston Ext 8 <br />Johannesburg,
          Gauteng
        </p>
        <br />
        <p className={"text-md lg:pr-48 md:pr-32"}>
          <a
            className={"hover:text-secondary"}
            href="mailto: reception@perfecthealthpractice.com">
            reception@perfecthealthpractice.com
          </a>

          <br />
          <a
            className={"hover:text-secondary"}
            href="mailto: accounts@perfecthealthpractice.com">
            accounts@perfecthealthpractice.com
          </a>
        </p>
        <br />
        <p className={"text-md lg:pr-48 md:pr-32"}>
          Tel: +27 11 706 2786<br />
          Tel: +27 82 293 8502{" "}
        </p>
        <br />
        <p className={"text-md lg:pr-48 md:pr-32"}>
          Monday to Thursday 08:00 - 17:00 <br />
          <br />
          Fridays 08:00 - 16:00 <br />
          <br />
          Saturday 08:00- 13:00 <br />
          <br />
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
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-name"
                    className="flex-1 py-2 w-full placeholder-gray-400 bg-white border-b-2 appearance-none text-primary"
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="py-2 w-full placeholder-gray-400 bg-white border-b-2 appearance-none text-primary"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="py-2 w-full placeholder-gray-400 bg-white border-b-2 appearance-none text-primary"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="py-2 w-full placeholder-gray-400 bg-white border-b-2 text-primary"
                    placeholder="Tel"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    className="py-2 w-full placeholder-gray-400 bg-white border-b-2 text-primary"
                    id="comment"
                    placeholder="Message Here"
                    name="comment"
                    rows={5}
                    cols={40}
                  />
                </label>
              </div>
              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="py-2 px-4 w-full text-base font-semibold text-center text-white rounded-lg shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-primary hover:bg-secondary">
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
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
