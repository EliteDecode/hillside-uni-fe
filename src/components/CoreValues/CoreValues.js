import { Box, Grid } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import { coreValues, reasonsToChooseUs } from "../../utils/data";
import { Avatar, Collapse } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const CoreValues = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Core Values" subtitle="Our Core Values" />

        <Grid container className="rounded-xl shadow-md cursor-pointer">
          <Grid
            item
            sm={12}
            md={6}
            style={{ background: "#f7f7f7" }}
            sx={{
              padding: "1% 3%",
              "@media (max-width:567px)": {
                padding: "5% 3%",
              },
            }}>
            <Box sx={{ margin: "2% 0% 0% 0%" }}>
              <List
                sx={{
                  width: "100%",

                  bgcolor: "transparent",
                }}>
                <Grid container>
                  {coreValues.map((value, index) => (
                    <Grid
                      item
                      sm={6}
                      md={6}
                      key={index}
                      sx={{ marginBottom: "5%" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar style={{ bgcolor: "#1d6400" }}>
                            {value.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            color: "#000",
                          }}
                          secondaryTypographyProps={{ color: "#00080" }}
                          primary={value.value}
                          secondary={value.subtitle}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} className="w-full">
            <Box className="w-full ">
              <Collapse
                items={reasonsToChooseUs}
                defaultActiveKey={["1"]}
                size="large"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreValues;
