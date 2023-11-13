export const MENUITEMS = [
  {
    Items: [
      {
        title: "Lobby",
        icon: "contact",
        type: "link",
        active: false,
        path: `${process.env.PUBLIC_URL}/#`,
      },
      {
        title: "Meeting",
        icon: "contact",
        type: "link",
        active: false,
        path: `${process.env.PUBLIC_URL}/#`,
      },
      {
        title: "Analytics",
        icon: "home",
        type: "link",
        active: false,
        path : `${process.env.PUBLIC_URL}/#`
      },
      {
        title: "Blocks",
        icon: "home",
        type: "link",
        active: false,
        path : `${process.env.PUBLIC_URL}/#`
      },
      {
        title: "Team",
        icon: "home",
        type: "link",
        active: false,
        path : `${process.env.PUBLIC_URL}/members-groups`
      },
      {
        title: "Tasks",
        icon: "home",
        type: "link",
        active: false,
        path : `${process.env.PUBLIC_URL}/#`
      },
      // {
      //   title: "Users",
      //   icon: "user",
      //   path: `${process.env.PUBLIC_URL}/app/users/profile`,
      //   type: "sub",
      //   bookmark: true,
      //   active: false,
      //   children: [
      //     { path: `${process.env.PUBLIC_URL}/app/users/profile`, type: "link", title: "User Profile" },
      //     { path: `${process.env.PUBLIC_URL}/app/users/edit`, type: "link", title: "User Edit" },
      //     { path: `${process.env.PUBLIC_URL}/app/users/cards`, type: "link", title: "User Cards" },
      //   ],
      // },
      // {
      //   title: "Contact",
      //   icon: "contact",
      //   type: "link",
      //   active: false,
      //   path: `${process.env.PUBLIC_URL}/app/contact-app/contacts`,
      // },
      // { path: `${process.env.PUBLIC_URL}/app/task`, icon: "task", type: "link", title: "Task" },
      // { path: `${process.env.PUBLIC_URL}/app/search`, icon: "search", type: "link", title: "Search Result" },
    ],
  },
];
