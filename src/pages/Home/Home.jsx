import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Events from "../../components/Events/Events";
import { useGlobalContext } from "../../utils/context";
import CoreValues from "../../components/CoreValues/CoreValues";
import Applications from "../../components/Application/Application";
import Gallery from "../../components/Gallery/Gallery";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Hero />
        <News />
        <Events />
        <CoreValues />
        <Applications />
        <Gallery />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Home;
