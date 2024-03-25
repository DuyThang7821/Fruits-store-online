import React, { memo } from "react";
import icons from "../ultils/icons";

const { MdEmail, FaFacebook, FaLinkedinIn, FaTwitter, FaUserCircle } = icons;
const TopHeader = () => {
  return (
    <div className="flex items-center justify-center h-[47px] w-full bg-[#f5f5f5]">
      <div className="w-main flex items-center justify-between">
        <div className="flex items-center">
          <MdEmail />
          <span className="text-14 flex items-center border-r border-gray-300 px-2">
            Thang@gmail.com
          </span>
          <span className="px-2"></span>
          <span className="text-gray-500 text-14">
            Free Shipping for all Order of $99
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <FaFacebook className="mr-8" size={16} />
            <FaTwitter className="mr-8" size={16} />
            <span className="relative">
              <FaLinkedinIn size={16} className="mr-2" />
              <span
                className="absolute top-0 h-full border-r border-gray-700"
                style={{ right: "-10px" }}
              ></span>
            </span>
            <FaUserCircle className="ml-8 mr-2" size={16} />
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);
