import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import EditMyProfile from '../ListMembers/';
import MyProfileEdit from './MyProfile';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomizerContext from "../../../_helper/Customizer";

const UserEditContain = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(response.data); 
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
        // Manejar el error como consideres apropiado
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);


  // return user ? (
  return  (
    <Fragment>
      <Breadcrumbs mainTitle='Edit Profile' parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            <Col xl='4'>
              <MyProfileEdit userData={user} />
            </Col>
            <Col xl='8'>
              <EditMyProfile userData={user} />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default UserEditContain;
