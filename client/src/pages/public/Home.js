import React from "react";
import { Sidebar, Banner } from "../../components/";
const Home = () => {
  return (
    <div className="w-main flex">
      <div className="flex flex-col gap-5 w-[25%] flex-auto border pr-12">
        <Sidebar />
        
      </div>

      <div className="flex flex-col gap-5 pl-10 w-[75%] flex-auto">
        <Banner />
        <span>Best Seller</span>
      </div>
    </div>
  );
};

export default Home;
