import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoListaComponent } from './empleado-lista.component';

describe('EmpleadoListaComponent', () => {
  let component: EmpleadoListaComponent;
  let fixture: ComponentFixture<EmpleadoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoListaComponent]
    });
    fixture = TestBed.createComponent(EmpleadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
