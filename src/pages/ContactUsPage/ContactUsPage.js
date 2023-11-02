import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import PublicInformationPage from "../../components/PublicInformationPage/PublicInformationPage";
import ContactUs from "../../components/ContactUs/ContactUs";

const ContactUsPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="contact" />
        <ContactUs />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default ContactUsPage;
