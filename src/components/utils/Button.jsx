import React from "react";

const Button = () => {
  return (
    <div className=" flex">
      <button className="w-[142px] h-[48px] rounded-full bg-primary-500 text-text-light">
        Shop Now
      </button>
      <button className="w-[48px] h-[48px] rounded-full bg-primary-500 text-text-light flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 7L6 18"
            stroke="#F4F8FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
            stroke="#F4F8FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;
