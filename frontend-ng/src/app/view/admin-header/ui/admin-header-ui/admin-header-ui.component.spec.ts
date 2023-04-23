import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderUiComponent } from './admin-header-ui.component';

describe('AdminHeaderUiComponent', () => {
  let component: AdminHeaderUiComponent;
  let fixture: ComponentFixture<AdminHeaderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeaderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
