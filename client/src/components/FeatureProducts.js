import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import icons from "../ultils/icons";
import { apigetProducts } from "../apis/products";
import { apiGetCategories } from "../apis";
import { tabsToCategoryIds } from "../ultils/constants";
import PaginationPage from "./pagination/PaginationPage";

const { BsHandbagFill, FaHeart, GrView } = icons;
const FeatureProducts = () => {
  const pageSize = parseInt(process.env.REACT_APP_LIMIT, 10) || 8;
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await apiGetCategories();
        setCategories(categoriesResponse.data);

        const productsResponse = await apigetProducts();
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const productsResponse = await apigetProducts({});
        let filteredProducts = [];

        if (value === 0) {
          filteredProducts = productsResponse.data;
        } else {
          const categoryId = tabsToCategoryIds[value];
          filteredProducts = productsResponse.data.filter((product) =>
            product.categories.some((category) => category.id === categoryId)
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductByCategory();
  }, [value, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(products.length / pageSize);
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="w-full flex flex-col items-center justify-center columns-3">
      <div className="text-center">
        <h3 className="text-[36px] font-bold py-2">Feature Products</h3>
        <div className="border-b-4 border-[#7fad39] w-20 mx-auto"></div>
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
            <Tab
              label="Fruits & Nut gifts"
              sx={{ color: "black !important" }}
            />
            <Tab label="Fresh meat" sx={{ color: "black !important" }} />
            <Tab label="Vegetable" sx={{ color: "black !important" }} />
            <Tab label="Fast food" sx={{ color: "black !important" }} />
          </Tabs>
        </Box>
      </div>

      <div className="mt-8 flex flex-auto flex-wrap">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center p-3 relative group"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-[270px] h-[270px] object-cover"
            />
            <div className="absolute top-[50px] left-2 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 hover:animate-slide-top">
              <GrView className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
              <FaHeart className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
              <BsHandbagFill className="m-1 text-black hover:text-white hover:bg-[#7fad39] bg-white rounded-full  border-black mr-5 w-10 h-10 p-3 shadow-md hover:shadow-none cursor-pointer" />
            </div>
            <div className="flex flex-col items-center">
              <span className="mt-2">{product.name}</span>
              <h5 className="mt-2 font-bold text-lg">${product.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {totalPages > 0 && (
          <PaginationPage
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
