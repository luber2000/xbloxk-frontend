import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { Card, CardHeader } from 'reactstrap';
import { H4, H5, Btn } from '../../../AbstractElements';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/scss/xblock/member_group.css';
import UsersGroupIcon from '../../../assets/images/svg-icon/users-group.svg'
import CustomizerContext from "../../../_helper/Customizer";

const TeamGroup = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const redirectToTeams = () => {
    history(`${process.env.REACT_APP_PUBLIC_URL}/search-members`);
  };

  const hrStyles = {
    borderColor: "white",
    borderWidth: "2px",
  };


  return (
    <Card>
      <div className='custom-tg-container'>
        <div className='team-group-page'>
          <div className='custom-btn-searh-icon' onClick={redirectToTeams}>
            <img src={UsersGroupIcon} alt="Lobby SVG" />
            <Btn attrBtn={{ className: `custom-btn custom-btn-team w-100`, color: 'blue' }}>
              Team
            </Btn>
            {/* </Link> */}
          </div>
          <div className='custom-btn-searh-icon'>
            <Btn attrBtn={{ className: `custom-btn custom-btn-group w-100`, color: 'blue' }}>
              Groups
            </Btn>
          </div>
        </div>
        <div className='custom-line-tg'>
          <hr/>
        </div>
        <div className='custom-text-tg'>
          <p>Access ruleset manager</p>
        </div>
      </div>
    </Card>
  );
};

export default TeamGroup;