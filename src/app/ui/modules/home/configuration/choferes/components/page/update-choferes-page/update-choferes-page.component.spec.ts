import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChoferesPageComponent } from './update-choferes-page.component';

describe('UpdateChoferesPageComponent', () => {
  let component: UpdateChoferesPageComponent;
  let fixture: ComponentFixture<UpdateChoferesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateChoferesPageComponent]
    });
    fixture = TestBed.createComponent(UpdateChoferesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
