import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioSearchComponent } from './servicio-search.component';

describe('ServicioSearchComponent', () => {
  let component: ServicioSearchComponent;
  let fixture: ComponentFixture<ServicioSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
