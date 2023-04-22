import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUiComponent } from './reg-ui.component';

describe('RegUiComponent', () => {
  let component: RegUiComponent;
  let fixture: ComponentFixture<RegUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
