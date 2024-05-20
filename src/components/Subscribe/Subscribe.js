import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Typography } from "@mui/material";
import { Input } from "antd";
import subscribeImg from "../../assets/subscribe2.png";
import { useApiGlobalContext } from "../../utils/apiContext";

const Subscribe = () => {
  const { subLoading, addSubscribers } = useApiGlobalContext();
  return (
    <Box
      className="subscribe"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Box className="text-center flex items-center flex-col sm:w-[65%] w-full m-auto">
          <Box>
            <img
              src={subscribeImg}
              alt="subscribe "
              className="mb-10 sm:w-[60px] w-[60px]"
            />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#f7f7f7",
              "@media (max-width: 767px)": {
                fontSize: "20px",
              },
            }}>
            Stay Updated On the latest happenings In the University
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#f7f7f7",
              opacity: "0.7",
              "@media (max-width: 767px)": {
                fontSize: "12px",
              },
            }}>
            Please provide your email address below.
          </Typography>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })}
            onSubmit={(values) => {
              const email = values.email;
              addSubscribers({ email: email });
            }}>
            <Form className="w-full">
              <Box className="flex bg-white border mt-5 rounded-xl px-2 sm:py-1 py-0.5  w-full items-center">
                <Field
                  type="email"
                  name="email"
                  placeholder="Subscribe to our newsletter"
                  as={Input}
                  style={{
                    border: "none",
                    boxShadow: "none",
                    background: "transparent",
                    color: "#5e0001",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                />
                <Button
                  type="submit"
                  className="hover:bg-#f7f7f7 hover:text-[#5e0001] hover:border-[#5e0001]"
                  sx={{
                    background: "#5e0001",
                    borderRadius: "25px",
                    padding: "10px 4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    width: "20%",
                    color: "#fff",
                    "@media (max-width:767px)": {
                      fontSize: "9px",
                    },
                  }}>
                  {subLoading ? "Please wait..." : "Subscribe"}
                </Button>
              </Box>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </Form>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
