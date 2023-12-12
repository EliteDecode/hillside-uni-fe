import { Box, Button } from "@mui/material";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SchoolDepartmentCard = ({ data, triggeredFrom }) => {
  return (
    <Card
      title={data.school ? "School Of" : "Department Of"}
      className="shadow-lg w-full"
      bordered={false}
      style={{ fontWeight: "bold", fontSize: "18px", width: "100%" }}>
      {data.name}
      <Box className="mt-5">
        <Link
          to={
            triggeredFrom === "school"
              ? `/Academics/colleges/college/schools/${data.name}`
              : ``
          }>
          <Button
            variant="outlined"
            disableElevation
            size="small"
            sx={{
              bgcolor: "#e3caca",
              color: "#5e0001",
              border: "none",
              fontSize: "12px",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#d6babb",
                color: "#5e0001",
                border: "none",
              },
            }}>
            {triggeredFrom === "school" ? "View School" : "View Department"}
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default SchoolDepartmentCard;
