import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Residence from "../../components/Residence/Residence";
import Sport from "../../components/Sports/Sport";
import Socials from "../../components/Socials/Socials";
import Food from "../../components/Food/Food";

const StudentLife = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="student life" />
        <Residence />
        <Sport />
        <Food />
        <Socials />

        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default StudentLife;
