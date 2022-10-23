import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSeeAllComponent } from './button-see-all.component';

describe('ButtonSeeAllComponent', () => {
  let component: ButtonSeeAllComponent;
  let fixture: ComponentFixture<ButtonSeeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSeeAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSeeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
