import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import College from "../../components/Colleges/College";
import Programs from "../../components/Programs/Programs";
import Calender from "../../components/Calender/Calender";

import Applications from "../../components/Application/Application";
import Disclaimer from "../../components/general/Disclaimer";
import AdmissionRequirements from "../../components/AdmissionPage/AdmissionRequirements";
import AdmissionProcedures from "../../components/AdmissionPage/AdmissionProcedure";
import FundingOptions from "../../components/FundingOptions/FundingOptions";

const Funding = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="funding options" />
        <FundingOptions />

        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Funding;
