import React, { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SvgIcon from "../../Components/Common/Component/SvgIcon";
import CustomizerContext from "../../_helper/Customizer";
import { MENUITEMS } from "./Menu";
import Lobby from "../../assets/images/home/sidebar/lobby.svg"; // Importa tus archivos SVG aquí
import Meeting from "../../assets/images/home/sidebar/meeting.svg";
import Analytics from "../../assets/images/home/sidebar/analytics.svg";
import Blocks from "../../assets/images/home/sidebar/blocks.svg";
import Team from "../../assets/images/home/sidebar/team.svg";
import Tasks from "../../assets/images/home/sidebar/tasks.svg";
import BlockBoard from "../../assets/images/home/sidebar/block-board.svg";
import Plus from "../../assets/images/home/sidebar/plus.svg";


const SidebarMenuItems = ({ setMainMenu, sidebartoogle, setNavActive, activeClass }) => {
  const { layout } = useContext(CustomizerContext);
  const layout1 = localStorage.getItem('sidebar_layout') || layout;

  const id = window.location.pathname.split('/').pop();
  const layoutId = id;
  const CurrentPath = window.location.pathname;

  const { t } = useTranslation();

  const getSvgIcon = (iconName) => {
    switch (iconName) {
      case "lobby":
        return Lobby
      case "meeting":
        return Meeting
      case "analytics":
        return Analytics
      case "blocks":
        return Blocks
      case "team":
        return Team
      case "tasks":
        return Tasks
      case "block-board":
        return BlockBoard
      case "plus":
        return Plus
      // Agrega otros casos para tus iconos SVG aquí
      default:
        return null;
    }
  };
  
  const toggletNavActive = (item) => {
    if (window.innerWidth <= 991) {
      document.querySelector('.page-header').className = 'page-header close_icon';
      document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper close_icon ';
      document.querySelector('.mega-menu-container').classList.remove('d-block');
      if (item.type === 'sub') {
        document.querySelector('.page-header').className = 'page-header';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper';
      }
    }
    if (!item.active) {
      MENUITEMS.map((a) => {
        a.filter((Items) => {
          if (a == item ) Items.active = false;
          return Items;
        });
        return a;
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
              {/*<SvgIcon className="stroke-icon" iconId={`stroke-${menuItem.icon}`} />
              <SvgIcon className="fill-icon" iconId={`fill-${menuItem.icon}`} /> */}
              <span className="stroke-icon">
                <img src={getSvgIcon(menuItem.icon)} alt="Lobby SVG" />
              </span>
              <span className="fill-icon">
                <img src={getSvgIcon(menuItem.icon)} alt="Lobby SVG" />
              </span>
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
