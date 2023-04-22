import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBlockComponent } from './user-profile-block.component';

describe('UserProfileBlockComponent', () => {
  let component: UserProfileBlockComponent;
  let fixture: ComponentFixture<UserProfileBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
