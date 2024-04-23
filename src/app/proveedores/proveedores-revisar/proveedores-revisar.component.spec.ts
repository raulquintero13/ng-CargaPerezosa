import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresRevisarComponent } from './proveedores-revisar.component';

describe('ProveedoresRevisarComponent', () => {
  let component: ProveedoresRevisarComponent;
  let fixture: ComponentFixture<ProveedoresRevisarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresRevisarComponent]
    });
    fixture = TestBed.createComponent(ProveedoresRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
