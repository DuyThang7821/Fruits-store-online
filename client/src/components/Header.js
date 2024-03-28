import React from "react";
import logo from "../assets/logo.png.webp";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import path from "../ultils/path";
const { RiPhoneFill, MdEmail, BsHandbagFill, FaUserCircle, FaHeart } = icons;
const Header = () => {
  return (
    <div className=" w-main flex justify-between h-[127px] py-[35px]">
      <div>
        <Link to={`/${path.HOME}`}>
          <img
            src={logo}
            alt="logo"
            className="w-[120px] h-[50px] object-contain"
          />
        </Link>
      </div>

      <div class="flex justify-between items-center pl-5  space-x-10">
        <a className="font-bold" href="http://localhost:3000/">
          HOME
        </a>
        <a className="font-bold" href="http://localhost:3000/">
          SHOP
        </a>
        <a className="font-bold" href="http://localhost:3000/">
          PAGES
        </a>
        <a className="font-bold" href="http://localhost:3000/">
          BLOGS
        </a>
        <a className="font-bold" href="http://localhost:3000/">
          CONTACT
        </a>
      </div>


      <div className="flex text-[13px] ">
        <div class="flex items-center justify-center ">
          <FaHeart size={24} />
          <sup class="text-xs rounded-full bg-[#7fad39] text-white px-1 mr-2">
            2
          </sup>
        </div>
        <div class="flex items-center justify-center ">
          <BsHandbagFill size={24} />
          <sup class="text-xs rounded-full bg-[#7fad39] text-white px-1 -ml-2">
            3
          </sup>
        </div>

        <div className="flex items-center justify-center gap-2 px-6">
          <span className="text-gray-500 text-[14px]">item:</span>
          <span className="font-bold text-[16px]">$150.00</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
