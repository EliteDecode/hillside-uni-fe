import { Box, Typography } from "@mui/material";
import React from "react";

const CollegeHeros = ({ section, title }) => {
  return (
    <Box
      className={`${section
        .replace(/[&, ]/g, "")
        .toUpperCase()}-section  subHero py-16 ${
        section.includes("School") ? "SCHOOL-section" : ""
      }`}>
      <Box className="container">
        <Box className="sm:w-[68%] w-[100%]">
          <Box>
            <Typography
              data-aos="fade-down"
              data-aos-duration="1400"
              variant="subtitle2"
              sx={{
                color: "#f7f7f780",
                fontSize: "18px",
                "@media (max-width: 567px)": {
                  fontSize: "14px",
                },
                opacity: "1",
                fontWeight: "bold",
                textTransform: "Uppercase",
              }}>
              HUST{" "}
            </Typography>
            <Typography
              data-aos="fade-down"
              data-aos-duration="1200"
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "45px",
                lineHeight: "3.4rem",
                width: "100%",
                textTransform: "uppercase",

                "@media (max-width: 567px)": {
                  fontSize: "44px",
                  lineHeight: "3.5rem",
                },
              }}>
              {title ? `DEPARTMENT OF ${title} ` : section}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollegeHeros;
