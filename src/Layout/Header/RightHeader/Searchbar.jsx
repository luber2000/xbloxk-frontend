import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import CustomSvgIcon from "../../../Components/Common/Component/CustomSvgIcon";
import '../../../../src/assets/scss/layout/header.css'; 

const Searchbar = () => {
  const [searchresponsive, setSearchresponsive] = useState(false);
  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive);
      document.querySelector('.search-full').classList.add('open');
      document.querySelector('.more_lang').classList.remove('active');
    } else {
      setSearchresponsive(!searchresponsive);
      document.querySelector('.search-full').classList.remove('open');
    }
  };

  return (
    <li>
      <span className='header-search custom-header-icons'>
      {/* <SvgIcon iconId='search' className='white-icon'/> */}
      <CustomSvgIcon className="stroke-icon custom-header-icon" iconId={`search`} />
        {/* <SvgIcon iconId='search' onClick={() => SeacrhResposive(searchresponsive)} /> */}
      </span>
    </li>
  );
};

export default Searchbar;
