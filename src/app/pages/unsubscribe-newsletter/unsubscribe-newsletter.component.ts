import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-unsubscribe-newsletter',
  standalone: true,
  imports: [ NgIf, LoaderComponent ],
  templateUrl: './unsubscribe-newsletter.component.html',
  styles: [`@import "../../scss/forms.scss";`]
})
export class UnsubscribeNewsletterComponent {

  emailValue: string = '';

  isFormClicked: boolean = false;
  isLoaderVisible: boolean = false;

  changeEmailValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.emailValue = inputElement.value;
  }

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.emailValue);
  }

  changeSubmitted() {
    this.isFormClicked = true;
    if (this.validateEmail()) {
      this.isLoaderVisible = true;
    }
  }

}
