import React, { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import CustomizerContext from "../../_helper/Customizer";
import { MENUITEMS } from "./Menu";

const SidebarMenuItems = ({ setMainMenu, sidebartoogle, setNavActive, activeClass }) => {
  const { layout } = useContext(CustomizerContext);
  const layout1 = localStorage.getItem("sidebar_layout") || layout;

  const id = window.location.pathname.split("/").pop();
  const layoutId = id;
  const CurrentPath = window.location.pathname;

  const { t } = useTranslation();
  
  const toggletNavActive = (item) => {
    if (window.innerWidth <= 991) {
      document.querySelector(".page-header").className = "page-header close_icon";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon ";
      // document.querySelector('.mega-menu-container').classList.remove('d-block');
      if (item.type === "sub") {
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper";
      }
    }
    if (!item.active) {
      MENUITEMS.filter((menuItem) => {
        if (menuItem.type === "link" && menuItem !== item) {
          menuItem.active = false;
        }
        return menuItem;
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };

  return (
    <>
      {MENUITEMS.map((menuItem, i) => (
        <li className="sidebar-list" key={i}>
          {menuItem.type === "link" ? (
            <Link to={menuItem.path + "/" + layoutId} className={`sidebar-link sidebar-title link-nav  ${CurrentPath.includes(menuItem.title.toLowerCase()) ? "active" : ""}`} onClick={() => toggletNavActive(menuItem)}>
              <SvgIcon className="stroke-icon" iconId={`stroke-${menuItem.icon}`} />
              <SvgIcon className="fill-icon" iconId={`fill-${menuItem.icon}`} />
              <span>{t(menuItem.title)}</span>
            </Link>
          ) : (
            ""
          )}
        </li>
      ))}
    </>
  );
};

export default SidebarMenuItems;
