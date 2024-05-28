import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDescripcionPrincipalComponent } from './tarjeta-descripcion-principal.component';

describe('TarjetaDescripcionPrincipalComponent', () => {
  let component: TarjetaDescripcionPrincipalComponent;
  let fixture: ComponentFixture<TarjetaDescripcionPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TarjetaDescripcionPrincipalComponent]
});
    fixture = TestBed.createComponent(TarjetaDescripcionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
