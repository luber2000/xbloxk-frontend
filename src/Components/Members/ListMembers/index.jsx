import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import EditMyProfile from '../AddTeamMember/EditmyProfile';
import MyProfileEdit from '../AddTeamMember/MyProfile';
import AddTeamMemberButton from './AddTeamMemberButton';
import "../../../../src/assets/scss/xblock/team_members_list.css";
import ProfileIcon from "../../../../src/assets/images/member/profile-icon.svg"

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

  const data = [
    { id: 1, nombre: 'Mark Jecno', fecha: '12/30/2023' },
    { id: 2, nombre: 'Mark Jecno', fecha: '12/30/2023' },
    { id: 3, nombre: 'Mark Jecno', fecha: '12/30/2023' },
    { id: 4, nombre: 'Mark Jecno', fecha: '12/30/2023' },
    { id: 5, nombre: 'Mark Jecno', fecha: '12/30/2023' }
  ];  

  return (
      <div>
        <div className='team-member-buttons-container'>
          <div className='team-member-back'>Back</div>
          <div className='right-align'>
            <AddTeamMemberButton empty={users.length > 0 ? false : true}>
              <b>Add Team Member</b>
            </AddTeamMemberButton>
          </div>
        </div>
          <div className='team-member-list'>
            <div className='team-member-list-title'>
              Team member list
            </div>
            {/* <H4>Team members list</H4> */}
            <div className="tabla-container">
              <table>
                <colgroup>
                  <col style={{ width: '76px' }} /> {/* Ancho de la primera columna */}
                  <col style={{ width: '289px' }} /> {/* Ancho de la segunda columna */}
                </colgroup>
                <thead>
                  <tr className="header-row">
                    <th className='the-checkbox-th'><input type="checkbox" id="" name="" value="" height="17px" width="16px" /></th>
                    <th>Name</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'fila-par' : 'fila-impar'}>
                      <td className='the-checkbox-td'><input type="checkbox" id="" name="" value="" /></td>
                      <td>
                        <img src={ProfileIcon} alt="Icono" width="32px" height="32px" />
                        {item.nombre}
                      </td>
                      <td>{item.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* <table className="table" style={{ backgroundColor: '#313C4C', color: '#A7A8AC' }} >
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
            </table> */}
          </div>
        </div>
  );
};

export default UsersList;
