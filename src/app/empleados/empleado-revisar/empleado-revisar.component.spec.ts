import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoRevisarComponent } from './empleado-revisar.component';

describe('EmpleadoRevisarComponent', () => {
  let component: EmpleadoRevisarComponent;
  let fixture: ComponentFixture<EmpleadoRevisarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoRevisarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
