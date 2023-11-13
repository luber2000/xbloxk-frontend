import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';
import { useParams } from 'react-router-dom';

const UsersEditContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='New Team Member' parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='4'>
              <MyProfileEdit />
            </Col>
            <Col xl='8'>
              <EditMyProfile />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;
