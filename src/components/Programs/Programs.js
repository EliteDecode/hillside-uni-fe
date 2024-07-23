import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import { mastersPrograms, undergraduatePrograms } from "../../utils/data";
import { Avatar } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SchoolIcon from "@mui/icons-material/School";
const Programs = () => {
  return (
    <Box
      id="Academic Programmes"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Academic Degrees Offered" subtitle="Our Degrees" />

        <Grid container className="rounded-xl shadow-md cursor-pointer">
          {/* <Grid
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
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: 3 }}>
                Masters Programmes
              </Typography>
              <List
                sx={{
                  width: "100%",

                  bgcolor: "transparent",
                }}>
                <Grid container>
                  {mastersPrograms.slice(0, 10).map((value, index) => (
                    <Grid
                      className="hover:bg-gray-300 rounded-md"
                      item
                      sm={6}
                      md={6}
                      key={index}
                      sx={{ marginBottom: "2%" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar style={{ bgcolor: "#1d6400" }}>
                            <SchoolIcon sx={{ color: "#1d6400" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            color: "#000",
                          }}
                          secondaryTypographyProps={{
                            color: "#00080",
                            fontSize: "12px",
                          }}
                          primaryTypographyProps={{
                            fontWeight: "bolder",
                            fontSize: "14px",
                          }}
                          primary={value.shortName}
                          secondary={value.name}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Box>
          </Grid> */}
          <Grid
            item
            sm={12}
            md={12}
            style={{ background: "#f7f7f7" }}
            sx={{
              padding: "1% 3%",
              "@media (max-width:567px)": {
                padding: "5% 3%",
              },
            }}>
            <Box sx={{ margin: "2% 0% 0% 0%" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", fontWeight: "bold", marginBottom: 3 }}>
                Undergraduate Degrees
              </Typography>
              <List
                sx={{
                  width: "100%",

                  bgcolor: "transparent",
                }}>
                <Grid container>
                  {undergraduatePrograms.map((value, index) => (
                    <Grid
                      className="hover:bg-gray-300 rounded-md"
                      item
                      sm={6}
                      md={6}
                      key={index}
                      sx={{ marginBottom: "2%" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar style={{ bgcolor: "#1d6400" }}>
                            <SchoolIcon sx={{ color: "#5e0001" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            color: "#000",
                          }}
                          secondaryTypographyProps={{
                            color: "#00080",
                            fontSize: "12px",
                          }}
                          primaryTypographyProps={{
                            fontWeight: "bolder",
                            fontSize: "14px",
                          }}
                          primary={value.shortName}
                          secondary={value.name}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Box>
          </Grid>
          {/* <Box className="sm:p-5 p-0">
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{
                bgcolor: "#5e0001",
                fontSize: "15px",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#5e0001",
                  border: "1px solid #5e0001",
                },
              }}>
              See all Programmes
            </Button>
          </Box> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Programs;
