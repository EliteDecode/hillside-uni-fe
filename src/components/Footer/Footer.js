import { Box, Grid } from "@mui/material";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

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
    <Box className="relative">
      <a
        href=" https://wa.link/fh0igg"
        style={{ position: "fixed", bottom: "50px", right: "20px" }}
        className="flex items-center space-x-3 px-3 py-2 bg-[#5e0001] rounded-md shadow-lg">
        <span className="text-[12px] font-semibold text-[#f7f7f7]">
          Chat with an Admission Advisor
        </span>
        <img src={require("../../assets/whatsapp.png")} width="25px" />
      </a>
      <Box
        className={` ${isVisible ? "block" : "hidden"}`}
        style={{
          position: "fixed",
          bottom: "50px",
          left: "20px",
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
                      Okemesi-Ekiti
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

                  <Box className="">
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        opacity: "0.6",
                      }}>
                      For Admission Enquiries
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
                      admission@hust.edu.ng
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        marginTop: 2,
                        opacity: "1",
                        "@media (max-width: 567px)": {
                          fontSize: "14px",
                        },
                      }}>
                      Call: +234 911 942 9029
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
                        href="/About/vision&misson"
                        className="font-semibold opacity-70 text-[13px]">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/vision&misson"
                        className="font-semibold opacity-70 text-[13px]">
                        Our Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/corevalues"
                        className="font-semibold opacity-70 text-[13px]">
                        Our Core Values
                      </a>
                    </li>
                    <li>
                      <a
                        href="/About/objectives"
                        className="font-semibold opacity-70 text-[13px]">
                        Our Objectivess
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
                        href="/resources/library"
                        className="font-semibold opacity-70 text-[13px]">
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources/ict"
                        className="font-semibold opacity-70 text-[13px]">
                        ICT
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources/hr"
                        className="font-semibold opacity-70 text-[13px]">
                        Human Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources/studentAffairs"
                        className="font-semibold opacity-70 text-[13px]">
                        Student Affairs
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
                        href="/admissions"
                        className="font-semibold opacity-70 text-[13px]">
                        How to Apply
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admissions"
                        className="font-semibold opacity-70 text-[13px]">
                        Requirements
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admissions"
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
                        href="/student life/residence"
                        className="font-semibold opacity-70 text-[13px]">
                        Residence
                      </a>
                    </li>
                    <li>
                      <a
                        href="/student life/socials"
                        className="font-semibold opacity-70 text-[13px]">
                        Socials
                      </a>
                    </li>
                    <li>
                      <a
                        href="/student life/sports"
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
                        href="/academics/colleges&schools"
                        className="font-semibold opacity-70 text-[13px]">
                        Colleges
                      </a>
                    </li>
                    <li>
                      <a
                        href="/academics/calender"
                        className="font-semibold opacity-70 text-[13px]">
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a
                        href="/academics/programmes"
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
                        href="/home/news"
                        className="font-semibold opacity-70 text-[13px]">
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/events"
                        className="font-semibold opacity-70 text-[13px]">
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/gallery"
                        className="font-semibold opacity-70 text-[13px]">
                        Gallery
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
              href="https://instagram.com/hust_uni?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              className="text-white"
              icon={BsInstagram}
            />

            <Footer.Icon
              href="https://web.facebook.com/profile.php?id=100093139260751&notif_id=1699872689708600&notif_t=profile_plus_admin_invite&ref=notif"
              className="text-white"
              icon={BsFacebook}
            />

            <Footer.Icon
              href="https://twitter.com/Hust_uni"
              className="text-white"
              icon={BsTwitter}
            />

            <Footer.Icon
              href="https://www.linkedin.com/company/hillside-university-of-science-and-technology-okemesi-ekiti"
              className="text-white"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default NavFooter;
