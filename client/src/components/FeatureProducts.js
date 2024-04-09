import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import icons from "../ultils/icons";
import { apigetProducts } from "../apis/products";
import { apiGetCategories } from "../apis";
import PaginationPage from "./pagination/PaginationPage";
import { product } from "../ultils/constants";

const { BsHandbagFill, FaHeart, GrView } = icons;
const FeatureProducts = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(false); 
  const pageSize = product.productLimit || 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await apiGetCategories();
        setCategories(categoriesResponse.data);
        const productsResponse = await apigetProducts({ limit: pageSize });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageSize]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
    fetchProductByCategory(newValue);
  };

  const fetchProductByCategory = async (tabIndex) => {
    try {
      const productsResponse = await apigetProducts({});
      let filteredProducts = [];
      if (tabIndex === 0) {
        filteredProducts = productsResponse.data;
        setShowPagination(true); 
      } else {
        filteredProducts = productsResponse.data.filter((product) =>
          product.categories.some((category) => category.id === tabIndex)
        );
        setShowPagination(false);
      }
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductByCategory(value);
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
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            centered
            sx={{ width: "50%" }}
            TabIndicatorProps={{ style: { backgroundColor: "#7fad39" } }}
          >
            <Tab label="All" sx={{ color: "black !important" }} />
            {categories.map((category) => (
              <Tab
                key={category.id}
                label={category.name}
                value={category.id}
                sx={{ color: "black !important" }}
              />
            ))}
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
      <div className="mt-20 w-full">
        {showPagination && (
          <div className="flex justify-end">
            <PaginationPage
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
