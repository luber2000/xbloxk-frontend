import { AddTeamMember, AddContacts, Name, Age, Mobile, Save, Cancel } from '../../../Constant';
import defaultuser from '../../../assets/images/user/user.png';
import { Btn, Image } from '../../../AbstractElements';
import ContactAppContext from '../../../_helper/Contact';
import React, { Fragment, useContext, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, Form } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import CustomizerContext from "../../../_helper/Customizer";
import "../../../../src/assets/scss/xblock/customeraddmember.css";
import AddMemberIcon from "../../../../src/assets/images/member/users-group.svg"

const AddTeamMemberButton = () => {
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialise the hook
  const { createUser } = useContext(ContactAppContext);
  
  const redirectToProfileEdit = () => {
    history(`${process.env.REACT_APP_PUBLIC_URL}/member/add/`);
  };

  return (
    <Fragment>
      <div className='add-member-buttons'>
        <Btn attrBtn={{ className: `text-add-member-button`, color: 'blue', onClick: redirectToProfileEdit }}>
          <img src={AddMemberIcon} alt="Icono" width="28px" height="28px" />
          Add team member
        </Btn>
        <div className='vertical-bar'>
          <span className="">|</span>
        </div>
        <Btn attrBtn={{ className: `text-add-member-button sync-team-text badge-light-primary btn-mail w-100`, color: 'blue' }}>
          Sync Team
        </Btn>
      </div>
      
    </Fragment>
  );
};

export default AddTeamMemberButton;
