import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterreyhoonComponent } from './footerreyhoon.component';

describe('FooterreyhoonComponent', () => {
  let component: FooterreyhoonComponent;
  let fixture: ComponentFixture<FooterreyhoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterreyhoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterreyhoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
