import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCitasComponent } from './tarjeta-citas.component';

describe('TarjetaCitasComponent', () => {
  let component: TarjetaCitasComponent;
  let fixture: ComponentFixture<TarjetaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
