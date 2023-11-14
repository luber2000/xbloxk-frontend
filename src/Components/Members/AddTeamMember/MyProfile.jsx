import React, { Fragment, useContext, useState } from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H5, H4, H6, P, Image, Btn } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { MyProfile, Bio, Password, PasswordConfirmation, Website, Save, EmailAddress, FirstName, LastName } from '../../../Constant';
import CustomizerContext from '../../../_helper/Customizer';
import axios from 'axios';

const MyProfileEdit = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const isPasswordMatch = () => {
    return password === passwordConfirmation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordMatch()) {
      console.error("Las contraseñas no coinciden");
      alert("Las contraseñas no coinciden")
      return;
    }

    try {
      console.log({
        email: email,
        first_name:firstName, // firstName,
        last_name: lastName, // lastName,
        password: password,
        password_confirmation: passwordConfirmation
        // Incluye otros campos aquí
      });
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/create`, {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: passwordConfirmation
        // Incluye otros campos aquí
      });
      console.log(response.data);
      // Maneja la respuesta, como redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error creating user", error);
      // Maneja los errores, como mostrar un mensaje al usuario
    }
  };

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <H4 attrH4={{ className: 'card-title mb-0' }}>{MyProfile}</H4>
          <div className='card-options'>
            <a className='card-options-collapse' href='#javascript'>
              <i className='fe fe-chevron-up'></i>
            </a>
            <a className='card-options-remove' href='#javascript'>
              <i className='fe fe-x'></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row className='mb-2'>
              <div className='profile-title'>
                <div className='media'>
                  <Image attrImage={{ className: 'img-70 m-0 rounded-circle', alt: '', src: `${require('../../../assets/images/user/7.jpg')}` }} />
                  <div className='media-body'>
                    <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile/${layoutURL}`}>
                      <H5 attrH5={{ className: 'mb-1' }}>MARK JECNO</H5>
                    </Link>
                    <P>DESIGNER</P>
                  </div>
                </div>
              </div>
            </Row>
            <FormGroup className='mb-3'>
              <H6 attrH6={{ className: 'form-label' }}>{Bio}</H6>
              <Input type='textarea' className='form-control custom-input-color' rows='5' defaultValue='On the other hand, we denounce with righteous indignation' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{FirstName}</Label>
              <Input className='form-control custom-input-color' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{LastName}</Label>
              <Input className='form-control custom-input-color' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{EmailAddress}</Label>
              <Input className='form-control custom-input-color' placeholder='your-email@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{Password}</Label>
              <Input className='form-control custom-input-color' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Label className='form-label'>{PasswordConfirmation}</Label>
              <Input className='form-control custom-input-color' type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </FormGroup>
            <div className='form-footer'>
              <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }}>{Save}</Btn>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default MyProfileEdit;
