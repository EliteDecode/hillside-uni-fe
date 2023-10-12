import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import College from "../../components/Colleges/College";
import Breadcrumbs from "../../components/general/Breadcrumbs";
const SchoolsAndColleges = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="colleges and schools" />
        <Breadcrumbs primaryPage="Academics" secondaryPage="Colleges" />
        <College />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SchoolsAndColleges;
