import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import News from "../../components/News/News";

const NewsPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="news" />
        <News />
      </div>
    </div>
  );
};

export default NewsPage;
