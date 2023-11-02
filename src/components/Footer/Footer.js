import { Box, Grid } from "@mui/material";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import React from "react";
import logo from "../../assets/logo.png";
import { Typography } from "@mui/material";
import { Footer } from "flowbite-react";
import scrollUp from "../../assets/arrow.png";
import { useEffect } from "react";
import { useState } from "react";

const NavFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Box
        className={` ${isVisible ? "block" : "hidden"}`}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          cursor: "pointer",
        }}>
        <img
          alt="scroll up"
          src={scrollUp}
          onClick={scrollToTop}
          width="40px"
        />
      </Box>
      <Box className="" sx={{ padding: "5% 0px" }}>
        <Box className="container">
          <Box>
            <Grid container spacing={4}>
              <Grid item sm={12} md={3} className="">
                <Box className="flex justify-between items-center sm:w-[85%] w-[20%] ">
                  <img src={logo} className="nav-logo" alt="hust logo" />
                </Box>
                <Box className="mt-5 space-y-6">
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        opacity: "0.8",
                        "@media (max-width: 567px)": {
                          fontSize: "15px",
                        },
                      }}>
                      Okemisi-Ekiti
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        opacity: "0.6",
                        "@media (max-width: 567px)": {
                          fontSize: "11px",
                        },
                      }}>
                      Ekiti, Nigeria
                    </Typography>
                  </Box>

                  <Box className="my-3">
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        opacity: "1",
                        "@media (max-width: 567px)": {
                          fontSize: "14px",
                        },
                      }}>
                      +234-805-797-5157
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        opacity: "1",
                        "@media (max-width: 567px)": {
                          fontSize: "14px",
                        },
                      }}>
                      enquiries@hust.edu.ng.ng
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      opacity: "0.6",
                    }}>
                    For Admission Enquiries
                  </Typography>

                  <Box className="my-3">
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        opacity: "1",
                        "@media (max-width: 567px)": {
                          fontSize: "14px",
                        },
                      }}>
                      +234-805-797-5157
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        opacity: "1",
                        "@media (max-width: 567px)": {
                          fontSize: "14px",
                        },
                      }}>
                      enquiries@hust.edu.ng.ng
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={12}
                md={3}
                sx={{
                  marginTop: "3%",
                }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    About Us
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Our Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Our Core Values
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Our Strategic Positions
                      </a>
                    </li>
                  </ul>
                </Box>
                <Box className="" sx={{ marginTop: "10%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    Our Resources
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Registry
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Consultancy
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Training Manual
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item sm={12} md={3} sx={{ marginTop: "3%" }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    Admissions
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        How to Apply
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Requirements
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Tuition Fees
                      </a>
                    </li>
                  </ul>
                </Box>
                <Box className="" sx={{ marginTop: "10%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    Student Life
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Residence
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Socials
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Sports
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item sm={12} md={3} sx={{ marginTop: "3%" }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    Academics
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Colleges
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Academic Programmes
                      </a>
                    </li>
                  </ul>
                </Box>
                <Box className="" sx={{ marginTop: "10%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                    className="footer-headers">
                    Updates
                  </Typography>
                  <ul className="sm:space-y-1 space-y-1 footer-list">
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-semibold opacity-70 text-[13px]">
                        Articles
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Purplebee tech"
            href="#"
            year={2023}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="google.com"
              className="text-white"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="google.com"
              className="text-white"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="google.com"
              className="text-white"
              icon={BsTwitter}
            />

            <Footer.Icon
              href="google.com"
              className="text-white"
              icon={BsDribbble}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default NavFooter;
