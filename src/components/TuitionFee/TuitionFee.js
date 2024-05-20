import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../general/Title";
import OthersTable from "./OthersTable";
import AccomodationTable from "./AccomodationTable";
import {
  accommodationData,
  agricultureCollegeRows2324,
  agricultureCollegeRows2425,
  businessCollegeRows2324,
  columns,
  columnsAcc,
  engineeringCollegeRows2324,
  engineeringCollegeRows2425,
  feedingData,
  tristateCollegeRows2324,
  tristateCollegeRows2425,
} from "../../utils/feesData";
import { useParams } from "react-router-dom";

const TuitionFee = () => {
  const { year } = useParams();

  const tristateData =
    year == "23-24"
      ? tristateCollegeRows2324
      : year == "24-25"
      ? tristateCollegeRows2425
      : "";
  const agricData =
    year == "23-24"
      ? agricultureCollegeRows2324
      : year == "24-25"
      ? agricultureCollegeRows2425
      : "";
  const businessData =
    year == "23-24"
      ? businessCollegeRows2324
      : year == "24-25"
      ? agricultureCollegeRows2425
      : "";
  const engineeringData =
    year == "23-24"
      ? engineeringCollegeRows2324
      : year == "24-25"
      ? engineeringCollegeRows2425
      : "";

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
            STRUCTURE FOR{" "}
            {year == "23-24" ? "2023/2024" : year == "24-25" ? "2024/2025" : ""}{" "}
            SESSION
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
                    rows={tristateData}
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
                    rows={agricData}
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
                    rows={engineeringData}
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
                    rows={businessData}
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
                <div style={{ width: "100%", overflowX: "scroll" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}>
                    FEEDING (OPTIONAL)
                  </Typography>
                  <DataGrid
                    columns={columnsAcc}
                    rows={feedingData}
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

          {/* <Title title="Tuition" subtitle="International Students" />

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
          </Grid> */}
        </div>
      </Box>
    </Box>
  );
};

export default TuitionFee;
