import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Residence from "../../components/Residence/Residence";
import Breadcrumbs from "../../components/general/Breadcrumbs";
const ResidencePage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="halls of residence" />
        <Breadcrumbs
          primaryPage="Student Life"
          secondaryPage="Halls of Residence"
        />
        <Residence />
        <NavFooter />
      </div>
    </div>
  );
};

export default ResidencePage;
