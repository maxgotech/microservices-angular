import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeBlockComponent } from './admin-home-block.component';

describe('AdminHomeBlockComponent', () => {
  let component: AdminHomeBlockComponent;
  let fixture: ComponentFixture<AdminHomeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
