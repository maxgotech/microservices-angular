import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeUiComponent } from './main-home-ui.component';

describe('MainHomeUiComponent', () => {
  let component: MainHomeUiComponent;
  let fixture: ComponentFixture<MainHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
