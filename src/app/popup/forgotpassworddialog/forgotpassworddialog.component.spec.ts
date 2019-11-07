import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassworddialogComponent } from './forgotpassworddialog.component';

describe('ForgotpassworddialogComponent', () => {
  let component: ForgotpassworddialogComponent;
  let fixture: ComponentFixture<ForgotpassworddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpassworddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpassworddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
