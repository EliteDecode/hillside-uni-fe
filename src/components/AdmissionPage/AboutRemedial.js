import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";
import Title from "../general/Title";

function AboutRemedial() {
  return (
    <Box
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="About Remedial" subtitle="HUST" />

        <a href={require("../../assets/remedial.pdf")} download>
          <button className="py-2 bg-teal-500 px-5 text-white rounded-md">
            Download Application Form
          </button>
        </a>
        <div className=" py-8 px-4">
          <Box>
            <Grid container>
              <Grid item xs={12} sm={7} md={6}>
                <Typography
                  variant="body1"
                  className="mb-4"
                  style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Introduction
                </Typography>

                <Typography variant="body2" className="mb-4">
                  Hillside University of Science and Technology (HUST), located
                  in Okemesi, Ekiti State is pleased to announce the
                  commencement of applications for its prestigious
                  Remedial/Pre-Degree Programme for the 2024/2025 academic
                  session. <br />
                  <br /> This programme serves as a crucial stepping stone for
                  students aiming to pursue higher education across various
                  fields. If you aspire to strengthen your academic credentials
                  and prepare for university-level education, HUST’s remedial
                  programme is tailored to meet your needs. <br />
                  <br />
                  Enrolling in our remedial programme at HUST provides an
                  excellent opportunity to learn an international language such
                  as Mandarin, Swahili, or French, bridge the gap between your
                  secondary education and your desired undergraduate course.{" "}
                  <br /> <br />
                  This programme not only equips you for the academic challenges
                  of university education but also significantly enhances your
                  chances of securing admission into your chosen course. Don’t
                  miss this chance to establish a solid foundation for your
                  academic and career aspirations.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={6} className="sm:block hidden">
                <Box className="flex flex-col items-center justify-center">
                  <img
                    src={require("../../assets/hr.jpg")}
                    alt=""
                    className="w-[65%] "
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="my-5">
            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Benefits for Applicants:
            </Typography>
            <Grid container className="mt-4" spacing={2}>
              <Grid item sm={12} md={3}>
                <Box className="bg-white rounded-md shadow-md p-3">
                  <Box className="flex items-center space-x-2">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#5e0001",
                      }}>
                      01.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#5e0001",
                      }}>
                      Academic Progression
                    </Typography>
                  </Box>
                  <Box className="mt-3 space-y-2">
                    <Typography sx={{ fontSize: "12px" }}>
                      Upon successful completion of the Pre-Degree programme,
                      students will gain direct entry into the 100 level of
                      their chosen degree programmes at Hillside University of
                      Science and Technology.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={3}>
                <Box className="bg-white rounded-md shadow-md p-3">
                  <Box className="flex items-center space-x-2">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#5e0001",
                      }}>
                      02.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#5e0001",
                      }}>
                      Admission Requirements:
                    </Typography>
                  </Box>
                  <Box className="mt-3 space-y-2">
                    <Typography sx={{ fontSize: "12px" }}>
                      The Pre-Degree programme requires credit grades in English
                      Language and Mathematics, offering a pathway for students
                      who may not have fulfilled conventional admission
                      criteria.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={3}>
                <Box className="bg-white rounded-md shadow-md p-3">
                  <Box className="flex items-center space-x-2">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#5e0001",
                      }}>
                      03.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#5e0001",
                      }}>
                      Holistic Development:
                    </Typography>
                  </Box>
                  <Box className="mt-3 space-y-2">
                    <Typography sx={{ fontSize: "12px" }}>
                      Both programmes will provide students with opportunities
                      for personal and professional growth through
                      extracurricular activities, mentorship programs, and
                      career counseling, enhancing their university experience
                      beyond academics.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={3}>
                <Box className="bg-white rounded-md shadow-md p-3">
                  <Box className="flex items-center space-x-2">
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#5e0001",
                      }}>
                      04.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "#5e0001",
                      }}>
                      Language Exposure:
                    </Typography>
                  </Box>
                  <Box className="mt-3 space-y-2">
                    <Typography sx={{ fontSize: "12px" }}>
                      Opportunity to learn other international languages like
                      Mandarin, Swahili, French etc.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* <ul className="list-disc pl-6 mb-6">
              <li>
                Academic Progression: Upon successful completion of the
                Pre-Degree programme, students will gain direct entry into the
                100 level of their chosen degree programmes at Hillside
                University of Science and Technology.
              </li>
              <li>
                Admission Requirements: The Pre-Degree programme requires credit
                grades in English Language and Mathematics, offering a pathway
                for students who may not have fulfilled conventional admission
                criteria.
              </li>
              <li>
                Holistic Development: Both programmes will provide students with
                opportunities for personal and professional growth through
                extracurricular activities, mentorship programs, and career
                counseling, enhancing their university experience beyond
                academics.
              </li>
              <li>
               
              </li>
            </ul> */}
          </Box>

          <Box>
            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              General Eligibility Criteria:
            </Typography>
            <ul className="list-disc pl-6 mb-6">
              <li>
                - Prospective candidates must have completed their Ordinary
                Level education, as demonstrated by qualifications such as SSCE
                (WAEC), SSCE (NECO), NABTEB, or their equivalents. Candidates
                that have deficiency in their o'level as this can prepare them
                for WAEC GCE and NECO GCE and of course JAMB UTME.
              </li>
              <li>
                - A minimum of 3 (Three) credit passes in relevant subjects is a
                prerequisite. It's important to note that for Arts, a credit in
                English Language is mandatory, while for Sciences and Social
                Sciences, credits in both English and Mathematics are essential.
              </li>
              <li>
                - Candidates with deficiencies in specific subjects in their
                Ordinary Level results may still be considered. However, they
                are required to address these shortcomings before the 2025/2026
                admission proceedings.
              </li>
            </ul>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Transition from Pre-Degree to Degree Programme
            </Typography>
            <Typography variant="body2" className="mb-6">
              Successful completion of the Pre-Degree programme marks just the
              initial phase. Candidates must also achieve commendable scores in
              the 2025/2026 JAMB Unified Tertiary Matriculation Examination
              (UTME). Only then will they stand a chance to gain admission into
              one of the numerous esteemed Degree Programmes that HUST offers.
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Who is this programme for?
            </Typography>
            <Typography variant="body2" className="mb-6">
              The Remedial/Pre-Degree Programme at Hillside University of
              Science and Technology (HUST) is designed for students who meet
              certain criteria and have specific educational goals. Here's a
              breakdown of who these programs are typically for:
              <ul className="list-disc pl-6 mb-6">
                <li>
                  - Students Transitioning from Secondary Education: The
                  programme is for students who have completed their Ordinary
                  Level education, as demonstrated by qualifications such as
                  SSCE (WAEC or NECO), GCE, NABTEB, or their equivalents. It
                  serves as a bridge between secondary education and higher
                  education, preparing students for university-level academic
                  rigor.
                </li>
                <li>
                  - Aspiring University Students: Individuals who aspire to
                  pursue higher education across various fields but need to
                  enhance their academic credentials and prepare for
                  university-level education can benefit from this programme but
                  did not pass/take the JAMB UTME. It is tailored to meet the
                  needs of students aiming to strengthen their academic
                  foundations.
                </li>
                <li>
                  - Candidates Seeking Admission into Specific Courses: The
                  programme is suitable for candidates who have a desired
                  undergraduate course in mind and want to enhance their chances
                  of securing admission into that particular course. It helps
                  students prepare for the academic challenges specific to their
                  chosen field of study.
                </li>
                <li>
                  - Students with Subject Deficiencies: Candidates who have
                  deficiencies in specific subjects in their Ordinary Level
                  results may still be considered for the programme. However,
                  they are required to address these shortcomings before the
                  admission proceedings for the subsequent academic session.
                </li>
              </ul>
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Proposed Programme Duration:
            </Typography>
            <Typography variant="body2" className="mb-6">
              April 2024 – March 2025 (1 year)
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              School Fees including accommodation:
            </Typography>
            <Typography variant="body2" className="mb-6">
              N850,000.00 (first semester - N450,000 and Second semester -
              N400,000)
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Courses/Subjects to be taught:
            </Typography>
            <Typography variant="body2" className="mb-6">
              The Pre-Degree programme will cover a wide range of subjects,
              including but not limited to:
              <ul className="list-disc pl-6 mb-6">
                <li>Mathematics</li>
                <li>English Language</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Economics</li>
                <li>Literature in English</li>
                <li>Geography</li>
                <li>Government</li>
                <li>Bookkeeping and Accounting</li>
                <li>Information Technology/Computer Studies</li>
                <li>Technical Drawing</li>
                <li>International language (Swahili, Mandarin, French)</li>
              </ul>
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              How to Apply for the HUST Remedial Programme
            </Typography>
            <Typography variant="body2" className="mb-6">
              To apply, visit the portal:{" "}
              <a
                href="https://www.hust.edu.ng/remedial"
                target="_blank"
                rel="noopener noreferrer">
                https://www.hust.edu.ng/remedial
              </a>
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              Application Fee:
            </Typography>
            <Typography variant="body2" className="mb-6">
              N10,000
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              This program will lead to the admission into all our available
              Degree Programmes:
            </Typography>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              A. COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES
            </Typography>
            <ul className="list-disc pl-6 mb-6">
              <li>Accounting</li>
              <li>Economics</li>
              <li>Mass Communication</li>
              <li>Logistics and Supply Chain Management</li>
            </ul>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              B. COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES
            </Typography>
            <ul className="list-disc pl-6 mb-6">
              <li>Agribusiness</li>
              <li>Agricultural Economics</li>
              <li>Forensic Science</li>
              <li>Environmental Management and Toxicology</li>
              <li>Microbiology</li>
              <li>Petroleum Chemistry</li>
            </ul>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              C. COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY
            </Typography>
            <ul className="list-disc pl-6 mb-6">
              <li>Computer and Artificial Intellgence</li>
              <li>Cyber Security</li>
              <li>Data Science</li>
              <li>Software Engineering</li>
              <li>Civil and Construction Engineering</li>
              <li>Aerospace Engineering</li>
              <li>Systems Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Mechatronics Engineering</li>
              <li>Chemical Engineering</li>
              <li>Electrical Engineering</li>
            </ul>

            <Typography
              variant="body1"
              className="mb-4"
              style={{ fontWeight: "bold" }}>
              D. TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES
            </Typography>
            <ul className="list-disc pl-6 mb-6">
              <li>Medicine</li>
              <li>Dentistry</li>
              <li>Pharmaceutical Science</li>
              <li>Nursing</li>
              <li>Medical Laboratory Science</li>
              <li>Optometry</li>
              <li>Physiology</li>
              <li>Anatomy</li>
              <li>Audiology</li>
              <li>Biochemistry</li>
            </ul>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default AboutRemedial;
