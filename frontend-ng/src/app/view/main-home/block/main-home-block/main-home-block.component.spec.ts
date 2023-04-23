import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeBlockComponent } from './main-home-block.component';

describe('MainHomeBlockComponent', () => {
  let component: MainHomeBlockComponent;
  let fixture: ComponentFixture<MainHomeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
