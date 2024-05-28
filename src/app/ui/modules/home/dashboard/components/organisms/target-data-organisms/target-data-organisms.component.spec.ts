import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDataOrganismsComponent } from './target-data-organisms.component';

describe('TargetDataOrganismsComponent', () => {
  let component: TargetDataOrganismsComponent;
  let fixture: ComponentFixture<TargetDataOrganismsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TargetDataOrganismsComponent]
});
    fixture = TestBed.createComponent(TargetDataOrganismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
