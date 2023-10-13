import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Socials from "../../components/Socials/Socials";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const SocialPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="social life" />
        <Breadcrumbs primaryPage="Student Life" secondaryPage="Social Life" />
        <Socials />

        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SocialPage;
