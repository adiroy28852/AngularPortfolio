import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordian2Component } from './accordian2.component';

describe('Accordian2Component', () => {
  let component: Accordian2Component;
  let fixture: ComponentFixture<Accordian2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordian2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordian2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
