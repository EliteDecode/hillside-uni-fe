import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";

const GoverningCouncil = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="HUST" subtitle="Governing Council" />

        <Box className="bg-[#f8f7f7] shadow-md cursor-pointer">
          <Grid container spacing={4} className="rounded-xl  p-5 ">
            <Grid item sm={12} md={2}>
              <Box>
                <img
                  src={require("../../assets/chancellor.png")}
                  className="rounded-md"
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "11px", fontWeight: "bold", marginTop: 1 }}>
                  PROF. JAMES A. MAKINDE (Pro-Chancellor and Chair Governing
                  Council)
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={10}>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "13px", opacity: "0.9" }}>
                President/CEO, Mist EDUCARE GLOBAL, LTD. Chancellor & Chairman,
                Maranatha Institutes Of Science & Technology (Mist)
                Pro-chancellor & Chairman, Governing Council, Hillside
                University Of Science & Technology (Hust) Executive
                Director/Chief Operating Officer, Tristate Healthcare System
                Emeritus President/Vice-chancellor, Professor Of Politics,
                Administration & Religion Babcock University. <br />
                <br />
                <ul>
                  <li>
                    Ph.D., Political Science, First Class (Bordeaux France,
                    1989)
                  </li>
                  <li>
                    Ph.D. Coursework in Social Policy & Social Research in
                    Criminology, (Loma Linda, 2004)
                  </li>
                  <li>
                    M.Phil., African Political Studies, (Bordeaux France, 1985)
                  </li>
                  <li>
                    M.A. Religion - Historical Theology, (Andrews USA, 1980)
                  </li>
                  <li>M.A. History, (Andrews, 1980)</li>
                  <li>
                    Diploma, French Language Studies, (Clermont Ferrand France,
                    1984)
                  </li>
                  <li>
                    B.A. Comb. Hons., Business Admin. & History (Beirut Lebanon,
                    1978)
                  </li>
                </ul>
                <br />
                <br />
                DRIVING VISION: His overarching focus for the twenty-five year
                period between 1991-2015 was the actualization of a conceptual
                design, structural gestation and administrative nurturing of
                “Project Babcock” - Nigeria’s “flagship” private university - a
                disruptive millennial institutional innovation which, in 1999
                radically transformed the Nigerian university system and higher
                education as a whole.
                <br />
                <br />
                The Babcock legacy effectively became the blueprint in
                governance structure, curriculum innovation and students
                services that succeeding private and even State institutions and
                new generation Federal universities in the country, we’re
                modeled albeit imperfectly. That pioneering vision with the
                licensing in 1999, has within 21 years, transformed a single
                institution into a blossoming industry comprising 136 out of the
                nation’s 230 universities, more than Federal and State
                government-owned universities combined. The driving inspiration
                powering the post-Babcock vision built on invaluable wealth
                nuggets of a 40-year pioneering university experience, is the
                disruptive reengineering of traditional teacher-focused
                20-century educational system into a holistic quality of life
                upgrading, learner-focused discipleship model for
                entrepreneurial sustainability of university education, by
                producing 250 consultant physicians, 500 graduate nurses, 2,500
                engineers and 5,000 technicians annually by 2044, a doubled
                target output of Nigerian-trained holistic world class S.T.E.A.M
                professionals to be injected into the global economy annually by
                2050.
                <br />
                <br />
                That’s because the futuristic entrepreneurial model Maranatha
                Institutes of Science & Technology (MiST), is a five-dimensional
                disruptive innovation integrated learning municipal community
                complex built on: Sciences/Security, Technology/Engineering,
                Education/Vocational, Agribusiness/Environment, and
                Medicine/Management (S.T.E.A.M). The MiST curriculum is an
                impact-structured platform inspired to reinvigorate today’s army
                of frustrated African youth with purpose-driven life
                opportunities, against the alluring indignities of an overseas
                illusory JAPA prosperity that most often translates into deadly
                nightmares. Anchored on global demand-driven market
                macroeconomy, it equips the energetic youth and retools
                exhausted mid-life career professionals, with profitable
                vocational, industrial and functional life skills, for private
                enterprise or public employment.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default GoverningCouncil;
