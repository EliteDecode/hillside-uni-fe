import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import CollegeHeros from "../../components/Hero/CollegeHeros";
import { Link, useParams } from "react-router-dom";
import { collegeSchools, departments } from "../../utils/data";
import SchoolDepartmentCard from "../../components/Colleges/SchoolDepartmentCard";
import { Box, Grid } from "@mui/material";
import Title from "../../components/general/Title";
import { Breadcrumb } from "antd";

const SingleDepartment = () => {
  const { closeSubmenu } = useGlobalContext();
  const { department } = useParams();

  const departmentDetails = departments.find(
    (depart) => depart.name.toLowerCase() === department.toLowerCase()
  );

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  console.log(departmentDetails);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Box
          id="All News"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine">
          <CollegeHeros
            section={"DEPARTMENT"}
            title={departmentDetails?.name}
          />
          <Box className=" py-10 bg-[#f7f7f7]">
            <Box className="container">
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/Academics">Academics</Link>,
                  },
                  {
                    title: (
                      <Link to="/Academics/colleges&schools">Colleges</Link>
                    ),
                  },
                  {
                    title: (
                      <Link
                        to={`/Academics/colleges/${departmentDetails.College.toUpperCase()}`}>
                        {departmentDetails.College}
                      </Link>
                    ),
                  },
                  {
                    title: (
                      <Link
                        to={`/Academics/colleges/college/schools/${departmentDetails.School}`}>
                        {departmentDetails.School}
                      </Link>
                    ),
                  },
                  {
                    title: departmentDetails.name,
                  },
                ]}
              />
              <Title
                title={` ${departmentDetails.name}`}
                subtitle="About the Department"
              />

              <Box>
                <p className="text-gray-700">{departmentDetails.Content}</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SingleDepartment;
