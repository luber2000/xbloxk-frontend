export const MENUITEMS = [
  {
    Items: [
      {
        title: "Lobby",
        icon: "lobby",
        type: "link",
        active: false,
        path: `${process.env.REACT_APP_PUBLIC_URL}/#`,
      },
      {
        title: "Meeting",
        icon: "meeting",
        type: "link",
        active: false,
        path: `${process.env.REACT_APP_PUBLIC_URL}/#`,
      },
      {
        title: "Analytics",
        icon: "analytics",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/#`
      },
      {
        title: "Blocks",
        icon: "blocks",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/#`
      },
      {
        title: "Team",
        icon: "team",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/members-groups`
      },
      {
        title: "Tasks",
        icon: "tasks",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/#`
      },
      {
        title: "Block Board",
        icon: "block-board",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/#`
      },
      {
        title: "",
        icon: "plus",
        type: "link",
        active: false,
        path : `${process.env.REACT_APP_PUBLIC_URL}/#`
      }
      // {
      //   title: "Users",
      //   icon: "user",
      //   path: `${process.env.REACT_APP_PUBLIC_URL}/app/users/profile`,
      //   type: "sub",
      //   bookmark: true,
      //   active: false,
      //   children: [
      //     { path: `${process.env.REACT_APP_PUBLIC_URL}/app/users/profile`, type: "link", title: "User Profile" },
      //     { path: `${process.env.REACT_APP_PUBLIC_URL}/app/users/edit`, type: "link", title: "User Edit" },
      //     { path: `${process.env.REACT_APP_PUBLIC_URL}/app/users/cards`, type: "link", title: "User Cards" },
      //   ],
      // },
      // {
      //   title: "Contact",
      //   icon: "contact",
      //   type: "link",
      //   active: false,
      //   path: `${process.env.REACT_APP_PUBLIC_URL}/app/contact-app/contacts`,
      // },
      // { path: `${process.env.REACT_APP_PUBLIC_URL}/app/task`, icon: "task", type: "link", title: "Task" },
      // { path: `${process.env.REACT_APP_PUBLIC_URL}/app/search`, icon: "search", type: "link", title: "Search Result" },
    ],
  },
];
