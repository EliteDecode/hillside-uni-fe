import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
const Socials = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Social Unit" subtitle="Our Social Unit" />
        <Box className="p-3 shadow-md rounded-md bg-white">
          <Grid container rowSpacing={4}>
            <Grid item sm={12} md={12} className="my-4 ">
              <div class="container mx-auto sm:p-4 p-0">
                <div class=" my-8">
                  <h1 class="sm:text-2xl text-xl font-bold mb-4">
                    Social Unit at Hillside University of Science and Technology
                  </h1>
                  <p class="sm:text-lg text-sm">
                    The Social Unit is dedicated to fostering a vibrant and
                    inclusive campus community that enhances the overall
                    university experience. Our primary goal is to promote social
                    interaction, engagement, and personal growth among our
                    students, faculty, and staff.
                  </p>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">
                    Activities and Initiatives
                  </h2>
                  <p class="mb-2">
                    We organize a wide range of activities and initiatives to
                    create a sense of belonging and encourage meaningful
                    connections. Our offerings include:
                  </p>
                  <ul class="list-disc list-inside">
                    <li>Social gatherings and events</li>
                    <li>Community service projects</li>
                    <li>Cultural festivals and celebrations</li>
                    <li>Student clubs and organizations</li>
                    <li>Mentoring and support programs</li>
                    <li>Leadership development opportunities</li>
                    <li>Networking and career-building events</li>
                    <li>Wellness and mental health awareness campaigns</li>
                  </ul>
                  <p>
                    Our aim is to create an enriching environment where students
                    can build friendships, develop leadership skills, and make a
                    positive impact within the university community and beyond.
                  </p>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">Our Mission</h2>
                  <p class="mb-2">The mission of the Social Unit is to:</p>
                  <ul class="list-disc list-inside">
                    <li>
                      Promote a sense of belonging and inclusion for all
                      students, faculty, and staff.
                    </li>
                    <li>
                      Foster a diverse and culturally rich campus environment.
                    </li>
                    <li>Encourage personal growth and social development.</li>
                    <li>
                      Provide opportunities for students to engage in
                      extracurricular and co-curricular activities.
                    </li>
                    <li>
                      Support the holistic well-being of our university
                      community.
                    </li>
                  </ul>
                </div>

                <div class="my-8">
                  <h2 class="sm:text-lg text-md font-bold mb-4">
                    Get Involved
                  </h2>
                  <p class="mb-2">
                    We invite all members of Hillside University to get involved
                    in our social activities and initiatives. Join clubs, attend
                    events, and participate in community service projects to
                    make the most of your university experience.
                  </p>
                  <p>
                    At Hillside, we believe that a vibrant and inclusive social
                    environment contributes to personal growth, leadership
                    development, and a strong sense of community.
                  </p>
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

export default Socials;
