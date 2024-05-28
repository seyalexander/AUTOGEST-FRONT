import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosModelosAutosComponent } from './tabla-datos-modelos-autos.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TablaDatosModelosAutosComponent', () => {
  let component: TablaDatosModelosAutosComponent;
  let fixture: ComponentFixture<TablaDatosModelosAutosComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TablaDatosModelosAutosComponent]
});
    fixture = TestBed.createComponent(TablaDatosModelosAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
