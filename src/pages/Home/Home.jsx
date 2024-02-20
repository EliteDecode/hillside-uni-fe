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
import { useApiGlobalContext } from "../../utils/apiContext";
import Disclaimer from "../../components/general/Disclaimer";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const { news, loading } = useApiGlobalContext();

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
        <Hero />
        <Applications />
        <News items={news} loading={loading} category="news" />
        <Events />
        <CoreValues />
        <Gallery />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Home;
