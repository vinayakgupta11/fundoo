import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogueComponent } from './cart-dialogue.component';

describe('CartDialogueComponent', () => {
  let component: CartDialogueComponent;
  let fixture: ComponentFixture<CartDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
