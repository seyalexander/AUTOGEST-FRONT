import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { TargetDataOrganismsComponent } from '../../organisms/target-data-organisms/target-data-organisms.component';
import { TarjetaDescripcionPrincipalComponent } from '../../organisms/tarjeta-descripcion-principal/tarjeta-descripcion-principal.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DashboardPageComponent,
        TargetDataOrganismsComponent,
        TarjetaDescripcionPrincipalComponent]
});
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
