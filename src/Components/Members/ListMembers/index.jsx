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
          <b>Add Team Member</b>s
        </AddTeamMemberButton>
      </div>
      <CardHeader>
        <H4>Team members list</H4>
        <div className='table-responsive'>
        <table className="table" style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
          <thead style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
            <tr style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
              <th style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} ><input type="checkbox" id="" name="" value=""/> </th>
              <th style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >Name</th>
              <th style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >Last Name</th>
              <th style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >Email</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
            {users.map((user, index) => (
              <tr key={user.id} style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
                <td style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }}><input type="checkbox" id="" name="" value=""/> </td>
                <td style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }}>
                  <Link to={`${process.env.REACT_APP_PUBLIC_URL}/member/edit/${user.id}`}>
                    {user.first_name}
                  </Link>
                </td >
                <td style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }}>{user.last_name}</td>
                <td style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </CardHeader>
    </Card>
  );
};

export default UsersList;
