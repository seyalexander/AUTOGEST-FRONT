import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitasPageComponent } from './lista-citas-page.component';

describe('ListaCitasPageComponent', () => {
  let component: ListaCitasPageComponent;
  let fixture: ComponentFixture<ListaCitasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCitasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCitasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
