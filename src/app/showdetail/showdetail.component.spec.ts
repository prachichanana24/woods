import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailComponent } from './showdetail.component';

describe('ShowdetailComponent', () => {
  let component: ShowdetailComponent;
  let fixture: ComponentFixture<ShowdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
