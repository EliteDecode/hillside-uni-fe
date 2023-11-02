import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const AdmissionPage = () => {
  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-center">
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="bg-[#5e0001] p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Hillside University of Science and Technology
          </h1>
          <p className="text-lg mb-4 text-[#fafafa]">Admissions Coming Soon</p>
          <p className="text-gray-200 text-[11px]">
            We are excited to welcome you to our university. Admissions will
            open soon. Stay tuned for updates!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AdmissionPage;
