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

const SingleSchool = () => {
  const { closeSubmenu } = useGlobalContext();
  const { school } = useParams();

  const schoolDetails = collegeSchools.find(
    (col) => col.name.toLowerCase() === school.toLowerCase()
  );
  const departmentDetails = departments.filter(
    (department) => department.School.toLowerCase() === school.toLowerCase()
  );

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

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
            section={schoolDetails.school}
            title={schoolDetails?.name}
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
                      <Link to={`/Academics/colleges/${schoolDetails.college}`}>
                        {schoolDetails.college}
                      </Link>
                    ),
                  },
                  {
                    title: schoolDetails.name,
                  },
                ]}
              />
              <Title
                title={` ${schoolDetails.name}`}
                subtitle="Our Departments Associated with"
              />

              <Grid container spacing={2}>
                {departmentDetails.map((department, index) => {
                  return (
                    <Grid item sx={12} sm={3} key={index} className="w-full">
                      <Box className="w-full">
                        <SchoolDepartmentCard data={department} />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SingleSchool;
