import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomereyhoonComponent } from './homereyhoon.component';

describe('HomereyhoonComponent', () => {
  let component: HomereyhoonComponent;
  let fixture: ComponentFixture<HomereyhoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomereyhoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomereyhoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
