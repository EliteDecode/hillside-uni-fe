import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../general/Title";
import logo from "../../assets/logo.png";
import { upcomingEvents } from "../../utils/data";
import { Avatar } from "antd";
import EventsLoader from "../Loader/EventsLoader";
const SingleContent = ({ item, category, others, loading }) => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title={item?.title} subtitle={category} />

        <Box>
          <Grid container spacing={6}>
            {/* Left Column: Main News */}
            <Grid item xs={12} md={8}>
              <Paper>
                <img
                  src={`${process.env.REACT_APP_API_URL}/uploads/images/${item?.image}`}
                  alt="News"
                  className="w-full h-auto"
                />

                <div className="p-4">
                  <div
                    className="text-[16px] my-3"
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  />

                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-[13px]">
                      {" "}
                      {new Date(item?.createdAt).toLocaleString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",

                        hour12: true,
                      })}
                    </p>
                    <Avatar
                      alt="Company Logo"
                      src={logo}
                      className="w-14 h-14"
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* Right Column: Other News */}
            <Grid item xs={12} md={4}>
              <Box sx={{ margin: "5% 0% 0% 0%" }}>
                <Typography>Other News</Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "transparent",
                  }}>
                  {loading ? (
                    <>
                      {upcomingEvents.map((event, index) => (
                        <EventsLoader />
                      ))}
                    </>
                  ) : (
                    <>
                      {others?.slice(0, 6).map((event, index) => (
                        <a
                          href={
                            category === "News" ? `${event.id}` : `${event.id}`
                          }
                          key={index}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar src={logo} sx={{ bgcolor: "#1d6400" }} />
                            </ListItemAvatar>
                            <ListItemText
                              sx={{
                                color: "#000",
                              }}
                              secondaryTypographyProps={{
                                color: "#000",
                                fontSize: "11px",
                              }}
                              primaryTypographyProps={{
                                fontSize: "11px",
                                fontWeight: "bold",
                              }}
                              primary={event?.title}
                              secondary={new Date(
                                category === "News"
                                  ? item?.createdAt
                                  : item?.eventsDate
                              ).toLocaleString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",

                                hour12: true,
                              })}
                            />
                          </ListItem>
                        </a>
                      ))}
                    </>
                  )}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleContent;
