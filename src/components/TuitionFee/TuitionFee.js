import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";
import Title from "../general/Title";

const TuitionFee = () => {
  const columns = [
    { field: "programme", headerName: "PROGRAMME", flex: 1 },
    { field: "fee", headerName: "FEE (N)", flex: 1 },
  ];

  const tristateCollegeRows = [
    { id: 1, programme: "Medicine", fee: (15000000).toLocaleString() },
    { id: 2, programme: "Dentistry", fee: (15000000).toLocaleString() },
    { id: 3, programme: "Pharmacy", fee: (15000000).toLocaleString() },
    { id: 4, programme: "Nursing", fee: (10000000).toLocaleString() },
    {
      id: 5,
      programme: "Medical Laboratory Science",
      fee: (10000000).toLocaleString(),
    },
    { id: 6, programme: "Optometry", fee: (10000000).toLocaleString() },
    { id: 7, programme: "Physiology", fee: (5000000).toLocaleString() },
    { id: 8, programme: "Anatomy", fee: (5000000).toLocaleString() },
    { id: 9, programme: "Audiology", fee: (5000000).toLocaleString() },
  ];

  const agricultureCollegeRows = [
    { id: 1, programme: "Agribusiness", fee: (5000000).toLocaleString() },
    {
      id: 2,
      programme: "Agricultural Economics",
      fee: (5000000).toLocaleString(),
    },
  ];

  const engineeringCollegeRows = [
    {
      id: 1,
      programme: "Computer & Artificial Intelligence",
      fee: (7500000).toLocaleString(),
    },
    { id: 2, programme: "Cyber Security", fee: (7500000).toLocaleString() },
    { id: 3, programme: "Data Science", fee: (7500000).toLocaleString() },
    {
      id: 4,
      programme: "Software Engineering",
      fee: (7500000).toLocaleString(),
    },
    {
      id: 5,
      programme: "Civil & Construction Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Mechanical Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Mechatronic Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 8,
      programme: "Industrial & Production Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 9,
      programme: "Chemical Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 10,
      programme: "Electrical Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 11,
      programme: "Aerospace Engineering",
      fee: (10000000).toLocaleString(),
    },
    {
      id: 12,
      programme: "Systems Engineering",
      fee: (10000000).toLocaleString(),
    },
  ];

  const businessCollegeRows = [
    { id: 1, programme: "Accounting", fee: (5000000).toLocaleString() },
    { id: 2, programme: "Economics", fee: (5000000).toLocaleString() },
    {
      id: 3,
      programme: "Logistics & Supply Chain Management",
      fee: (5000000).toLocaleString(),
    },
    { id: 4, programme: "Mass Communication", fee: (5000000).toLocaleString() },
  ];

  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Tuition Fees" subtitle="HUST" />
        <div className=" mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">
            HILLSIDE UNIVERSITY OF SCIENCE AND TECHNOLOGY (HUST) SCHOOL FEE
            STRUCTURE FOR 2023/2024 SESSION
          </h1>

          <p>
            Education no doubt is an invaluable investment in anyone’s future,
            encompassing different aspects that contribute to comprehensive
            learning. To embark on an academic journey, one must consider
            multiple expenses that constitute the foundation for a fulfilling
            educational pursuit. The fees for HUST will cover:
          </p>

          <ul className="list-disc pl-8 my-4">
            <li>Tuition Fees</li>
            <li>Accommodation (1)</li>
            <li>Feeding (2)</li>
            <li>Instructional Manual</li>
            <li>Learning Device (3)</li>
            <li>Online Classes</li>
            <li>Other Miscellaneous</li>
          </ul>

          <p>
            There will be various scholarships opportunities for exceptional
            candidates that will be selected based on the criteria that will be
            determined by the university.
          </p>

          <h2 className="text-xl font-bold my-4">
            Breakdown of Fees for Various Programmes
          </h2>

          <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
              <div>
                <h3 className="text-lg font-bold my-2">
                  TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCE
                </h3>
                <DataGrid
                  columns={columns}
                  rows={tristateCollegeRows}
                  autoHeight
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF AGRICULTURE, LIFE AND ENVIRONMENTAL SCIENCE
                </h3>
                <DataGrid
                  columns={columns}
                  rows={agricultureCollegeRows}
                  autoHeight
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF ENGINEERING AND COMPUTING SCIENCE
                </h3>
                <DataGrid
                  columns={columns}
                  rows={engineeringCollegeRows}
                  autoHeight
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF BUSINESS, LAW AND EDUCATIONAL SCIENCES
                </h3>
                <DataGrid
                  columns={columns}
                  rows={businessCollegeRows}
                  autoHeight
                  pageSize={5}
                />
              </div>
            </Grid>
          </Grid>

          <p className="mt-4">
            NOTE:
            <br />1 – Accommodation: HUST students will be fully resident on
            campus. This will help instill our core values of Diversity,
            Respect, and Community among our students.
          </p>
          <br />
          <p>
            2 – Feeding: The health and safety of our students are our top
            priority, and to ensure they get the best of what they consume
            daily, HUST will be catering for their feeding. We have well-trained
            nutritionists that will handle the type of food that will be
            available for our students and also ensure proper quality control.
          </p>
          <br />
          <p>
            3 – Learning Device: At HUST, we value the importance technology
            plays in academics. In today’s digital age, students require access
            to technological devices like laptops and tablets for easy access to
            online material that will aid in their studies, assignments, or
            research. Therefore, HUST will be providing high specification
            devices loaded with e-resources for our students upon resumption.
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default TuitionFee;
