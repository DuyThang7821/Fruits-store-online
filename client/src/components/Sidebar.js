import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import icons from "../ultils/icons";
import "./Sidebar.css";
import { apiGetCategories } from "../apis/app";
import { NavLink } from "react-router-dom";
import { createSlug } from '../ultils/helpers'
const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await apiGetCategories();
    if (response.success && response.data) {
      setCategories(response.data);
    } else {
      console.log('api error');
      console.log(response); // Log response để debug
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  console.log(categories); // Log categories sau khi cập nhật
  
 
  const [expanded, setExpanded] = useState("panel1-header"); // State lưu trữ trạng thái mở rộng

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : ""); // Cập nhật state khi bấm mũi tên
  };
  const { IoMdMenu } = icons;
  return (
    <div>
      <Accordion
        className="w-[300px] rounded-md "
        defaultExpanded={true}
        onChange={handleChange("panel1-header")}
        sx={{ height: "100%", transition: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#7fad39", height: "64px" }}
          className="p-3"
        >
          <IoMdMenu size={24} color="white" />
          <Typography
            sx={{
              color: "white",
              fontFamily: "Cairo, sans-serif",
              fontWeight: "bold",
              display: "grid",
              placeItems: "center",
            }}
            className="flex flex-auto"
          >
            ALL DEPARTMENT
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="p-3">Fresh Meat</Typography>

          <Typography className="p-3">Vegetables</Typography>

          <Typography className="p-3">Fruits & Nut Gifts</Typography>

          <Typography className="p-3">Fresh Berries</Typography>

          <Typography className="p-3">Ocean Foods</Typography>

          <Typography className="p-3">Butter & Eggs</Typography>

          <Typography className="p-3">Fastfood</Typography>

          <Typography className="p-3">Fresh Onion</Typography>

          <Typography className="p-3">Papayaya & Crisps</Typography>

          <Typography className="p-3">Oatmeal</Typography>

          <Typography className="p-3">Fresh Bananas</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
