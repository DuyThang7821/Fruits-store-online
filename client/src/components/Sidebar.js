import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import icons from "../ultils/icons";
import { apiGetCategories } from "../apis/app";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState("panel1-header");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiGetCategories();
        setCategories(response.data); // Assuming your API response has a `data` property containing the categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
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
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              style={{ textDecoration: "none" }}
            >
              <Typography className="p-3" style={{ color: "inherit" }}>
                {category.name}
              </Typography>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
