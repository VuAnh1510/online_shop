import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectColorComponent } from './button-select-color.component';

describe('ButtonSelectColorComponent', () => {
  let component: ButtonSelectColorComponent;
  let fixture: ComponentFixture<ButtonSelectColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSelectColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSelectColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
