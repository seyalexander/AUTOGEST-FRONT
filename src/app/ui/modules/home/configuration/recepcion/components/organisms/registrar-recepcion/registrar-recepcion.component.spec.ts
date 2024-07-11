import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRecepcionComponent } from './registrar-recepcion.component';

describe('RegistrarRecepcionComponent', () => {
  let component: RegistrarRecepcionComponent;
  let fixture: ComponentFixture<RegistrarRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarRecepcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
