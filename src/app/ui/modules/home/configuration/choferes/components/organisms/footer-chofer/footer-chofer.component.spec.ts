import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChoferComponent } from './footer-chofer.component';

describe('FooterChoferComponent', () => {
  let component: FooterChoferComponent;
  let fixture: ComponentFixture<FooterChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterChoferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
