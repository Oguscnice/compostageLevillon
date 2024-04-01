import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  constructor() { }

  activePage: string = '';

  changeActivePage(newRouterLinkClicked: string) {
    this.activePage = newRouterLinkClicked;
  }
}
