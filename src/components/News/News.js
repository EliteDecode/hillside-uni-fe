import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import logo from "../../assets/logo.png";
import { newsArray } from "../../utils/data";
import { Avatar, Card } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import NewsLoader from "../Loader/NewsLoader";
import { Link } from "react-router-dom";

const { Meta } = Card;
const News = ({ items, loading, category, route }) => {
  const filtered = route === "home" ? items?.slice(0, 6) : items;
  return (
    <Box
      id="All News"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="News" subtitle="All News" />

        {loading ? (
          <Grid container spacing={4}>
            {newsArray.map((news, index) => {
              return <NewsLoader />;
            })}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {filtered?.map((news, index) => {
              const { image, title, description, createdAt, id, eventsDate } =
                news;

              return (
                <Grid item sm={12} xs={12} md={4} key={index}>
                  <Card
                    style={{
                      width: "100%",
                    }}
                    className="shadow-lg"
                    cover={
                      <img
                        alt="Logo of poster"
                        className="sm:h-[37vh] h-full"
                        src={`${process.env.REACT_APP_API_URL}/uploads/images/${image}`}
                      />
                    }>
                    <Meta title={title} />
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          description.length > 200
                            ? ` ${description.slice(0, 200)}...`
                            : description,
                      }}
                    />
                    <Box className="flex items-center justify-between mt-8">
                      <Box className="flex space-x-2 items-center">
                        <Avatar src={logo} />
                        <Typography variant="subtitle2">
                          {new Date(
                            createdAt ? createdAt : eventsDate
                          ).toLocaleString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",

                            hour12: true,
                          })}
                        </Typography>
                      </Box>
                      <Link
                        to={
                          category === "news" ? `news/${id}` : `events/${id}`
                        }>
                        <ButtonCustome
                          size="small"
                          color="#1d6400"
                          text="Read More"
                          type="transparent"
                        />
                      </Link>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

        <Box style={{ marginTop: 10 }}>
          <Link to="/home/news" className="mt-10">
            <ButtonCustome
              size="medium"
              color="#1d6400"
              text="View More News"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
