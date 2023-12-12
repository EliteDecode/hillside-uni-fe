import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import Title from "../general/Title";

import { galleryImages } from "../../utils/data";
import { ImageViewer } from "react-image-viewer-dv";
import { useApiGlobalContext } from "../../utils/apiContext";
import { Typography } from "antd";

const Gallery = () => {
  const { gallery, loading } = useApiGlobalContext();

  return (
    <Box
      id="Gallery"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Gallery" subtitle="Our Gallery" />
        <Box>
          <Grid container rowSpacing={4}>
            {loading ? (
              <>
                {galleryImages.map((item) => (
                  <Grid item sm={6} md={4} className="p-2">
                    <ImageViewer>
                      <Skeleton variant="rect" height={300} animation="wave" />

                      <Skeleton variant="text" width={200} animation="wave" />
                    </ImageViewer>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {gallery?.map((item) => (
                  <Grid item sm={6} md={4} className="p-2">
                    <ImageViewer>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/uploads/images/${item.image}`}
                        alt={item.title}
                        className="border rounded-lg shadow-lg"
                      />
                    </ImageViewer>
                    <Typography
                      sx={{
                        textAlign: "center", // Center the text
                        fontSize: "16px", // Adjust the font size
                        fontWeight: "bold", // Set the font weight
                        color: "#333", // Change the text color
                        marginTop: "8px", // Add some top margin
                      }}>
                      {item.title}
                    </Typography>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
