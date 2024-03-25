import React from "react";
import logo from "../assets/logo.png.webp";
import icons from "../ultils/icons";
import {Link} from 'react-router-dom';
import path from '../ultils/path';
const { RiPhoneFill, MdEmail,BsHandbagFill, FaUserCircle, FaHeart } = icons;
const Header = () => {
return (
    <div className=" w-main flex justify-between h-[127px] py-[35px]">
      <Link to={`/${path.HOME}`}>
      <img src={logo} alt="logo" className="w-[120px] h-[50px] object-contain" />
      </Link>
      <div className="flex text-[13px] ">
        <div className="flex flex-col px-6 border-r items-center">
          <span className="flex gap-2 items-center">
            <RiPhoneFill color="#7fad39" size={24} />
            <span className="font-semibold">0826257475</span>
          </span>
          <span>Mon-Sat 8:00AM - 5:30PM</span>
        </div>

        <div className="flex flex-col items-center px-6 border-r">
          <span className="flex gap-2 items-center">
            <MdEmail color="#7fad39" size={24} />
            <span className="font-semibold">Support@gmail.com</span>
          </span>
          <span>ONLINE SUPPORT 24/7</span>
        </div>


        <div className="flex items-center justify-center px-6 border-r">
            <FaHeart size={24} color="#000" />
        </div>
        <div className="flex items-center justify-center gap-2 px-6 border-r">
            <BsHandbagFill color="#000" size={24} />
            <span>0 items</span>
        </div>
        <div className="flex items-center justify-center px-6 border-r">
            <FaUserCircle size={24} color="#7fad39" />
        </div>
      </div>
    </div>
  );
};

export default Header;
