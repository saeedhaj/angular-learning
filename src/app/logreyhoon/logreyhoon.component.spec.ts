import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogreyhoonComponent } from './logreyhoon.component';

describe('LogreyhoonComponent', () => {
  let component: LogreyhoonComponent;
  let fixture: ComponentFixture<LogreyhoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogreyhoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogreyhoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
