import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListaCitaComponent } from './table-lista-cita.component';

describe('TableListaCitaComponent', () => {
  let component: TableListaCitaComponent;
  let fixture: ComponentFixture<TableListaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListaCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
