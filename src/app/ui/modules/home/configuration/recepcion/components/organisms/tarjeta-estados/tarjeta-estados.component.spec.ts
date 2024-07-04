import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEstadosComponent } from './tarjeta-estados.component';

describe('TarjetaEstadosComponent', () => {
  let component: TarjetaEstadosComponent;
  let fixture: ComponentFixture<TarjetaEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaEstadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
