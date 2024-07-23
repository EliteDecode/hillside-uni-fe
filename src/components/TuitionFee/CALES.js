import React from "react";
import { Table, Typography } from "antd";
import { Box } from "@mui/material";
import { CALES_DATA, CALES_DATA_COL } from "../../utils/feesDataTemplate2";
import scrollGif from "../../assets/scroll2.gif";

const CALES = () => (
  <Box className="bg-white rounded-md border shadow-xl">
    <Typography className="border px-3 py-5 text-center bg-[#577e39] uppercase text-white font-bold">
      COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES
    </Typography>
    <Box className="sm:p-5 p-2">
      <Table
        columns={CALES_DATA_COL}
        dataSource={CALES_DATA}
        pagination={false}
      />
    </Box>
    <img src={scrollGif} alt="" width="20%" className="sm:hidden block" />
  </Box>
);

export default CALES;
