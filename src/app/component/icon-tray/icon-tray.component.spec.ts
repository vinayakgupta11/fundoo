import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconTrayComponent } from './icon-tray.component';

describe('IconTrayComponent', () => {
  let component: IconTrayComponent;
  let fixture: ComponentFixture<IconTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTrayComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
