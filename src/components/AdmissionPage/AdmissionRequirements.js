import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Title from "../general/Title";

const AdmissionRequirements = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Admission Requirements" subtitle="HUST" />
        <Box textAlign="left">
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#5e0001" }}>
            HILLSIDE UNIVERSITY of SCIENCE & TECHNOLOGY
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "bold" }}>
            OKEMESI, EKITI STATE
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            UNDERGRADUATE ADMISSIONS
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: "bold" }}>
            2023/2024 ACADEMIC SESSION
          </Typography>

          <Typography variant="body1" paragraph>
            Hillside University of Science and Technology, Okemesi, Ekiti State,
            a Best-in-Class University of Health Sciences & Technology, is
            currently accepting applications for admissions into its various
            disruptive innovation programmes for the 2023/2024 academic session.{" "}
            <br /> Interested applicants are to fill out an application form
            click “apply now” and follow directions until submission of
            application. All Hillside programmes are approved by the National
            Universities Commission (NUC) and other regulatory agencies of
            jurisdiction.
          </Typography>

          <ul>
            <li>
              • 5 credits at the GCE/SSCE/NECO Examinations or equivalent (at
              not more than 2 sittings);
            </li>
            <li>
              • 5 credits at GCE/SSCE/NECO Examinations or equivalent (at one
              sitting only) for Medicine/Dentistry
            </li>
            <li>
              • Candidates below 15 years of age are kindly advised not to apply
            </li>
          </ul>
          <Box className="mt-5">
            <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
              Note
            </Typography>
            <Typography variant="body1" paragraph>
              1. Admission into Hillside University of Science and Technology
              undergraduate programmes is only through Unified Tertiary
              Matriculation Examination (UTME) <br />
              <br />
              2. Applicants/Candidates who did not select Hillside University of
              Science and Technology as Institution of first choice can apply,
              and would be required to change their institution of first choice
              to Hillside University of Science and Technology at any accredited
              JAMB CBT Centre in order to complete the Admission process. <br />
              <br /> 3. The application is also open to foreign applicants
              provided they meet the general entry and JAMB requirements.
            </Typography>
          </Box>

          {/* Add more sections for different programs and admission requirements */}
        </Box>
      </Box>
    </Box>
  );
};

export default AdmissionRequirements;
