import React from "react";
import { Table, Typography } from "antd";
import { Box } from "@mui/material";
import { CBLES_COMP_DATA_COL, CBLES_DATA } from "../../utils/feesDataTemplate2";
import scrollGif from "../../assets/scroll2.gif";

const CBLES = () => (
  <Box className="bg-white rounded-md border shadow-xl">
    <Typography className="border px-3 py-5 text-center bg-[#4172b4] uppercase text-white font-bold">
      College of Business Law and Educational Sciences
    </Typography>
    <Box className="sm:p-5 p-2">
      <Table
        columns={CBLES_COMP_DATA_COL}
        dataSource={CBLES_DATA}
        pagination={false}
      />
    </Box>
    <img src={scrollGif} alt="" width="20%" className="sm:hidden block" />
  </Box>
);

export default CBLES;
