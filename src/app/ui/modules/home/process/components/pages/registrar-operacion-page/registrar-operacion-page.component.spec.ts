import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOperacionPageComponent } from './registrar-operacion-page.component';

describe('RegistrarOperacionPageComponent', () => {
  let component: RegistrarOperacionPageComponent;
  let fixture: ComponentFixture<RegistrarOperacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistrarOperacionPageComponent]
    });
    fixture = TestBed.createComponent(RegistrarOperacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
