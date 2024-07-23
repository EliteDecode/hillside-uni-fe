import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";

import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import TuitionFeeTemplate2 from "../../components/TuitionFee/TuitionFeeTemplate2";

const TuitionFeePage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section={`fees`} />
        <TuitionFeeTemplate2 />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default TuitionFeePage;
