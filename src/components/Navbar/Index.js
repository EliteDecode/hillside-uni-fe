import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import MiddleBar from "./MiddleBar";

function Home() {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <Sidebar />
      <Submenu />
    </>
  );
}

export default Home;
