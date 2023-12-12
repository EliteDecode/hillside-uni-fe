import { Box, Grid } from "@mui/material";
import React from "react";
import Title from "../general/Title";

import { galleryImages } from "../../utils/data";
import { ImageViewer } from "react-image-viewer-dv";

const Gallery = () => {
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
            {galleryImages.map((item) => (
              <Grid item sm={6} md={4} className="p-2">
                <ImageViewer>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="border rounded-lg shadow-lg"
                  />
                </ImageViewer>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
