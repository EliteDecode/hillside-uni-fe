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
import Breadcrumbs from "../../components/general/Breadcrumbs";

const FoodPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="food service" />
        <Breadcrumbs primaryPage="Student Life" secondaryPage="Food Service" />
        <Food />

        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default FoodPage;
