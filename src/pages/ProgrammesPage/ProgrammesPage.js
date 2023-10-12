import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Programs from "../../components/Programs/Programs";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const ProgrammesPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="academic programmes" />
        <Breadcrumbs
          primaryPage="Academics"
          secondaryPage="Academic Programes"
        />
        <Programs />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default ProgrammesPage;
