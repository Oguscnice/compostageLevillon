import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ItemMenu } from 'src/app/shared/interfaces/ItemMenu';
import { ActivePageService } from 'src/app/shared/services/active-page.service';
import { NAVBAR_USER } from 'src/app/shared/variables/Navbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{

  constructor(
    public activePageService: ActivePageService,
    private renderer: Renderer2,
    ) {}

  @ViewChild('navBar') navBar!: ElementRef;

  navbarUser: ItemMenu[] = NAVBAR_USER;
  isMenuBurgerChecked: boolean = false;
  initialLoad: boolean = true;
  activePage = this.activePageService.activePage

  ngAfterViewInit(): void {
    document.documentElement.style.setProperty(
      '--height-header',
      this.navBar.nativeElement.offsetHeight + 'px'
    );
  }

  changeMenuBurgerVisibility(): void {
    this.isMenuBurgerChecked = !this.isMenuBurgerChecked;
    this.initialLoad = false;
  }

  openSubmenu(itemClicked : ItemMenu){
    const actualState = itemClicked.submenu?.isOpen
    this.closeSubmenu()
    if(itemClicked.submenu){
      itemClicked.submenu.isOpen = !actualState
    }
  }

  closeMenuBurger(menuCheckbox : HTMLInputElement, routerLinkClicked: string, event : Event): void {

    if (menuCheckbox.checked) {
      this.renderer.setProperty(menuCheckbox, 'checked', false);
    }
    event.stopPropagation()
    this.isMenuBurgerChecked = false;
    this.activePageService.changeActivePage(routerLinkClicked);
    this.closeSubmenu()
  }

  closeSubmenu(){
    for(let item of this.navbarUser){
      if(item.submenu){
        item.submenu.isOpen = false
      }
    }
  }
}
