import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Calender from "../../components/Calender/Calender";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import Advert from "../../components/Advert/Advert";

const AdvertPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="advert" />
        <Advert />
        <NavFooter />
      </div>
    </div>
  );
};

export default AdvertPage;
