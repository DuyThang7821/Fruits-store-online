import React, { memo, useState } from "react";
import icons from "../ultils/icons";
import FormLogin from "./Modal/FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user/userSlice";
const { MdEmail, FaFacebook, FaLinkedinIn, FaTwitter, FaUserCircle } = icons;

const TopHeader = () => {
  const dispatch = useDispatch(); 
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const loggedInEmail = useSelector(state => state.user.email);

  const handleSetLoggedInEmail = (email) => {
    dispatch(login({ isLoggedIn: true, email }));
    // save email vào localStorage
    localStorage.setItem("loggedInUser", email);
  };
  return (
    <div className="flex items-center justify-center h-[47px] w-full bg-[#f5f5f5]">
      <div className="w-main flex items-center justify-between">
        <div className="flex items-center">
          <MdEmail />
          <span className="text-14 flex items-center border-r border-gray-300 px-2">
            Support24/7@gmail.com
          </span>
          <span className="px-2"></span>
          <span className="text-gray-500 text-14">
            Free Shipping for all Order of $99
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <FaFacebook className="mr-8" size={16}/>
            <FaTwitter className="mr-8" size={16} />
            <span className="relative">
              <FaLinkedinIn size={16} className="mr-2" />
              <span
                className="absolute top-0 h-full border-r border-gray-700"
                style={{ right: "-10px" }}
              ></span>
            </span>
            <FaUserCircle
              onClick={handleOpenModal}
              className="ml-8 mr-2 hover:text-white hover:bg-[#7fad39] bg-white rounded-full cursor-pointer"
              size={16}
            />
            <span
              className="cursor-pointer hover:text-[#7fad39]"
              onClick={handleOpenModal}
            >
                {loggedInEmail ? loggedInEmail : "Login"}
            </span>
            <FormLogin
              show={showModal}
              handleCloseModal={handleCloseModal}
              handleSetLoggedInEmail={handleSetLoggedInEmail} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);