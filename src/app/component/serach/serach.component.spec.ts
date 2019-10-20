import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TestpipePipe} from '../../pipe/testpipe.pipe'
import { SerachComponent } from './serach.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SerachComponent', () => {
  let component: SerachComponent;
  let fixture: ComponentFixture<SerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachComponent,TestpipePipe ],
      imports: [HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
