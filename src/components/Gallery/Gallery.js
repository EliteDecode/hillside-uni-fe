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
                        src={item.img}
                        alt={item.title}
                        className="border rounded-lg shadow-lg"
                      />
                    </ImageViewer>
                    <Typography>{item.title}</Typography>
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
