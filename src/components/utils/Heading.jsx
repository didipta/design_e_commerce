import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h5 className="text-title text-primary-600 uppercase">{title}</h5>
      <h2 className="text-h5 text-text-dark font-semibold">{subtitle}</h2>
    </div>
  );
};

export default Heading;
