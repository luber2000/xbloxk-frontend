export const MENUITEMS = [
  {
    Items: [
      {
        title: "Lobby",
        icon: "lobby",
        type: "link",
        active: false,
        path: `${process.env.REACT_APP_}/#`,
      },
      {
        title: "Meeting",
        icon: "meeting",
        type: "link",
        active: false,
        path: `${process.env.REACT_APP_}/#`,
      },
      {
        title: "Analytics",
        icon: "analytics",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_}/#`
      },
      {
        title: "Blocks",
        icon: "blocks",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_}/#`
      },
      {
        title: "Team",
        icon: "team",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_}/members-groups/`
      },
      {
        title: "Tasks",
        icon: "tasks",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_}/#`
      },
      // {
      //   title: "Users",
      //   icon: "user",
      //   path: `${process.env.REACT_APP_}/app/users/profile`,
      //   type: "sub",
      //   bookmark: true,
      //   active: false,
      //   children: [
      //     { path: `${process.env.REACT_APP_}/app/users/profile`, type: "link", title: "User Profile" },
      //     { path: `${process.env.REACT_APP_}/app/users/edit`, type: "link", title: "User Edit" },
      //     { path: `${process.env.REACT_APP_}/app/users/cards`, type: "link", title: "User Cards" },
      //   ],
      // },
      // {
      //   title: "Contact",
      //   icon: "contact",
      //   type: "link",
      //   active: false,
      //   path: `${process.env.REACT_APP_}/app/contact-app/contacts`,
      // },
      // { path: `${process.env.REACT_APP_}/app/task`, icon: "task", type: "link", title: "Task" },
      // { path: `${process.env.REACT_APP_}/app/search`, icon: "search", type: "link", title: "Search Result" },
    ],
  },
];
