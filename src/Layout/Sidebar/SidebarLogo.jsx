import React, { useContext, useState } from 'react';
import { Grid } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
import CubaIcon from '../../assets/images/logo/logo.png';
import CustomizerContext from '../../_helper/Customizer';
import CustomSvgIcon from "../../Components/Common/Component/CustomSvgIcon";
import '../../assets/scss/layout/customsidebar.css';

const SidebarLogo = () => {
  const { mixLayout, toggleSidebar, toggleIcon, layout, layoutURL } = useContext(CustomizerContext);

  const openCloseSidebar = () => {
    toggleSidebar(!toggleIcon);
  };

  const layout1 = localStorage.getItem("sidebar_layout") || layout;

  return (
    <div className='logo-wrapper custom-logo-wrapper'>
      {layout1 !== 'compact-wrapper dark-sidebar' && layout1 !== 'compact-wrapper color-sidebar' && mixLayout ? (
        <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
          <Image attrImage={{ className: 'img-fluid d-inline', src: `${CubaIcon}`, alt: '' }} />
        </Link>
      ) : (
        <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
          <Image attrImage={{ className: 'img-fluid d-inline', src: `${require('../../assets/images/logo/logo-dark.png')}`, alt: '' }} />
        </Link>
      )}
      <div className='back-btn' onClick={() => openCloseSidebar()}>
        <i className='fa fa-angle-left'></i>
      </div>
      <div className='toggle-sidebar' onClick={openCloseSidebar}>
        {/* <Grid className='status_toggle middle sidebar-toggle' /> */}
        <CustomSvgIcon className="stroke-icon custom-sidebar-icon status_toggle middle sidebar-toggle" iconId={`toggle`} />
      </div>
    </div>
  );
};

export default SidebarLogo;
