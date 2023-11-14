import React from 'react';
import SearchIcon from '../../../assets/images/svg-icon/search-solid.svg';
import UsersIcon from '../../../assets/images/svg-icon/users-group.svg';
import MeetingIcon from '../../../assets/images/home/meeting.svg';

const CustomSvgIcon = (props) => {
  const { iconId, ...res } = props;

  const assignIcon = () => {
    switch (iconId) {
      case 'meeting':
        return MeetingIcon;
      case 'users':
        return UsersIcon;
      // Agrega más casos según los valores que necesites.
      default:
        // Puedes devolver un ícono por defecto o manejar el caso en función de tus necesidades.
        return SearchIcon;
    }
  };


  return (
    // <svg {...res}>
    //   <use href={`${process.env.PUBLIC_URL}/svg/${iconId}.svg`}></use>
    // </svg>
    // <img src={`${iconId}`} alt="Search SVG" />
    <img src={assignIcon({iconId})} alt="Search SVG" />
  );
};

export default CustomSvgIcon;
