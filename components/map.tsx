import React from "react";

export const Map = () => {
  return (
    <div className={"grid absolute  "}>
      <iframe
        className={""}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.557930203964!2d28.003619614979353!3d-26.04801658350764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957411c227358d%3A0x7718f4d138de9d9a!2s33%20Highland%20Ave%2C%20Bryanston%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1627045925998!5m2!1sen!2sza"
        width="2000"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
