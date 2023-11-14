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
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/:layout`, Component: <SamplePage /> },
  { path: `${process.env.REACT_APP_PUBLIC_URL}/`, Component: <SamplePage /> },

  // // Team members
  { path: `${process.env.REACT_APP_PUBLIC_URL}/members`, Component: <ListMembers /> },
  { path: `${process.env.REACT_APP_PUBLIC_URL}/member/add`, Component: <AddTeamMember /> },
  { path: `${process.env.REACT_APP_PUBLIC_URL}/member/edit/:userId`, Component: <EditMember /> },
  { path: `${process.env.REACT_APP_PUBLIC_URL}/members-groups`, Component: <TeamGroupPage /> },
  { path: `${process.env.REACT_APP_PUBLIC_URL}/search-members`, Component: <SearchMemberPage /> },

  // // // Team members
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/members/:layout`, Component: <ListMembers /> },
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/member/add/:layout`, Component: <AddTeamMember /> },
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/member/edit/:userId`, Component: <EditMember /> },
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/members-groups/:layout`, Component: <TeamGroupPage /> },
  // { path: `${process.env.REACT_APP_PUBLIC_URL}/search-members/:layout`, Component: <SearchMemberPage /> },
  
];
