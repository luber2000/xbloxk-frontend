import React from 'react';
import UsersIcon from '../../../assets/images/svg-icon/users-group.svg';
import LobbyIcon from '../../../assets/images/home/sidebar/lobby.svg';
import MeetingIcon from '../../../assets/images/home/sidebar/meeting.svg';
import AnalyticsIcon from '../../../assets/images/home/sidebar/analytics.svg';
import BlocksIcon from '../../../assets/images/home/sidebar/blocks.svg';
import TeamIcon from '../../../assets/images/home/sidebar/team.svg';
import TasksIcon from '../../../assets/images/home/sidebar/tasks.svg';
import ToggleIcon from '../../../assets/images/home/sidebar/toggle.svg';
import BlockBoardIcon from '../../../../src/assets/images/home/sidebar/block-board.svg'
import PlusIcon from '../../../../src/assets/images/home/sidebar/plus.svg'

import SearchIcon from '../../../../src/assets/images/home/header/search.svg'
import NotifyIcon from '../../../../src/assets/images/home/header/notify.svg'


const CustomSvgIcon = (props) => {
  const { iconId, ...res } = props;

  const assignIcon = () => {
    switch (iconId) {
      case 'lobby':
        return LobbyIcon;
      case 'meeting':
        return MeetingIcon;
      case 'analytics':
        return AnalyticsIcon;
      case 'blocks':
        return BlocksIcon;
      case 'team':
        return TeamIcon;
      case 'tasks':
        return TasksIcon;
      case 'toggle':
        return ToggleIcon;
      case 'search':
        return SearchIcon;
      case 'notify':
        return NotifyIcon;
      case 'block-board':
        return BlockBoardIcon;
      case 'plus':
        return PlusIcon;
    }
  };


  return (
    // <svg {...res}>
    //   <use href={`${process.env.REACT_APP_PUBLIC_URL}/svg/${iconId}.svg`}></use>
    // </svg>
    // <img src={`${iconId}`} alt="Search SVG" />
    <img src={assignIcon({iconId})} alt="Search SVG" />
  );
};

export default CustomSvgIcon;
