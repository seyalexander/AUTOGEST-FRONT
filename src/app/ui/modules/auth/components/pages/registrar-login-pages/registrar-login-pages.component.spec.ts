import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLoginPagesComponent } from './registrar-login-pages.component';

describe('RegistrarLoginPagesComponent', () => {
  let component: RegistrarLoginPagesComponent;
  let fixture: ComponentFixture<RegistrarLoginPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistrarLoginPagesComponent]
    });
    fixture = TestBed.createComponent(RegistrarLoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
