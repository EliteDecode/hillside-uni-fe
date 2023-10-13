import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Ict from "../../components/Ict/Ict";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const IctPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="ict department" />
        <Breadcrumbs primaryPage="Resources" secondaryPage="ICT" />

        <Ict />

        <NavFooter />
      </div>
    </div>
  );
};

export default IctPage;
