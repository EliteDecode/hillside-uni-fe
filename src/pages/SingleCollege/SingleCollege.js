import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import College from "../../components/Colleges/College";
import CollegeHeros from "../../components/Hero/CollegeHeros";
import { Link, useParams } from "react-router-dom";
import { colleges, collegeSchools } from "../../utils/data";
import SchoolDepartmentCard from "../../components/Colleges/SchoolDepartmentCard";
import { Box, Grid } from "@mui/material";
import Title from "../../components/general/Title";
import { Breadcrumb } from "antd";

const SingleCollege = () => {
  const { closeSubmenu } = useGlobalContext();
  const { college } = useParams();

  const collegeDetails = colleges.find((col) => col.college === college);
  const schools = collegeSchools.filter((school) => school.college === college);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  console.log(schools);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Box
          id="All News"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine">
          <CollegeHeros section={college} />
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
                    title: collegeDetails.name,
                  },
                ]}
              />

              <Title
                title={` ${collegeDetails.name}`}
                subtitle="Our Schools Associated with"
              />
              <Grid container spacing={2}>
                {schools.map((school, index) => {
                  return (
                    <Grid item sx={12} sm={3} key={index} className="w-full">
                      <Box>
                        <SchoolDepartmentCard
                          data={school}
                          triggeredFrom="school"
                        />
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

export default SingleCollege;
