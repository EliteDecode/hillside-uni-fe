import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../utils/context";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ReactGA from "react-ga4";

const Submenu = () => {
  const pagelocation = useLocation();

  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  const handleAnalytics = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Button Clicked",
      label: "Remedial Form Download",
    });
  };

  return (
    <aside
      className={`  ${isSubmenuOpen ? "submenu show " : "submenu"}`}
      ref={container}
      style={{ zIndex: 10000000, position: "fixed", top: "0" }}>
      <section>
        <Link to={`/${page}`}>
          <h4>{page}</h4>
        </Link>
        <div className={`  submenu-center `}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <Box className="mb-5" key={index}>
                {url === "staff portal" ? (
                  <a
                    href="staff.hust.edu.ng"
                    className=" w-full text-[11px] flex items-center">
                    <span> {icon}</span>{" "}
                    <span className="text-[12px]">{label}</span>
                  </a>
                ) : (
                  <Link
                    to={`/${url}`}
                    className=" w-full text-[11px] flex items-center">
                    <span> {icon}</span>{" "}
                    <span className="text-[12px]">{label}</span>
                  </Link>
                )}

                <ul className="-mt-2 px-5 ">
                  {link?.sublinks?.map((item, index) => (
                    <>
                      {item.url === "Admission/remedial/form" ? (
                        <a
                          className="text-[11px] list-disc"
                          onClick={handleAnalytics}
                          href={require("../../assets/remedial.pdf")}
                          download
                          style={{ fontSize: "11px" }}>
                          - {item.label}
                        </a>
                      ) : (
                        <Link to={`/${item.url}`}>
                          <li
                            className="text-[11px] list-disc"
                            key={index}
                            style={{ listStyle: "disc" }}>
                            - {item.label}
                          </li>
                        </Link>
                      )}
                    </>
                  ))}
                </ul>
              </Box>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
