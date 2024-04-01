export interface ItemMenu {
  name: string;
  routerLink: string;
  submenu : null | { isOpen : boolean,
                     items : { name : string, anchor : string}[]
                    }
}
