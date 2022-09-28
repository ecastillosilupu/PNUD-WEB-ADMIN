import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAlertComponent } from './mensaje-alert.component';

describe('MensajeAlertComponent', () => {
  let component: MensajeAlertComponent;
  let fixture: ComponentFixture<MensajeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
