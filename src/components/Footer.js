import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ children, ...rest }) => {
  return (
    <>
      <div>
        <div className="col-lg-6 flex items-center w-[15%]">
          <Link
            className="text-[#225386] text-[24px] flex no-underline"
            to={rest.prevLink}
          >
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
          {children}
        </div>
      </div>
    </>
  );
};

export default Footer;
