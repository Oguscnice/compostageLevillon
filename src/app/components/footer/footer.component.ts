import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  template: ` <footer class="flex center space-around" #footer>
                <i class="fa-solid fa-leaf" [routerLink]="'/'"></i>
                <a class="flex center"
                   href="../assets/Guide_compostage.pdf"
                   download="Guide_compostage.pdf">
                  <i class="fa-solid fa-file-pdf"></i>
                  <p>Guide du Compostage (PDF)</p>
                </a>
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
