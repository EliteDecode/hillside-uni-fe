import React from "react";
import { Table, Typography } from "antd";
import { Box } from "@mui/material";
import {
  CECS_COMP_DATA,
  CECS_COMP_DATA_COL,
  CECS_ENG_DATA,
  CECS_ENG_DATA_COL,
} from "../../utils/feesDataTemplate2";
import scrollGif from "../../assets/scroll2.gif";

const CECS = () => (
  <Box className="bg-white rounded-md border shadow-xl">
    <Typography className="border px-3 py-5 text-center bg-[#b75927] uppercase text-white font-bold">
      College of Engineering and Computing Sciences
    </Typography>
    <Box className="sm:p-5 p-2">
      <Table
        columns={CECS_ENG_DATA_COL}
        dataSource={CECS_ENG_DATA}
        pagination={false}
      />
      <Box className="mt-8 border-t-4 py-8">
        <Table
          columns={CECS_COMP_DATA_COL}
          dataSource={CECS_COMP_DATA}
          pagination={false}
        />
      </Box>
    </Box>
    <img src={scrollGif} alt="" width="20%" className="sm:hidden block" />
  </Box>
);

export default CECS;
