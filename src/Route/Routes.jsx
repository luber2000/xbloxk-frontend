// //Sample Page
import SamplePage from '../Components/Pages/PageLayout/SimplePage';

// Team members
import ListMembers from "../Components/Members/ListMembers";
import AddTeamMember from "../Components/Members/AddTeamMember";

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/:layout`, Component: <SamplePage /> },

  // // Team members
  { path: `${process.env.PUBLIC_URL}/members/:layout`, Component: <ListMembers /> },
  { path: `${process.env.PUBLIC_URL}/member/add/:layout`, Component: <AddTeamMember /> },
  
];
