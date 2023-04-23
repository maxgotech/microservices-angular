import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserCardUiComponent } from './admin-user-card-ui.component';

describe('AdminUserCardUiComponent', () => {
  let component: AdminUserCardUiComponent;
  let fixture: ComponentFixture<AdminUserCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserCardUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
