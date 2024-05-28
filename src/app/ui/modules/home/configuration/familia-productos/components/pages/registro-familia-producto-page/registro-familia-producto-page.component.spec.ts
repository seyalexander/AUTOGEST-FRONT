import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFamiliaProductoPageComponent } from './registro-familia-producto-page.component';

describe('RegistroFamiliaProductoPageComponent', () => {
  let component: RegistroFamiliaProductoPageComponent;
  let fixture: ComponentFixture<RegistroFamiliaProductoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegistroFamiliaProductoPageComponent]
    });
    fixture = TestBed.createComponent(RegistroFamiliaProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
