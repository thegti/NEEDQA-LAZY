import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderenquiryComponent } from './loaderenquiry.component';

describe('LoaderenquiryComponent', () => {
  let component: LoaderenquiryComponent;
  let fixture: ComponentFixture<LoaderenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
