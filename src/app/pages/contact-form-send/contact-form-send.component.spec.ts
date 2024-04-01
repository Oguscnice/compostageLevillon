import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSendComponent } from './contact-form-send.component';

describe('ContactFormSendComponent', () => {
  let component: ContactFormSendComponent;
  let fixture: ComponentFixture<ContactFormSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
