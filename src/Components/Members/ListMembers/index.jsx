import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import EditMyProfile from '../AddTeamMember/EditmyProfile';
import MyProfileEdit from '../AddTeamMember/MyProfile';
import AddTeamMemberButton from './AddTeamMemberButton';

import './styles.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Cambia la URL por la de tu endpoint de FastAPI para obtener usuarios
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Card>
      <div className='right-align'>
        <AddTeamMemberButton empty={users.length > 0 ? false : true}>
          <b>Add Team Member</b>
        </AddTeamMemberButton>
      </div>
      <CardHeader>
        <H4>Team members list</H4>
      </CardHeader>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>
                  <Link to={`${process.env.REACT_APP_PUBLIC_URL}/member/edit/${user.id}`}>
                    {user.first_name}
                  </Link>
                </td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UsersList;
