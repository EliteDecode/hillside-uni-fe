import React from "react";
import { Table, Typography } from "antd";
import { Box } from "@mui/material";
import {
  TRISTATE_ANA_COL,
  TRISTATE_ANA_DATA,
  TRISTATE_MED_COL,
  TRISTATE_MED_DATA,
} from "../../utils/feesDataTemplate2";
import scrollGif from "../../assets/scroll2.gif";

const TRISTATE = () => (
  <Box className="bg-white rounded-md border shadow-xl">
    <Typography className="border px-3 py-5 text-center bg-[#91a7d6] uppercase text-white font-bold">
      TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES
    </Typography>
    <Box className="sm:p-5 p-2">
      <Table
        columns={TRISTATE_MED_COL}
        dataSource={TRISTATE_MED_DATA}
        pagination={false}
      />
      <Box className="mt-8 border-t-4 py-8">
        <Table
          columns={TRISTATE_ANA_COL}
          dataSource={TRISTATE_ANA_DATA}
          pagination={false}
        />
      </Box>
    </Box>
    <img src={scrollGif} alt="" width="20%" className="sm:hidden block" />
  </Box>
);

export default TRISTATE;
