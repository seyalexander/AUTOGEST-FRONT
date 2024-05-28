import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChoferesPageComponent } from './lista-choferes-page.component';

describe('ListaChoferesPageComponent', () => {
  let component: ListaChoferesPageComponent;
  let fixture: ComponentFixture<ListaChoferesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaChoferesPageComponent]
    });
    fixture = TestBed.createComponent(ListaChoferesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
