import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderreyhoonComponent } from './headerreyhoon.component';

describe('HeaderreyhoonComponent', () => {
  let component: HeaderreyhoonComponent;
  let fixture: ComponentFixture<HeaderreyhoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderreyhoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderreyhoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
