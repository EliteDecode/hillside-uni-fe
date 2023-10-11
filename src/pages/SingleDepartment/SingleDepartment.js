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
                    title: <Link to="/Academics">Colleges</Link>,
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
                <p className="text-gray-700">
                  Agricultural Sciences play a vital role in addressing global
                  food security and sustainability challenges. With a focus on
                  crop management, soil health, and sustainable agriculture
                  practices, Agricultural Sciences aim to maximize food
                  production while minimizing environmental impact.
                </p>
                <p className="text-gray-700 mt-2">
                  Experts in this field work on developing innovative solutions
                  for efficient farming, optimizing crop yields, and ensuring
                  the welfare of livestock. They also study the effects of
                  climate change and explore ways to adapt agriculture to
                  evolving environmental conditions.
                </p>
                <p className="text-gray-700 mt-2">
                  From agronomy to animal science and agribusiness, Agricultural
                  Sciences encompass a wide range of disciplines that contribute
                  to the global agricultural industry.
                </p>
                <p className="text-gray-700 mt-2">
                  One of the key areas of focus within Agricultural Sciences is
                  sustainable farming practices. Sustainable agriculture
                  promotes practices that are environmentally friendly,
                  economically viable, and socially responsible. This includes
                  organic farming, precision agriculture, and the use of
                  cutting-edge technologies to reduce resource consumption.
                </p>
                <p className="text-gray-700 mt-2">
                  Agricultural Sciences professionals are also at the forefront
                  of research to develop new crop varieties that are more
                  resistant to diseases and pests, resulting in higher yields
                  and reduced reliance on pesticides. They work closely with
                  farmers and agricultural organizations to implement these
                  advancements in the field.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SingleDepartment;
