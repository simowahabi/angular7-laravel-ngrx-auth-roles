import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestroleComponent } from './testrole.component';

describe('TestroleComponent', () => {
  let component: TestroleComponent;
  let fixture: ComponentFixture<TestroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
