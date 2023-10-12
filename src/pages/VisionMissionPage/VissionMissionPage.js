import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import VisionMission from "../../components/VisionMission/VisionMission";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const VissionMission = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="vission and mission" />
        <Breadcrumbs primaryPage="About" secondaryPage="Mission and Vision" />
        <VisionMission />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default VissionMission;
