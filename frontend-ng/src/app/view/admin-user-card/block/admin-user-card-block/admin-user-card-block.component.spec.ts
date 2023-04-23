import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserCardBlockComponent } from './admin-user-card-block.component';

describe('AdminUserCardBlockComponent', () => {
  let component: AdminUserCardBlockComponent;
  let fixture: ComponentFixture<AdminUserCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserCardBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
