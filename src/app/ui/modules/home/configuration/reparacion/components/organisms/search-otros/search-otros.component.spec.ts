import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOtrosComponent } from './search-otros.component';

describe('SearchOtrosComponent', () => {
  let component: SearchOtrosComponent;
  let fixture: ComponentFixture<SearchOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOtrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
