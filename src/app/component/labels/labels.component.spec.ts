import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LabelsComponent } from './labels.component';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA,MatDialogRef,MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LabelsComponent', () => {
  let component: LabelsComponent;
  let fixture: ComponentFixture<LabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ FormsModule,ReactiveFormsModule, HttpClientTestingModule ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
