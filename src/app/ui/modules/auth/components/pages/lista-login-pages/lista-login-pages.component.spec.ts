import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLoginPagesComponent } from './lista-login-pages.component';

describe('ListaLoginPagesComponent', () => {
  let component: ListaLoginPagesComponent;
  let fixture: ComponentFixture<ListaLoginPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaLoginPagesComponent]
    });
    fixture = TestBed.createComponent(ListaLoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
