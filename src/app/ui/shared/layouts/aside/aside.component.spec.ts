import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { ButtonTextIconSidebarComponent } from '../../components/atoms/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  let button: ButtonTextIconSidebarComponent;
  let fixtureButton: ComponentFixture<ButtonTextIconSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        AsideComponent,
        ButtonTextIconSidebarComponent
    ]
});
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;

    fixtureButton = TestBed.createComponent(ButtonTextIconSidebarComponent);
    button = fixtureButton.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
