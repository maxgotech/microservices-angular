import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeUiComponent } from './admin-home-ui.component';

describe('AdminHomeUiComponent', () => {
  let component: AdminHomeUiComponent;
  let fixture: ComponentFixture<AdminHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
