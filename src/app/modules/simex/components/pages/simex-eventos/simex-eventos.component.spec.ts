import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimexEventosComponent } from './simex-eventos.component';

describe('EventosComponent', () => {
  let component: SimexEventosComponent;
  let fixture: ComponentFixture<SimexEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimexEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimexEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
