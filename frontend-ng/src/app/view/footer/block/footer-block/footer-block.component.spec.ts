import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBlockComponent } from './footer-block.component';

describe('FooterBlockComponent', () => {
  let component: FooterBlockComponent;
  let fixture: ComponentFixture<FooterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
