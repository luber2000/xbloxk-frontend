// //Sample Page
import SamplePage from '../Components/Pages/PageLayout/SimplePage';

// Team members
import ListMembers from "../Components/Members/ListMembers";
import AddTeamMember from "../Components/Members/AddTeamMember";
import EditMember from "../Components/Members/EditMember"
import TeamGroupPage from "../Components/Members/TeamGroupPage"

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/:layout`, Component: <SamplePage /> },

  // // Team members
  { path: `${process.env.PUBLIC_URL}/members/:layout`, Component: <ListMembers /> },
  { path: `${process.env.PUBLIC_URL}/member/add/:layout`, Component: <AddTeamMember /> },
  { path: `${process.env.PUBLIC_URL}/member/edit/:userId`, Component: <EditMember /> },
  { path: `${process.env.PUBLIC_URL}/members-groups/:layout`, Component: <TeamGroupPage /> },
  
];
