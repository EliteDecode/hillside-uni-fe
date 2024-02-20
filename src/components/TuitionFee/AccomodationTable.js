// AccomodationTable.jsx
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";

const AccomodationTable = () => {
  const columns = [
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
    <div>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        ACCOMODATION FEES
      </Typography>
      <DataGrid
        columns={columns}
        rows={accommodationData}
        autoHeight
        autoWidth={false}
        style={{
          width: "100%",
          overflowX: "auto",
        }}
      />
    </div>
  );
};

export default AccomodationTable;
