import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardBlockComponent } from './user-card-block.component';

describe('UserCardBlockComponent', () => {
  let component: UserCardBlockComponent;
  let fixture: ComponentFixture<UserCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
