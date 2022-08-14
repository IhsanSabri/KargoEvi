import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ prevPageLink }) => {

  return (
    <div className="row-cols-2 justify-evenly absolute pb-[13px] w-full bottom-0 p-4 md:flex md:items-center md:p-6 shadow-[0_0_10px_0_rgba(38,43,55,0.25)]">
      <div className="col-lg-6 flex items-center">
        <Link className="text-[#225386] text-[24px] flex no-underline" to={prevPageLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-short text-[40px]"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            ></path>
          </svg>
          &nbsp; Geri
        </Link>
      </div>
      <button
        className="col-lg-6 justify-center w-[11%] align-items-center btn btn-danger shadow-none py-[11px] pr-[30px] pl-[35px] text-[21px]"
        type="submit"
        form="hook-form"
      >
        Devam Et
      </button>
    </div>
  );
};

export default Footer;