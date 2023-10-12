import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Gallery from "../../components/Gallery/Gallery";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import VisionMission from "../../components/VisionMission/VisionMission";
import Objectives from "../../components/Objectives/Objectives";
import CoreValues from "../../components/CoreValues/CoreValues";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const ObjectivePage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="core values" />
        <Breadcrumbs primaryPage="About" secondaryPage="Core Values" />
        <CoreValues />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default ObjectivePage;
