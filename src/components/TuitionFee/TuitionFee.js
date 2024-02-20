import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../general/Title";
import OthersTable from "./OthersTable";
import AccomodationTable from "./AccomodationTable";

const TuitionFee = () => {
  const columns = [
    { field: "programme", headerName: "PROGRAMME", width: 320 },
    { field: "first", headerName: "FIRST SEMESTER (A1)", width: 250 },
    { field: "second", headerName: "SECOND SEMESTER (A2)", width: 250 },
    { field: "total", headerName: "TOTAL FEE (N)", width: 250 },
  ];

  const tristateCollegeRows = [
    {
      id: 1,
      programme: "Medicine",
      first: (2100000).toLocaleString(),
      second: (1400000).toLocaleString(),
      total: (3500000).toLocaleString(),
    },
    {
      id: 2,
      programme: "Dentistry",
      first: (2100000).toLocaleString(),
      second: (1400000).toLocaleString(),
      total: (3500000).toLocaleString(),
    },
    {
      id: 3,
      programme: "Pharmacy",
      first: (2100000).toLocaleString(),
      second: (1400000).toLocaleString(),
      total: (3500000).toLocaleString(),
    },
    {
      id: 4,
      programme: "Nursing",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 5,
      programme: "Medical Laboratory Science",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Optometry",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Physiology",
      first: (600000).toLocaleString(),
      second: (400000).toLocaleString(),
      total: (1000000).toLocaleString(),
    },
    {
      id: 8,
      programme: "Anatomy",
      first: (600000).toLocaleString(),
      second: (400000).toLocaleString(),
      total: (1000000).toLocaleString(),
    },
    {
      id: 9,
      programme: "Audiology",
      first: (600000).toLocaleString(),
      second: (400000).toLocaleString(),
      total: (1000000).toLocaleString(),
    },
  ];

  const agricultureCollegeRows = [
    {
      id: 1,
      programme: "Agribusiness",
      first: (120000).toLocaleString(),
      second: (80000).toLocaleString(),
      total: (200000).toLocaleString(),
    },
    {
      id: 2,
      programme: "Agricultural Economics",
      first: (120000).toLocaleString(),
      second: (80000).toLocaleString(),
      total: (200000).toLocaleString(),
    },
    {
      id: 3,
      programme: "Petroleum Chemistry",
      first: (270000).toLocaleString(),
      second: (180000).toLocaleString(),
      total: (450000).toLocaleString(),
    },
    {
      id: 4,
      programme: "Biochemistry",
      first: (270000).toLocaleString(),
      second: (180000).toLocaleString(),
      total: (450000).toLocaleString(),
    },
    {
      id: 5,
      programme: "Forensic Science",
      first: (270000).toLocaleString(),
      second: (180000).toLocaleString(),
      total: (450000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Microbiology",
      first: (270000).toLocaleString(),
      second: (180000).toLocaleString(),
      total: (450000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Environmental Management and Toxicology",
      first: (270000).toLocaleString(),
      second: (180000).toLocaleString(),
      total: (450000).toLocaleString(),
    },
  ];

  const businessCollegeRows = [
    {
      id: 1,
      programme: "Accounting",
      first: (390000).toLocaleString(),
      second: (260000).toLocaleString(),
      total: (650000).toLocaleString(),
    },
    {
      id: 2,
      programme: "Economics",
      first: (390000).toLocaleString(),
      second: (260000).toLocaleString(),
      total: (650000).toLocaleString(),
    },
    {
      id: 3,
      programme: "Logistics & Supply Chain Management",
      first: (390000).toLocaleString(),
      second: (260000).toLocaleString(),
      total: (650000).toLocaleString(),
    },
    {
      id: 4,
      programme: "Mass Communication",
      first: (390000).toLocaleString(),
      second: (260000).toLocaleString(),
      total: (650000).toLocaleString(),
    },
  ];

  const engineeringCollegeRows = [
    {
      id: 1,
      programme: "Computer & Artificial Intelligence",
      first: (480000).toLocaleString(),
      second: (320000).toLocaleString(),
      total: (800000).toLocaleString(),
    },
    {
      id: 2,
      programme: "Cyber Security",
      first: (480000).toLocaleString(),
      second: (320000).toLocaleString(),
      total: (800000).toLocaleString(),
    },
    {
      id: 3,
      programme: "Data Science",
      first: (480000).toLocaleString(),
      second: (320000).toLocaleString(),
      total: (800000).toLocaleString(),
    },
    {
      id: 4,
      programme: "Software Engineering",
      first: (480000).toLocaleString(),
      second: (320000).toLocaleString(),
      total: (800000).toLocaleString(),
    },
    {
      id: 5,
      programme: "Civil & Construction Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Mechanical Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Mechatronic Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 8,
      programme: "Industrial & Production Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 9,
      programme: "Chemical Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 10,
      programme: "Electrical Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 11,
      programme: "Aerospace Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
    {
      id: 12,
      programme: "Systems Engineering",
      first: (900000).toLocaleString(),
      second: (600000).toLocaleString(),
      total: (1500000).toLocaleString(),
    },
  ];

  const columnsInt = [
    { field: "programme", headerName: "PROGRAMME", width: 320 },
    { field: "fee", headerName: "FEE ($)", width: 250 },
  ];

  const tristateCollegeRowsInt = [
    { id: 1, programme: "Medicine", fee: (15000).toLocaleString() },
    { id: 2, programme: "Dentistry", fee: (15000).toLocaleString() },
    { id: 3, programme: "Pharmacy", fee: (15000).toLocaleString() },
    { id: 4, programme: "Nursing", fee: (10000).toLocaleString() },
    {
      id: 5,
      programme: "Medical Laboratory Science",
      fee: (10000).toLocaleString(),
    },
    { id: 6, programme: "Optometry", fee: (10000).toLocaleString() },
    { id: 7, programme: "Physiology", fee: (5000).toLocaleString() },
    { id: 8, programme: "Anatomy", fee: (5000).toLocaleString() },
    { id: 9, programme: "Audiology", fee: (5000).toLocaleString() },
  ];

  const agricultureCollegeRowsInt = [
    { id: 1, programme: "Agribusiness", fee: (5000).toLocaleString() },
    {
      id: 2,
      programme: "Agricultural Economics",
      fee: (5000).toLocaleString(),
    },
    {
      id: 3,
      programme: "Petroleum Chemistry",
      fee: (5000).toLocaleString(),
    },
    {
      id: 4,
      programme: "Biochemistry",
      fee: (5000).toLocaleString(),
    },
    {
      id: 5,
      programme: "Forensic Science",
      fee: (5000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Microbiology",
      fee: (5000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Environmental Management and Toxicology",
      fee: (5000).toLocaleString(),
    },
  ];

  const engineeringCollegeRowsInt = [
    {
      id: 1,
      programme: "Computer & Artificial Intelligence",
      fee: (7500).toLocaleString(),
    },
    { id: 2, programme: "Cyber Security", fee: (7500).toLocaleString() },
    { id: 3, programme: "Data Science", fee: (7500).toLocaleString() },
    {
      id: 4,
      programme: "Software Engineering",
      fee: (7500).toLocaleString(),
    },
    {
      id: 5,
      programme: "Civil & Construction Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 6,
      programme: "Mechanical Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 7,
      programme: "Mechatronic Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 8,
      programme: "Industrial & Production Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 9,
      programme: "Chemical Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 10,
      programme: "Electrical Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 11,
      programme: "Aerospace Engineering",
      fee: (10000).toLocaleString(),
    },
    {
      id: 12,
      programme: "Systems Engineering",
      fee: (10000).toLocaleString(),
    },
  ];

  const businessCollegeRowsInt = [
    { id: 1, programme: "Accounting", fee: (5000).toLocaleString() },
    { id: 2, programme: "Economics", fee: (5000).toLocaleString() },
    {
      id: 3,
      programme: "Logistics & Supply Chain Management",
      fee: (5000).toLocaleString(),
    },
    { id: 4, programme: "Mass Communication", fee: (5000).toLocaleString() },
  ];

  const columnsAcc = [
    {
      field: "program",
      headerName: "PROGRAM",
      width: 320,
    },
    { field: "firstSemester", headerName: "FIRST SEMESTER (B1)", width: 250 },
    { field: "secondSemester", headerName: "SECOND SEMESTER (B2)", width: 250 },
    { field: "total", headerName: "TOTAL", width: 250 },
  ];

  const accommodationData = [
    {
      id: 1,
      program: "All Programs",
      firstSemester: 390000,
      secondSemester: 260000,
      total: 650000,
    },
  ];

  return (
    <Box
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
      style={{ overflowX: "scroll" }}>
      <Box className="container">
        <Title title="Tuition" subtitle="HUST" />
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
            educational pursuit. <br />
            <br /> At HUST, our commitment is to ensure that Quality education
            is Available and affordable for all. That’s why we keep evolving
            payment options like the Approved Fee Cut, and Installmental Payment
            We also have various Scholarship/Funding options for exceptional
            candidates, and we encourage everyone to apply.
            <br /> <br />
            Selection is based on the criteria(s) determined by the university.
          </p>

          <h2 className="text-xl font-bold my-4">
            Breakdown of Fees for Various Programmes:
          </h2>

          <>
            <Title title="Tuition" subtitle="National Students" />

            <Grid container spacing={4}>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <h3 className="text-lg font-bold my-2">
                    TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCE
                  </h3>
                  <DataGrid
                    columns={columns}
                    rows={tristateCollegeRows}
                    autoHeight
                    autoWidth={false}
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                    pageSize={5}
                  />
                  <img
                    src={require("../../assets/scroll2.gif")}
                    className="toggle-btn"
                    width="20%"
                  />
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <h3 className="text-lg font-bold my-2">
                    COLLEGE OF AGRICULTURE, LIFE AND ENVIRONMENTAL SCIENCE
                  </h3>
                  <DataGrid
                    columns={columns}
                    rows={agricultureCollegeRows}
                    autoHeight
                    autoWidth={false}
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                    pageSize={5}
                  />
                  <img
                    src={require("../../assets/scroll2.gif")}
                    className="toggle-btn"
                    width="20%"
                  />
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <h3 className="text-lg font-bold my-2">
                    COLLEGE OF ENGINEERING AND COMPUTING SCIENCE
                  </h3>
                  <DataGrid
                    columns={columns}
                    rows={engineeringCollegeRows}
                    autoHeight
                    autoWidth={false}
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                    pageSize={5}
                  />
                  <img
                    src={require("../../assets/scroll2.gif")}
                    className="toggle-btn"
                    width="20%"
                  />
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <h3 className="text-lg font-bold my-2">
                    COLLEGE OF BUSINESS, LAW AND EDUCATIONAL SCIENCES
                  </h3>
                  <DataGrid
                    columns={columns}
                    rows={businessCollegeRows}
                    autoHeight
                    autoWidth={false}
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                    pageSize={5}
                  />
                  <img
                    src={require("../../assets/scroll2.gif")}
                    className="toggle-btn"
                    width="20%"
                  />
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}>
                    ACCOMODATION
                  </Typography>
                  <DataGrid
                    columns={columnsAcc}
                    rows={accommodationData}
                    autoHeight
                    autoWidth={false}
                    sx={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                    pageSize={5}
                  />
                  <img
                    src={require("../../assets/scroll2.gif")}
                    className="toggle-btn"
                    width="20%"
                  />
                </div>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <OthersTable />
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                style={{ width: "100%", overflowX: "scroll" }}>
                <div class="  bg-gray-100">
                  <div class="border border-gray-300 p-4 rounded-md">
                    <h2 class="text-lg font-bold mb-4">Fee Structure</h2>

                    <p class="mb-4">
                      <strong>NOTE:</strong>
                    </p>
                    <ol class="list-decimal pl-6">
                      <li style={{ listStyle: "none" }}>
                        <strong>i.</strong> The fee structure above is for
                        installment payment. However, students can make a
                        one-off payment of the total fees.
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>ii.</strong> The columns represent the fees
                        payable per semester for various programs.
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>iii.</strong> To calculate your total cost
                        payable for the first semester, check for the column
                        that states your program, and add up the amount for
                        accommodation and the amount for OTHERS as specified for
                        your program. For example, to calculate the total cost
                        payable for the first semester for Medicine Program; add
                        up the Tuition Cost (2,100,000) + Accommodation
                        (390,000) + Others (372,000) = First Semester Fee
                        (N2,862,000) or A1 + B1 + C1 = First Semester
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>iv.</strong> To calculate the total cost payable
                        for the second semester, follow through as indicated in
                        (ii) above, with the details on the Second semester
                        column (That is; A2 + B2 + C2 = Second Semester)
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <strong>v.</strong> What constitute OTHERS include; IT
                        Competence and Technology, Sports, Student Activities,
                        Health Insurance and Medicals, Lab Fees (for
                        Engineering, medical science students and other
                        science-related discipline), and E-Book.
                      </li>
                    </ol>
                  </div>
                </div>
              </Grid>
            </Grid>
          </>

          <Title title="Tuition" subtitle="International Students" />

          <Grid container spacing={4}>
            <Grid
              item
              sm={12}
              md={6}
              style={{ width: "100%", overflowX: "scroll" }}>
              <div style={{ width: "100%", overflowX: "scroll" }}>
                <h3 className="text-lg font-bold my-2">
                  TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCE
                </h3>
                <DataGrid
                  columns={columnsInt}
                  rows={tristateCollegeRowsInt}
                  autoHeight
                  autoWidth={false}
                  style={{ width: "100%", overflowX: "auto" }}
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              style={{ width: "100%", overflowX: "scroll" }}>
              <div style={{ width: "100%", overflowX: "scroll" }}>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF AGRICULTURE, LIFE AND ENVIRONMENTAL SCIENCE
                </h3>
                <DataGrid
                  columns={columnsInt}
                  rows={agricultureCollegeRowsInt}
                  autoHeight
                  autoWidth={false}
                  style={{ width: "100%", overflowX: "auto" }}
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              style={{ width: "100%", overflowX: "scroll" }}>
              <div style={{ width: "100%", overflowX: "scroll" }}>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF ENGINEERING AND COMPUTING SCIENCE
                </h3>
                <DataGrid
                  columns={columnsInt}
                  rows={engineeringCollegeRowsInt}
                  autoHeight
                  autoWidth={false}
                  style={{ width: "100%", overflowX: "auto" }}
                  pageSize={5}
                />
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              style={{ width: "100%", overflowX: "scroll" }}>
              <div style={{ width: "100%", overflowX: "scroll" }}>
                <h3 className="text-lg font-bold my-2">
                  COLLEGE OF BUSINESS, LAW AND EDUCATIONAL SCIENCES
                </h3>
                <DataGrid
                  columns={columnsInt}
                  rows={businessCollegeRowsInt}
                  autoHeight
                  autoWidth={false}
                  style={{ width: "100%", overflowX: "auto" }}
                  pageSize={5}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default TuitionFee;
