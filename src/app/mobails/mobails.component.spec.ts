import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobailsComponent } from './mobails.component';

describe('MobailsComponent', () => {
  let component: MobailsComponent;
  let fixture: ComponentFixture<MobailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
