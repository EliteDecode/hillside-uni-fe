import { Box } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import prof_owolabi from "../../assets/board/owlabi.jpg";
import dr_makinde from "../../assets/board/Adeola Makinde.jpg";
import aisha from "../../assets/board/aisha.jpg";
import tifase from "../../assets/board/Tifase.jpg";
import iranloye from "../../assets/board/iranloye.jpg";
import lawanson from "../../assets/board/Chidinma Lawanson.jpg";
import olaniyi from "../../assets/board/Olaniy Arije.jpg";
import leye from "../../assets/board/leye jaiyeola.jpg";
import prof_kehinde from "../../assets/board/kehinde.jpg";
import dr_salami from "../../assets/board/dr salami.jpg";
import franca from "../../assets/board/franca.jpg";
import dr_folakemi from "../../assets/board/Dr (Mrs) Folakemi Olomojobi.jpg";
import dr_oluchi from "../../assets/board/oluchi.jpg";
import daramola from "../../assets/board/daramola.jpg";
import kadira from "../../assets/board/kadaria.jpg";
import prof_olugbenga from "../../assets/board/olugbenga.jpg";
import dapo from "../../assets/board/dapo.jpg";
import loaye from "../../assets/mr laoye.png";

const GoverningCouncil = () => {
  const members = [
    {
      name: "Mr Laoye Jaiyeola",
      image: loaye,
      position: "Founder/Pro-Chancellor",
    },
    { name: "Prof. Gbadebo Owolabi ", image: prof_owolabi, position: "Member" },
    { name: "Dr Adeola Makinde", image: dr_makinde, position: "Member" },
    { name: "Aisha Abubakar", image: aisha, position: "Member" },
    { name: "Onyeche Tifase", image: tifase, position: "Member" },
    { name: "Oluyemisi Iranloye", image: iranloye, position: "Member" },
    { name: "Mr. Dapo Oriola", image: dapo, position: "Member" },
    { name: "Chidinma Lawanson", image: lawanson, position: "Member" },
    { name: "Dr Olaniyi Ezekiel Arije", image: olaniyi, position: "Member" },
    { name: "Leye Jaiyeola", image: leye, position: "Member" },
    {
      name: "Prof. Kehinde Sunday Oluwadiya",
      image: prof_kehinde,
      position: "Member",
    },
    { name: "Dr Adedoyin Salami", image: dr_salami, position: "Member" },
    { name: "Mrs Chukwuonwo Franca Elochi", image: franca, position: "Member" },
    { name: "Dr Folakemi Olomojobi", image: dr_folakemi, position: "Member" },
    {
      name: "Dr Eucharia Oluchi Nwaichi",
      image: dr_oluchi,
      position: "Member",
    },
    {
      name: "Daramola Olanipekun Solomon",
      image: daramola,
      position: "Member",
    },
    { name: "Mrs. Kadaria Ahmed", image: kadira, position: "Member" },
    {
      name: "Prof. Olugbenga Okunlola",
      image: prof_olugbenga,
      position: "Member",
    },

    // Add all 16 members here
  ];

  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="HUST" subtitle="Governing Council" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full sm:h-80 h-96 object-fit"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg etext-center font-semibold">
                  {member.name}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-md font-bold">{member.name}</h3>
                <h3 className="text-md font-black uppercase ">
                  {member.position}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default GoverningCouncil;
