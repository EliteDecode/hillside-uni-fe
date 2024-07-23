import { Box } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import { useParams } from "react-router-dom";
import CBLES from "./CBLES";
import CECS from "./CECS";
import CALES from "./CALES";
import TRISTATE from "./TRISTATE";

const TuitionFeeTemplate2 = () => {
  const { year } = useParams();
  return (
    <Box
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
      style={{ overflowX: "scroll" }}>
      <Box className="container">
        <Title title="Tuition" subtitle="HUST" />
        <div className=" mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">
            HILLSIDE UNIVERSITY OF SCIENCE AND TECHNOLOGY (HUST) SCHOOL FEE
            STRUCTURE FOR{" "}
            {year === "23-24"
              ? "2024/2025"
              : year === "24-25"
              ? "2024/2025"
              : ""}{" "}
            SESSION
          </h1>

          <p>
            Education no doubt is an invaluable investment in anyone’s future,
            encompassing different aspects that contribute to comprehensive
            learning. To embark on an academic journey, one must consider
            multiple expenses that constitute the foundation for a fulfilling
            educational pursuit. <br />
            <br /> At HUST, our commitment is to ensure that Quality education
            is Available and affordable for all. That’s why we keep evolving
            payment options like the Approved Fee Cut, and Installmental Payment
            We also have various Scholarship/Funding options for exceptional
            candidates, and we encourage everyone to apply.
            <br /> <br />
            Selection is based on the criteria(s) determined by the university.
          </p>

          <h2 className="text-xl font-bold my-4">
            Breakdown of Fees for Various Programmes:
          </h2>
        </div>
        <Box className="space-y-16">
          <Box>
            <TRISTATE />
          </Box>
          <Box>
            <CBLES />
          </Box>
          <Box>
            <CECS />
          </Box>
          <Box>
            <CALES />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TuitionFeeTemplate2;
