import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { Card, CardHeader, Input } from 'reactstrap';
import { H4, Btn } from '../../../AbstractElements';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/scss/xblock/member_group.css';
import UsersGroupIcon from '../../../assets/images/svg-icon/users-group.svg';
import SearchIcon from '../../../assets/images/svg-icon/search-solid.svg';
import CustomizerContext from "../../../_helper/Customizer";
import ListIcon from '../../../assets/images/svg-icon/list-solid.svg';

const SearchMember = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const redirectToTeams = () => {
    history(`${process.env.REACT_APP_PUBLIC_URL}/members/`);
  };

  const hrStyles = {
    borderColor: "white",
    borderWidth: "2px",
  };


  return (
    <Card>
      <div className='custom-tg-container'>
        <div className='search-team-page'>
          <div className='custom-btn-team-group'>
            <img src={SearchIcon} alt="Search SVG" />
          </div>
          <Input className="custom-search-member-input" placeholder="Search by name or email"/>
          {/* <Input className="form-control custom-input-color" type="text" placeholder="Company" {...register("company", { required: true })} /><span style={{ color: "red" }}>{errors.company && 'Company is required'} </span> */}
          <div className='custom-btn-team-group'>
            <img src={ListIcon} alt="List SVG" onClick={redirectToTeams} />
          </div>
        </div>
        <div className='custom-line-tg'>
          <hr/>
        </div>
      </div>
    </Card>
  );
};

export default SearchMember;
