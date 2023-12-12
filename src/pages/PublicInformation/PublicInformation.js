import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import PublicInformationPage from "../../components/PublicInformationPage/PublicInformationPage";
import DisclaimerContent from "../../components/DisclaimerContent/DisclaimerContent";
import Disclaimer from "../../components/general/Disclaimer";
import Advert from "../../components/Advert/Advert";

const PublicInformation = () => {
  const { closeSubmenu } = useGlobalContext();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    setOpen(true);
  }, []);

  return (
    <div>
      <Navbar />
      <Disclaimer setOpen={setOpen} open={open} />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="public Information" />
        <DisclaimerContent />
        <Advert />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default PublicInformation;
