// //Sample Page
import SamplePage from '../Components/Pages/PageLayout/SimplePage';

// Team members
import ListMembers from "../Components/Members/ListMembers";
import AddTeamMember from "../Components/Members/AddTeamMember";
import EditMember from "../Components/Members/EditMember";
import TeamGroupPage from "../Components/Members/TeamGroup";
import SearchMemberPage from "../Components/Members/SearchMember";

export const routes = [
  // //page
  // { path: `${process.env.REACT_APP_}/:layout`, Component: <SamplePage /> },
  { path: `${process.env.REACT_APP_}/`, Component: <SamplePage /> },

  // // Team members
  { path: `${process.env.REACT_APP_}/members/`, Component: <ListMembers /> },
  { path: `${process.env.REACT_APP_}/member/add/`, Component: <AddTeamMember /> },
  { path: `${process.env.REACT_APP_}/member/edit/:userId`, Component: <EditMember /> },
  { path: `${process.env.REACT_APP_}/members-groups/`, Component: <TeamGroupPage /> },
  { path: `${process.env.REACT_APP_}/search-members/`, Component: <SearchMemberPage /> },

  // // // Team members
  // { path: `${process.env.REACT_APP_}/members/:layout`, Component: <ListMembers /> },
  // { path: `${process.env.REACT_APP_}/member/add/:layout`, Component: <AddTeamMember /> },
  // { path: `${process.env.REACT_APP_}/member/edit/:userId`, Component: <EditMember /> },
  // { path: `${process.env.REACT_APP_}/members-groups/:layout`, Component: <TeamGroupPage /> },
  // { path: `${process.env.REACT_APP_}/search-members/:layout`, Component: <SearchMemberPage /> },
  
];
