import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Title from "../general/Title";

const AdmissionProcedures = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Admission Procedures" subtitle="HUST" />
        <Box>
          <List>
            <ListItem>
              <ListItemText
                primary="1. Open your browser and log on to hust.edu.ng/admissions"
                secondary="Instructions: Follow the provided URL to access the admission page, or click the apply now button below"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="2. Create your account with your email and password"
                secondary="Instructions: Use your email and create a secure password for your account."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="3. Email Verification"
                secondary="Check the email address you supplied and click on the verification URL sent to you, to activate your account. If you did not see the mail in your inbox; kindly check your spam mail. (Please keep your username and password secured)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="4. Log into the HUST admission application portal"
                secondary="Instructions: Use your registered email and password to log in."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="5. Purchase the admission form online"
                secondary="After which a registration Number will be generated and sent to your registered email on successful payment."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="6. Complete the application form"
                secondary="The HUST online application form is user-friendly and you can complete the form in any order. You can even save the form and come back to complete it later."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="7. Make Corrections to Your Data"
                secondary="The online application form is designed to ensure that if you omitted any required field in the process of completing the form, the list of fields omitted are displayed before you are allowed to submit."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="8. Submit Application Form"
                secondary="Check your form carefully for errors. When you are satisfied with it and are ready to submit, click on the preview button to double-check, then click on the Submit button."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="After the form has been submitted, you can print a copy of your form."
                secondary="You can always log in to the application portal to view APPLICATION STATUS and APPLICATION INFO."
              />
            </ListItem>
          </List>

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

export default AdmissionProcedures;
