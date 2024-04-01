import { ItemMenu } from '../interfaces/ItemMenu';

export const NAVBAR_USER: ItemMenu[] = [
  {
    name: 'Accueil',
    routerLink: '/',
    submenu : null
  },
  {
    name: 'Concept',
    routerLink: '/concept',
    submenu : null
  },
  {
    name: 'Bonnes Pratiques',
    routerLink: '/bonnes-pratiques',
    submenu : null
  },
  // {
  //   name: 'A Propos',
  //   routerLink: '/qui-suis-je',
  //   submenu : {
  //     isOpen : false,
  //     items : [    
  //           { name : "Ma démarche", anchor : "myApproach" },
  //           { name : "Qui suis-je ?", anchor : "whoAmI" }
  //            ]
  //             },
  // },
  {
    name: 'Contact',
    routerLink: '/contact',
    submenu : null
  },
];
