import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmpleadosComponent } from './search-empleados.component';

describe('SearchEmpleadosComponent', () => {
  let component: SearchEmpleadosComponent;
  let fixture: ComponentFixture<SearchEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
