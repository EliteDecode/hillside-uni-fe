import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import PublicInformationPage from "../../components/PublicInformationPage/PublicInformationPage";
import BoardOfRegeants from "../../components/BoardOfRegeants/BoardOfRegeants";
import GoverningCouncil from "../../components/GoverningCouncil/GoverningCouncil";
import Management from "../../components/Management/Management";

const Managements = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="managements" />

        <Management />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Managements;
