import { Box, Grid } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import objImg from "../../assets/obj.jpg";
import { Avatar, List } from "antd";
import { objectives } from "../../utils/data";

const Objectives = () => {
  return (
    <Box
      id="University Objectives"
      className="bg-[#f7f7f7] mt-0"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="University Objectives" subtitle="Our Objectives" />
        <Box>
          <Grid container className="mt-2">
            <Grid item sm={12} md={6}>
              <img
                src={objImg}
                alt="application"
                width="100%"
                className="rounded-l-lg"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="border">
              <Box className="rounded-r-lg w-full">
                <Box className="rounded-md p-3 shadow-md w-full ">
                  <List
                    size="large"
                    itemLayout="horizontal"
                    dataSource={objectives}
                    renderItem={(item, index) => (
                      <List.Item key={index}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.icon} />}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Objectives;
