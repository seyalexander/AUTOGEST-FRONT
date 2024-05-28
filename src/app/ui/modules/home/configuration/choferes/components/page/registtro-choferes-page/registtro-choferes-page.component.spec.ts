import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisttroChoferesPageComponent } from './registtro-choferes-page.component';

describe('RegisttroChoferesPageComponent', () => {
  let component: RegisttroChoferesPageComponent;
  let fixture: ComponentFixture<RegisttroChoferesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisttroChoferesPageComponent]
    });
    fixture = TestBed.createComponent(RegisttroChoferesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
