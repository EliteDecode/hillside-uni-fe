import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
const Sport = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Sporting Unit" subtitle="Our Sporting Unit" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={12} className="my-4 ">
              <div class="container mx-auto sm:p-4 p-0">
                <div class=" my-8">
                  <h1 class="sm:text-2xl text-xl font-bold mb-4">
                    Sport Unit at Hillside University of Science Technology
                  </h1>
                  <p class="sm:text-md text-sm">
                    The fundamental goal of the Sport Unit is to help each
                    student develop a healthy spirit, mind, and body. Sports
                    participation in Hillside University of Science Technology
                    is designed to service the total person. It is also seen as
                    a vehicle that promotes the four fundamental principles of
                    Adventist Philosophy of Education namely spiritual, social,
                    physical and mental well-being of staff and students. In
                    ensuring this, intramural sports are emphasized over and
                    above inter-university athletic competition. Unwholesome
                    spirit of rivalry, which enters into contest, where students
                    vie with other institutions (not within the same bracket of
                    sharing the Adventist culture) is not encouraged.
                  </p>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">
                    Athletic Events and Contests
                  </h2>
                  <p class="mb-2">
                    This department is in charge of arranging athletic events
                    and contests for the institution's student body, with the
                    best of these athletes being chosen to represent the
                    university in different national and worldwide tournaments.
                  </p>
                  <p class="mb-2">
                    Basketball (Male and Female), Volleyball (Male and Female),
                    Tennis, Football, Athletics (track and field events),
                    Scrabble, Table tennis, Badminton, and Swimming are just a
                    few of the sports in which Team BU excels.
                  </p>
                  <p>
                    The advantages of participation in exercises or physical
                    fitness activities are numerous, which is why the University
                    encourages staff and students to engage in one or more types
                    of sports activity.
                  </p>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">Focus</h2>
                  <p class="mb-2">
                    Our major focus is in intramural and Competitive Sports. The
                    university sports unit organizes sporting activities for
                    both staff and students.
                  </p>
                  <ul class="list-disc list-inside">
                    <li>
                      Training, healthy rivalry, and Recreational activities
                    </li>
                    <li>Fitness and endurance activities</li>
                    <li>Inter-faculty athletic competition</li>
                    <li>Annual inter-faculty games</li>
                    <li>
                      Group matches of Football, Basketball, and Volleyball
                    </li>
                    <li>Racquet Games Championships</li>
                    <li>Cross-country race or road work</li>
                    <li>Coaching clinics</li>
                    <li>
                      Sports club formations (e.g. Squash, Golf, Volleyball,
                      Basketball, etc.)
                    </li>
                  </ul>
                  <p>
                    The University has also competed in National and
                    International Competitions such as the Nigerian Private
                    University Games and the Nigeria Private University Debate.
                  </p>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">Objectives</h2>
                  <ul class="list-disc list-inside">
                    <li>
                      To encourage a large number of people to participate in
                      leisure and competitive sports and physical activities.
                    </li>
                    <li>
                      To encourage and promote high-level athletic performance.
                    </li>
                    <li>
                      To give a chance for students to acquire key qualities
                      that can be learned via teamwork and collaboration.
                    </li>
                    <li>
                      To provide every one of our students, staff, and faculty
                      the chance to experience the thrill and excitement of
                      participating in their chosen sport.
                    </li>
                    <li>
                      To give students, instructors, staff, and faculty members
                      with healthful and healthy activities for enjoyment and
                      relaxation after intense school work.
                    </li>
                    <li>
                      To create an avenue of relaxation for students,
                      instructors, staff, and faculty members where healthy
                      activities are promoted to enhance wellness of the
                      individual.
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={12} className="sm:p-5 p-0">
              <Box></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Sport;
