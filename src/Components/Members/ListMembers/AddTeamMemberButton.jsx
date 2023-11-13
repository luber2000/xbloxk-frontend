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
    history(`${process.env.PUBLIC_URL}/member/add/${layoutURL}`);
  };

  return (
    <Fragment>
      <Btn attrBtn={{ className: `badge-light-primary btn-mail w-100`, color: 'blue', onClick: redirectToProfileEdit }}>
        <Users className='me-2' />
        {AddTeamMember}
      </Btn>
      <span className="vertical-bar">|</span>
      <Btn attrBtn={{ className: `badge-light-primary btn-mail w-100`, color: 'blue' }}>
        Sync Team
      </Btn>
    </Fragment>
  );
};

export default AddTeamMemberButton;
