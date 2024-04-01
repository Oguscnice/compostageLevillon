import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  template: ` <footer class="flex center" #footer>
                <i class="fa-solid fa-envelope" [routerLink]="'/contact'"></i>
              </footer>`,
  styles: [`
            @import "../../scss/variables.scss";

            :root {
              --height-footer: 0px;
            }

            footer {
              margin-top: $normal-margin;
              height: 60px;
              background-color: $green-dark;
              i {
                color: $white;
              }
            }
          `]
})
export class FooterComponent {
  windowSize$ = new Subject<[number, number]>();

  @ViewChild('footer') footer!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event : Event) {
    this.windowSize$.next([window.innerWidth, window.innerHeight]);
    this.adaptFooterHeight();
  }

  ngAfterViewInit(): void {
    this.adaptFooterHeight();
  }

  adaptFooterHeight(): void{
    document.documentElement.style.setProperty(
      '--height-footer',
      this.footer.nativeElement.offsetHeight + 'px'
    );
  }
}
