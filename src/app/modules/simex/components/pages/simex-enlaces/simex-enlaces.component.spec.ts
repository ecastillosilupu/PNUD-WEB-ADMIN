import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimexEnlacesComponent } from './simex-enlaces.component';

describe('EnlacesComponent', () => {
  let component: SimexEnlacesComponent;
  let fixture: ComponentFixture<SimexEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimexEnlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimexEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
