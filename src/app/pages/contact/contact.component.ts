import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactFormComponent]
})
export class ContactComponent {

}
