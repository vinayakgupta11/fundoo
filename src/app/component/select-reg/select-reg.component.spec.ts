import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegComponent } from './select-reg.component';

describe('SelectRegComponent', () => {
  let component: SelectRegComponent;
  let fixture: ComponentFixture<SelectRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
