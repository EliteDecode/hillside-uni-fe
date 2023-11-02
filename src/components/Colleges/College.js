import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Title from "../general/Title";
import { colleges } from "../../utils/data";
import { Link } from "react-router-dom";

const College = () => {
  return (
    <Box
      id="Colleges and Schools"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Colleges" subtitle="Our Colleges" />

        <Box>
          <Grid container spacing={2}>
            {colleges.map((college, index) => (
              <Grid item sm={12} md={4} key={index}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="Faculties"
                    height="140"
                    image={college.imageUrl}
                    style={{ filter: "brightness(0.7) contrast(1.2)" }} // Adjust the values as needed
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      color="text.secondary">
                      College of
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "20px" }}>
                      {college.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/Academics/colleges/${college.college}`}>
                      <Button
                        size="small"
                        variant="contained"
                        disableElevation
                        sx={{
                          bgcolor: "#5e0001",
                          fontSize: "11px",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                          "&:hover": {
                            bgcolor: "#fff",
                            color: "#5e0001",
                            border: "1px solid #5e0001",
                          },
                        }}>
                        Visit College
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default College;
