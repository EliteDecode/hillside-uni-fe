// OthersTable.jsx
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";

const OthersTable = () => {
  const columns = [
    {
      field: "program",
      headerName: "PROGRAM",
      width: 400,
      cellClassName: "wrap-text", // Add a class to the cell to enable text wrapping
    },
    { field: "firstSemester", headerName: "FIRST SEMESTER (D1)", width: 250 },
    { field: "secondSemester", headerName: "SECOND SEMESTER (D2)", width: 250 },
    { field: "total", headerName: "TOTAL FEES (N)", width: 250 },
  ];

  const othersData = [
    {
      id: 2,
      program: "Medicine, Pharmacy and Dentistry",
      firstSemester: 372000,
      secondSemester: 248000,
      total: 620000,
    },
    {
      id: 3,
      program:
        "Nursing, Medical Lab. Science, Optometry and All Engineering Programs",
      firstSemester: 372000,
      secondSemester: 248000,
      total: 620000,
    },
    {
      id: 4,
      program: "Physiology, Audiology and Anatomy",
      firstSemester: 372000,
      secondSemester: 248000,
      total: 620000,
    },
    {
      id: 5,
      program:
        "Computer & AI, Cyber Security, Data Science and Software Engineering",
      firstSemester: 282000,
      secondSemester: 188000,
      total: 470000,
    },
    {
      id: 6,
      program:
        "Petroleum Chemistry, Biochemistry, Forensic Science, Microbiology and Environmental Mgt. & Toxicology",
      firstSemester: 282000,
      secondSemester: 188000,
      total: 470000,
    },
    {
      id: 7,
      program:
        "Accounting, Economics, Mass Communication and Logistics & Supply Chain Management",
      firstSemester: 282000,
      secondSemester: 188000,
      total: 470000,
    },
    {
      id: 8,
      program: "Agribusiness and Agricultural Economics",
      firstSemester: 144000,
      secondSemester: 96000,
      total: 240000,
    },
  ];

  return (
    <div style={{ width: "100%", marginTop: 5, overflowX: "scroll" }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        OTHER FEES
      </Typography>
      <DataGrid
        rows={othersData}
        columns={columns}
        autoHeight
        autoWidth={false}
        style={{
          width: "100%",
          overflowX: "auto",
        }}
        pageSize={5}
      />
      <img
        src={require("../../assets/scroll2.gif")}
        width="20%"
        className="toggle-btn"
      />
    </div>
  );
};

export default OthersTable;
