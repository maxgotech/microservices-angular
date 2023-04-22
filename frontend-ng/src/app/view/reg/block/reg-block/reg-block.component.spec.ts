import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegBlockComponent } from './reg-block.component';

describe('RegBlockComponent', () => {
  let component: RegBlockComponent;
  let fixture: ComponentFixture<RegBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
