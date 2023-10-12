import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Events from "../../components/Events/Events";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const EventPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="events" />
        <Breadcrumbs primaryPage="Home" secondaryPage="All Events" />
        <Events events={false} />
        <NavFooter />
      </div>
    </div>
  );
};

export default EventPage;
