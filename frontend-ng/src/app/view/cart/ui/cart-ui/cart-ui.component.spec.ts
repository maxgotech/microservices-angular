import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartUiComponent } from './cart-ui.component';

describe('CartUiComponent', () => {
  let component: CartUiComponent;
  let fixture: ComponentFixture<CartUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
