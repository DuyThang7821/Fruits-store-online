import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import icons from "../ultils/icons";
import "./FeatureProducts.css";
const { BsHandbagFill, FaHeart, GrView } = icons;
const FeatureProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center columns-3">
      <div class="text-center">
        <h3 class="text-[36px] font-bold py-2">Feature Products</h3>
        <div class="border-b-4 border-[#7fad39] w-20 mx-auto"></div>
      </div>

      <div className="mt-8">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { backgroundColor: "#7fad39" } }}
          >
            <Tab label="All" sx={{ color: "black !important" }} />
            <Tab label="Orange" sx={{ color: "black !important" }} />
            <Tab label="Fresh meat" sx={{ color: "black !important" }} />
            <Tab label="Vegetable" sx={{ color: "black !important" }} />
            <Tab label="Fast food" sx={{ color: "black !important" }} />
          </Tabs>
        </Box>
      </div>

      <div className="mt-8 flex flex-auto flex-wrap">
        <div class="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div class="flex flex-col items-center">
            <a class="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 class="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>
          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer animate-slide-up" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer animate-slide-up" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer animate-slide-up" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 relative group">
          <img
            src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
            alt="img1"
            className="w-full h-auto object-cover"
          />
          <div class="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
            <GrView class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <FaHeart class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            <BsHandbagFill class="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <a className="mt-2" href="abc">
              Crab Pool Security
            </a>
            <h5 className="mt-2 font-bold text-lg">$30.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
