import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsgContentComponent } from './gsg-content.component';

describe('GsgContentComponent', () => {
  let component: GsgContentComponent;
  let fixture: ComponentFixture<GsgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
