import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadersupplierComponent } from './loadersupplier.component';

describe('LoadersupplierComponent', () => {
  let component: LoadersupplierComponent;
  let fixture: ComponentFixture<LoadersupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadersupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadersupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
