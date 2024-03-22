import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
const FeatureProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="border-b-4 border-[#7fad39] flex items-center">
        <h3 className="text-[36px] font-bold py-2 mx-4">Feature Products</h3>
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
  <div className="flex flex-col items-center justify-center p-2 ">
    <img
      className=""
      src="https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  {/* Các sản phẩm khác tương tự */}

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
    <div className="flex flex-col items-center">
      <a className="mt-2" href="abc">
        Crab Pool Security
      </a>
      <h5 className="mt-2 font-bold text-lg">$30.00</h5>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center p-2">
    <img
      src="https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg.webp"
      alt="img1"
    />
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
