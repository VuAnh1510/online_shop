import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectMemoryComponent } from './button-select-memory.component';

describe('ButtonSelectMemoryComponent', () => {
  let component: ButtonSelectMemoryComponent;
  let fixture: ComponentFixture<ButtonSelectMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSelectMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSelectMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
