import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Title from "../general/Title";
import { Grid } from "@mui/material";

const AdmissionRemedial = () => {
  const remdialSteps = [
    {
      step: "01",
      title: "Open your browser and log on to hust.edu.ng/remedial",
      desc: "Instructions: Follow the provided URL to access the admission page visit",
    },
    {
      step: "02",
      title: "Download the HUST Remedial Form",
      desc: "Instructions: Download the form from the website.",
    },
    {
      step: "03",
      title: "Fill the Form and Make Payment",
      desc: "Instructions: Complete the form and make the required payment as specified.",
    },
    {
      step: "04",
      title:
        "Send the Completed Form and Receipt of Payment to admission@hust.edu.ng (The Subject of the Mail Should be HUST REMEDIAL APPLICATION)",
      desc: "Instructions: Email the completed form and payment receipt to the specified email address with the subject HUST REMEDIAL APPLICATION",
    },
  ];
  return (
    <Box
      className="py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Remedial Admission Procedures" subtitle="HUST" />
        <Box>
          <Grid container spacing={4}>
            {remdialSteps.map((item, index) => {
              return (
                <Grid item xs={12} sm={12} md={3} key={index}>
                  <Box className="bg-white rounded-md shadow-md p-3">
                    <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                      {item.step}.
                    </Typography>
                    <Box className="mt-3 space-y-2">
                      <Typography sx={{ fontSize: "12px" }}>
                        - {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        - {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Typography variant="h6" mt={3} mb={2}>
            Contact Us
          </Typography>
          <Typography variant="body1">
            For further assistance, please contact us at:
          </Typography>
          <Typography variant="body1">Phone: +234-(0)-911-942-9029</Typography>
          <Typography variant="body1">Email: admission@hust.edu.ng</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdmissionRemedial;
