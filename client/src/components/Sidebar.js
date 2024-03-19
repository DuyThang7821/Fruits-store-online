import React, { useState, useEffect } from "react";
import { apiGetCategories } from "../apis/app";
import { NavLink } from "react-router-dom";
import { createSlug } from "../ultils/helpers";
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import './Sidebar.css'
const Sidebar = () => {
  const fetchCategies = async () => {
    const response = await apiGetCategories();
    console.log(response);
  };
  useEffect(() => {
    fetchCategies();
  }, []);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#7fad39" }}
        >
          <Typography sx={{ color: "white", fontFamily:"Cairo, sans-serif", fontWeight: 'bold', display: "grid", placeItems: "center" }}>ALL DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fresh Meat
          </Typography>

          <Typography>
            Vegetables
          </Typography>
          
          <Typography>
            Fruits & Nut Gifts
          </Typography>

          <Typography>
            Fresh Berries
          </Typography>

          <Typography>
            Ocean Foods
          </Typography>

          <Typography>
            Butter & Eggs
          </Typography>

          <Typography>
            Fastfood
          </Typography>

          <Typography>
            Fresh Onion
          </Typography>

          <Typography>
            Papayaya & Crisps
          </Typography>

          <Typography>
            Oatmeal
          </Typography>

          <Typography>
            Fresh Bananas
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Sidebar;
