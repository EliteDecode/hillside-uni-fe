import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../utils/context";
import { sublinks } from "../../utils/data";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper z-50 show" : "sidebar-wrapper"
      }`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links overflow-hidden">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <Link to={`/${page}`} onClick={closeSidebar}>
                  <h4 className="mb-2 font-bold">{page}</h4>
                </Link>
                <div
                  className="sidebar- overflow-hidden"
                  onClick={closeSidebar}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <>
                        <Link
                          to={`/${url}`}
                          className="flex items-center space-x-2 mb-3">
                          <span className="text-gray-400 text-[14px]">
                            {icon}
                          </span>
                          <span className="text-[14px]">{label}</span>
                        </Link>

                        {link?.sublinks?.map((item, index) => (
                          <div className="mb-3">
                            {item.url === "Admission/remedial/form" ? (
                              <a
                                className="text-[11px]"
                                href={require("../../assets/remedial.pdf")}
                                download
                                style={{ fontSize: "12px" }}>
                                - {item.label}
                              </a>
                            ) : (
                              <Link to={`/${item.url}`}>
                                <li className="text-[12px] list-none">
                                  - {item.label}
                                </li>
                              </Link>
                            )}
                          </div>
                        ))}
                      </>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
