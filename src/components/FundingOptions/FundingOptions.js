import React from "react";
import Title from "../general/Title";
import { Box } from "@mui/material";
import { fundingOptions } from "../../utils/data";

const FundingOptions = () => {
  return (
    <Box
      id="Gallery"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Funding Options" subtitle="HUST" />
        <div className="flex items-center justify-center bg-[#f1f1f1]">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="space-y-8 lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
              {fundingOptions.map((item, index) => (
                <div
                  className={`mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 ${
                    index === 1
                      ? "bg-[#5e0001]"
                      : index === 3
                      ? " bg-[#D8FA6D]"
                      : index === 2
                      ? "bg-gray-900"
                      : index === 4
                      ? "bg-[#DCA6F3]"
                      : "bg-[#fff]"
                  } p-6 text-gray-900 xl:p-8`}
                  key={index}>
                  <h3
                    className={`text-3xl font-bold  ${
                      index === 1 || index === 2 ? "text-white" : ""
                    }`}>
                    0{index + 1}.
                  </h3>

                  <a
                    className={`cursor-pointer ${
                      index === 2
                        ? "bg-white text-gray-900"
                        : "bg-gray-900 text-white"
                    } w-full rounded-md p-3  text-sm font-semibold shadow-sm hover:-translate-y-1`}>
                    {item.title}
                  </a>
                  <ul
                    role="list"
                    className="mb-8 space-y-4 text-left text-gray-600 text-sm">
                    {item.points.map((point, index2) => (
                      <li className="flex items-center space-x-3" key={index2}>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 ${
                            index === 2
                              ? "bg-white text-gray-900"
                              : "bg-gray-900 text-white"
                          } rounded-full p-0.5 `}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span
                          className={
                            index === 1 || index === 2 ? "text-white" : ""
                          }>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default FundingOptions;
