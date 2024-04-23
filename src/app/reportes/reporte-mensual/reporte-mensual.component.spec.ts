import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMensualComponent } from './reporte-mensual.component';

describe('ReporteMensualComponent', () => {
  let component: ReporteMensualComponent;
  let fixture: ComponentFixture<ReporteMensualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteMensualComponent]
    });
    fixture = TestBed.createComponent(ReporteMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
