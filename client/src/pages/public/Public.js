import React from "react";
import { Outlet } from "react-router-dom";
import { Header, TopHeader } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <TopHeader />
      <Header />

      <div className="w-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
